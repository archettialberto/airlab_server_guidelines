# Welcome

Welcome to the AIRLab Servers documentation! :books: This comprehensive guide will provide you with all the
information you need to effectively utilize our server for your research experiments. By following
these guidelines, you will be able to make the most of the available resources, schedule your experiments
effectively, and maintain a clean and organized workspace on the server. We want to foster a **collaborative** and
**productive** environment for all lab members, enabling groundbreaking research in Robotics and Machine
Learning! :robot:

## Duties of AIRLab Servers Users

As a new AIRLab member, you gain access to AIRLab Servers (`Westworld` and/or `Elysium`) for your research work.
With being an AIRLab Servers user comes the **responsibility** :shield: to adhere to the established rules and guidelines:

* **Account Usage** :floppy_disk: - Each student will be provided with a new Linux account on the server. This account
  will have a
  designated space limit of **20GB** in the home `~` directory. :warning: **This space is meant for storing code
  and small files only**. For datasets and large files, you must use a specific directory
  called `~/datasets/private`, which is a link to our
  NAS system. Please ensure that you store your datasets in `~/datasets/private` to avoid exceeding
  your space limit. To check the amount of space you are currently using, you can
  run `ncdu -x ~`.

* **Resource Booking** :calendar: - To ensure fair resource allocation and effective sharing, :warning: **all cores and
  GPUs on the server must be booked in advance**. Please ask your co-supervisor for the links!
  Before running your experiments, make sure to check the availability of the required resources and book them accordingly. Remember to book also the CPU cores you will require.

* **Containerized Experiments** :whale: - It is mandatory to :warning: **run your code inside Docker
  containers**. [Docker](https://www.docker.com/)
  provides a lightweight and isolated environment, ensuring consistency and reproducibility of your experiments. On this website, you will find a guide that will walk you through the process of setting up and using Docker containers for your experiments.

* **Clear Documentation** :page_facing_up: - :warning: **We expect all lab members to maintain clear and organized
  documentation for their projects**. This includes a `README.md` file with a brief description of the project and how to use the code, a Dockerfile for building the Docker image, and a run configuration file for running the experiments. Always remember that
  your scientific work may be used by other lab members in the future, so it is important to keep your code and
  documentation clean and organized! :sparkles:
