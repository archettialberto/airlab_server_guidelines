# Welcome

Welcome to the `Westworld` Lab Server documentation! :books: This comprehensive guide will provide you with all the
information
you need to effectively utilize our server for your research experiments. By following
these guidelines, you will be able to make the most of the available resources, schedule your experiments
effectively, and maintain a clean and organized workspace on the server. We want to foster a **collaborative** and
**productive** environment for all lab members, enabling groundbreaking research in Robotics and Machine
Learning! :robot:

## Duties of Westworld Users

As a new AIRLab member, you gain access to the `Westworld` Lab Server for your research work.
With being a `Westworld` user comes the **responsibility** :shield: to adhere to the established rules and guidelines:

* **Account Usage** :floppy_disk: - Each student will be provided with a new Linux account on `Westworld`. This account
  will have a
  designated space limit of **20GB** in the home `~` directory. :warning: **This space is meant for storing code
  and small files only**. For datasets and large files, you must use a specific directory
  called `~/datasets/private`, which is a link to our
  NAS system. Please ensure that you store your datasets in `~/datasets/private` to avoid exceeding
  your space limit. To check the amount of space you are currently using, you can
  run `ncdu -x ~`.

* **Resource Booking** :calendar: - To ensure fair resource allocation and effective sharing, :warning: **all cores and
  GPUs on the server must be booked in advance**. We have set up a resource
  booking [Google Sheet](https://docs.google.com/spreadsheets/d/1n6HDbSX0Pe0zcRA0iBYDStrud7d_yRhBSrpFld4WNxs/edit#gid=1311829678).
  Before running your experiments, make sure to check the availability of
  the required resources and book them accordingly.

* **Containerized Experiments** :whale: - It is mandatory to :warning: **run your code inside Docker
  containers**. [Docker](https://www.docker.com/)
  provides a lightweight and isolated environment, ensuring consistency and reproducibility of your experiments. We have
  prepared a separate guide, which will walk you through the process of
  setting up and using Docker containers for your experiments.
