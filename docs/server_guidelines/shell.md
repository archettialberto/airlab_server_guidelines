# Shell Survival Guide

Welcome to the Shell Survival Guide! :shell: In this guide, we will explore the basic tools and commands that will
empower you to navigate and utilize the Linux shell efficiently on our AIRLab Servers. Whether you are new to the
command line or looking to brush up your skills, this guide will equip you with the essential knowledge to streamline your machine learning experiments and research. :rocket:

The rest of this guide focuses on our `Westworld` server, but all other servers can be used in the same exact fashion.

## Connecting to the Server

To begin, you need to establish a secure connection to `Westworld` using SSH (Secure Shell).
Follow the steps below to connect:

1. Open your preferred terminal application.
2. Use the following command to connect to the server:

``` bash
ssh <your_surname>@<westworld_ip>
```

Replace username with your assigned Linux user account on `Westworld`.

Enter your password when prompted. Congratulations! You are now connected to the `Westworld` Lab Server and ready to
unleash the power of the Linux shell. 
To log out of the server, simply run `exit`.

## Essential Commands

### Navigating the File System

* `ls`: List files and directories in the current directory.
* `ls -a`: List all files and directories, including hidden files.
* `cd`: Change directory. Use `cd <directory>` to navigate to a specific directory or `cd ..` to go up one level.
* `pwd`: Print the current working directory.
* `clear`: Clear the terminal screen for a fresh start.

### File Operations

* `rm <filename>`: Remove files. Use with caution, as this command permanently deletes files. Add the `-r` flag to
  remove directories recursively.
* `mv <source> <destination>`: Move or rename files and directories.
* `cp <source> <destination>`: Copy files and directories.
* `mkdir <dir_name>`: Create a new directory.
* `touch <filename>`: Create a new file.
* `cat <filename>`: Display the contents of a file.
* `less <filename>`: Display the contents of a file one page at a time. Use the arrow keys to navigate and `q` to exit.

### Monitoring Resources

* `htop`: Monitor system resources such as CPU and memory usage.
* `nvidia-smi`: Display NVIDIA GPU usage and statistics.
* `watch nvidia-smi`: Continuously monitor GPU usage and update the information periodically.

### Text Editing

* `nano`: A simple text editor to create and edit files directly in the terminal. Use `nano <filename>` to open a file.
* `vim`: A less simple (but more fun?) text editor. Use `vim <filename>` to open a file. You can find a tutorial [here](https://missing.csail.mit.edu/2020/editors/). (If you just ran it without reading the tutorial and don't know how to quit it, type `:q` :wink:)

### File Transfer

* `scp`: Securely copy files between your local machine and the `Westworld` Lab Server. Use the following syntax to copy
  a
  file from the server to your local machine:
  ``` bash
  scp <your_surname>@<westworld_ip>:/path/to/file/on/westworld /path/on/local/machine
  ```

### Miscellaneous

* `history`: Display a list of previously executed commands.
* `history | grep <search_term>`: Search for a specific command in the history.

## Command Help and Documentation

When in doubt or needing additional information about a specific command, Linux provides built-in help and
documentation. Here are a few ways to access it:

* `man`: The manual pages command. Use `man <command>` to display detailed information about a specific command.
* `--help`: Many commands provide a brief overview of their usage and options when used with the `--help` flag.

Remember, practice makes perfect! The more you use the Linux shell, the more comfortable you will become with these
commands and tools. If you have any questions or need additional help, please reach out to the lab members.

## Advanced topics

### Further resources

You can find more details on how to use the shell and how to approach any computer science project in this very good MIT course: 

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/).

### Home setup
When working on a shell system, you would typically set your home folder with all the necessary dotfiles once and for all. We suggest maintaining a repo of all your dotfiles for restoring your configs in the future. (Just be careful to keep the repo private in case you include sensitive information!)

If you want, you can start from the following vim/bash/tmux environment with all the necessary dotfiles already set up:

- [Paolo Cudrano - Home (bash)](https://github.com/PCudrano/bash_home)
