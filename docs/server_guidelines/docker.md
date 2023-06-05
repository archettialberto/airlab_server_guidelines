# Docker Survival Guide

Welcome to the Docker Survival Guide! :whale: In this guide, we will walk you through the process of building Docker
images on the `Westworld` Lab Server. Docker allows you to create reproducible and isolated environments, ensuring
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

```dockerfile
# Start with a base image
FROM python:3.10

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

# Install Python dependencies
COPY requirements.txt /tmp/requirements.txt
RUN pip install -r /tmp/requirements.txt

CMD ["bash"]
```

Please, note that the `FROM` command specifies the base image for your Docker image. In this case, we are using the
`python:3.10` image, which is a lightweight Linux distribution with Python 3.10 installed. You may use a different base
image, depending on your requirements. For example, if you need to use TensorFlow, we highly recommend using the
`tensorflow/tensorflow:latest-gpu` image, which comes with CUDA and cuDNN pre-installed.

In order to run Jupyter notebooks, you need to add the following lines to the Dockerfile before the `CMD` command:

```dockerfile
# Enable Jupyter
RUN pip install jupyter tornado nbconvert
RUN mkdir -p /.local
RUN chmod -R 777 /.local
```

### Requirements

Inside the `requirements.txt` file, list all the Python packages and dependencies required for your deep learning
experiment. Each package should be on a separate line, following the format `package_name==version`.

For example, your `requirements.txt` file might look like this:

```text
torch==1.9.0
tensorflow==2.6.0
numpy==1.21.1
scikit-learn==0.24.2
```

Add all the necessary packages and their versions according to your experiment's requirements. If you are not sure
which packages you need, you can rely on [pipreqs](https://github.com/bndr/pipreqs).

## Building the Docker Image

To build the Docker image, navigate to the directory containing the Dockerfile and `requirements.txt`
files. If you followed the project structure above, you can run the following command:

```bash
cd ~/<my_new_project>
```

Run the following command to build the image:

```bash
docker build -rm -t <your_surname>/<image_name>:<version> .
```

For example, if your surname is `rossi`, the image name is `deep_learning_shenanigans`, and the version is `v1`, you can
run:

```bash
docker build -rm -t rossi/deep_learning_shenanigans:v1 .
```

This may take a few minutes to complete. Set back and relax :coffee:

## Listing Docker Images

To list all the Docker images on `Westworld`, run:

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

## Running the Docker Image

The `Westworld` Lab Server relies on a user-friendly script :nerd: to help you launch experiments with Docker.
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

### Running the Docker Image

To run the Docker image, navigate to the project folder and run:

```text
run-docker <gpu_id or ''> <cpu_id or ''> <your_command>
```

For example, if you want to run the script `main.py` on GPU 0 using the cores 8 to 16, you can run:

```text
run-docker 0 8-16 python main.py
```

Lastly, if you do not want to use a GPU, write `''` instead of the GPU id. For example, if you want to run the script
`main.py` on CPU 0 using the cores 8 to 16, you can run:

```text
run-docker '' 8-16 python main.py
```

### Running Jupyter Notebooks

If you want to run a Jupyter notebook on GPU 1 using the cores 0 to 7, you can run:

```text
run-docker 1 0-7 jupyter notebook --ip=0.0.0.0 --no-browser
```

Please, remind that you need to add `-p 8899:8888` to the `docker_args` in the `.runconfigs` file to expose port `8888`
from the container to port `8899` on the host. In this way, you can access the Jupyter notebook from your browser at
`http://<westworld-ip-address>:8899/?token=...`. You can find the `token` in the output of the `run-docker` command.
