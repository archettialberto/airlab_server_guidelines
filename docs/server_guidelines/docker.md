# Docker Survival Guide

Welcome to the Docker Survival Guide! :whale: In this guide, we will walk you through the process of building Docker
images on the AIRLab Servers. Docker allows you to create reproducible and isolated environments, ensuring
consistent results across
different systems. By following the steps below, you will be able to set up a Docker image with the necessary
dependencies and a virtual environment to run your experiments seamlessly. :robot:

## Project Structure

First, let's create a directory structure :file_folder: for your project. This will help you keep the code organized and
maintain a clean workspace. We recommend the following structure for your project:

```text
~
├── <my_project>        # Your project directory
│   ├── src                 # Source code for your project
│   │   ├── <my_code>.py
│   │   └── ...
│   ├── Dockerfile          # Dockerfile for building your image
│   ├── requirements.txt    # Python dependencies for your project
│   ├── .runconfigs         # Run configuration (more on that later)
│   ├── README.md           # Project description
│   └── ...
└── ...
```

## Docker Image Definition

### Dockerfile

Open the Dockerfile with a text editor, and add the following content:

```dockerfile linenums="1"
# Start with a base Ubuntu image with CUDA and cuDNN pre-installed
FROM nvidia/cuda:11.7.1-cudnn8-devel-ubuntu20.04

# Install python3.10 and pip
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y \
  build-essential ca-certificates python3.10 python3.10-dev python3.10-distutils git vim wget cmake python3-pip
RUN ln -sv /usr/bin/python3.10 /usr/bin/python
RUN ln -svf /usr/bin/python3.10 /usr/bin/python3

# Install system dependencies
RUN apt update && apt install -y \
    build-essential \
    curl \
    software-properties-common \
    git \
    wget

# Set the working directory
WORKDIR /exp

# Create a new virtual environment
ENV VIRTUAL_ENV=/opt/venv
RUN python -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Enable Jupyter (remove comments if needed)
# RUN pip install jupyter tornado nbconvert
# RUN mkdir -p /.local
# RUN chmod -R 777 /.local

# Enable OpenCV  (remove comment if needed)
# RUN apt install -y libsm6 libxext6 libxrender-dev ffmpeg

# Install Python dependencies
ADD requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt

ENV SHELL /bin/bash

CMD ["bash"]
```

The `FROM` command specifies the base image for your Docker image. In this case, we are using an Nvidia image with CUDA and cuDNN pre-installed (in order to properly access the GPUs). You may use a different base
image, depending on your requirements. For example, if you need to use TensorFlow, you can use the `tensorflow/tensorflow:latest-gpu` image, which comes also with the latest version of tensorflow pre-installed.

If you plan to run Jupyter notebooks or OpenCV, you can decomment the related lines.

If you need to install further apt packages, you can do so adding the following command before line `35`:
```dockerfile
RUN apt install -y <apt packages>
```

### Requirements

Inside the `requirements.txt` file, list all the Python packages and dependencies required for your experiment. Each package should be on a separate line, following the format `package_name==version`. The version is optional but <ins>strongly recommended</ins> for future replicability.

If you work with PyTorch, your `requirements.txt` file might look like this:

```text
numpy==1.26.1
torch==1.13.1
scikit-learn == 1.3.0
```

The same setup using Tensorflow would look like this:

```text
numpy==1.26.1
tensorflow==2.14.0
scikit-learn == 1.3.0
```

Add all the necessary packages and their versions according to your experiment's requirements. 
If you are not sure which packages you need, you can rely on [pipreqs](https://github.com/bndr/pipreqs).

## Building the Docker Image

To build the Docker image, navigate to the directory containing the Dockerfile and `requirements.txt`
files. If you followed the project structure above, you can run the following command:

```bash
cd ~/<my_new_project>
```

Run the following command to build the image:

```bash
docker build -t <your_surname>/<image_name>:<version> .
```

For example, if your surname is `rossi`, the image name is `deep_learning_shenanigans`, and the version is `v1`, you can
run:

```bash
docker build -t rossi/deep_learning_shenanigans:v1 .
```

This may take a few minutes to complete. Set back and relax :coffee:

## Listing Docker Images

To visualize all the Docker images on the server, run:

```bash
docker image list
```

If you want to list only the images you created, run:

```bash
docker image list | grep <your_surname>
```

Lastly, if you want to remove one of your images, run:

```bash
docker rmi <image_id>  # example: docker rmi 9a6d05b964cb
```

You can obtain the image_id using the command `docker image list` seen above.

## Running a Docker Container

The AIRLab Servers rely on a user-friendly script :nerd: to help you launch experiments with Docker.
The script is called `run-docker`.
Every time you execute a command using `run-docker`, the current folder will be
mounted in the container file system under the `/exp` working directory. This means that you can access all the files
in the current folder from within the container without the need to rebuild the Docker image.

### Configuring run-docker

`run-docker` can be configured by creating a `.runconfigs` file in the project folder. This file can be used to specify
additional arguments to the `run-docker` command.

Here are some cool things you can do with `.runconfigs`:

```text
# Docker run options
docker_args: -v ~/datasets/private/my_dataset:/data

# Specify the name of the container
container_name: {user}_DeepLearningShenanigans_GPU{args.gpu}_{date}

# Specify the Docker image to use
image_name: rossi/deep_learning_shenanigans:v1
```

Among the useful Docker arguments, you can specify the following:

* `-v` to **mount a folder in the container**. Example: `-v ~/datasets/private/my_dataset:/data` mounts the folder
  `~/datasets/private/my_dataset` in the container under the `/data` directory. In this way, you can access your dataset
  from within the container.
* `-p` to **expose a port from the container to the host**. Example: `-p 8899:8888` exposes port `8888` from the
  container to port `8899` on the host. In this way, you can access Jupyter notebooks or TensorBoard loggers running
  inside the container from your browser.
* `-e` to **set environment variables**. Example: `-e PYTHONPATH=/exp` sets the environment variable `PYTHONPATH` to the
  project root `/exp` in the container.

You can find all arguments [here](https://docs.docker.com/engine/reference/commandline/run/).

### Running the Docker Image

To run the Docker image, navigate to the project folder and run:

```text
run-docker <gpu_id or ''> <cpu_id or ''> <your_command>
```

For example, if you want to run the script `main.py` on GPU 3 using the cores 8 to 16, you can run:

```text
run-docker 3 8-16 python main.py
```

Lastly, if you do not want to use a GPU, write `''` instead of the GPU ID. For example, if you want to run the script
`main.py` only on CPU, using the CPU cores 8 to 16, you can run:

```text
run-docker '' 8-16 python main.py
```

### Running Jupyter Notebooks

If you want to run a Jupyter notebook, you should add `-p 8899:8888` to the `docker_args` option in your `.runconfigs`. This exposes port `8888` on the container to port `8899` on the host. 

Then, you can run the container with the following command (e.g., on GPU 1 using the cores 0 to 7):

```text
run-docker 1 0-7 jupyter notebook --ip=0.0.0.0 --no-browser
```

Now, you can access the Jupyter notebook from your browser at `http://<server-ip-address>:8899/?token=...`. You can find the `token` in the output of the `run-docker` command.

## Extending your Docker Image
This guide helped you set up a simple Docker image, which is already enough in most situations.

Should you need further customization, you can check out the following repo with a more complete Docker template: [https://github.com/PCudrano/docker_template](https://github.com/PCudrano/docker_template)

You'll find that this image sets up a user with your same privileges in your docker container. This is needed if you need to access shared folders on the servers (e.g., shared datasets).
Additionally, this image allows you to specify further apt packages you require through a specific file `apt_requirement.txt`, so that you ideally will never need to modify the Dockerfile directly.
