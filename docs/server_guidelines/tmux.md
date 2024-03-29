# Tmux Survival Guide

Welcome to the Tmux Survival Guide! :tv: In this guide, you will learn how to leverage the power of Tmux to create
persistent sessions on the AIRLab Servers. 
Tmux is a terminal multiplexer that allows you to manage multiple sessions and windows within a single terminal, enabling you to keep your code running even when you log out of the server. 
A quick reference of essential Tmux commands is available [here](https://tmuxcheatsheet.com/).
Let's dive in! :rocket:

## Setting Up Tmux

To start using Tmux, follow these steps:

1. Connect to an AIRLab Server using SSH as you did previously.
2. Once connected, enter the following command to start a new Tmux session:
``` bash
tmux new -s <session_name>
```
Replace `<session_name>` with a descriptive name for your session.

Congratulations! You are now inside a Tmux session. You can execute commands and run processes as usual. 
Please, note that sessions are persistent, which means that :warning: **they will continue running even if you log out of the server**.

## Basic Tmux Commands

Here are some essential Tmux commands to help you navigate and manage your sessions and windows.

### Sessions

* **Detaching from a Session**: To detach from a Tmux session while keeping it running, press `Ctrl-b` followed by `d`. You will
return to your regular shell while the Tmux session continues in the background.

* **Reattaching to a Session**: To reattach to a previously created Tmux session, use the following command:
``` bash
tmux a -t <session_name>
```
Replace `<session_name>` with the name of the session you want to reattach to.

* **Listing Sessions**: To see a list of all active Tmux sessions, run:
``` bash
tmux ls
```

* **Killing a Session**: To kill a Tmux session, run:
``` bash
tmux kill-session -t <session_name>
```

### Windows and Panes

* **Creating Windows**: Within a Tmux session, you can create multiple windows to organize your work. Use the key combination
`Ctrl-b` followed by `c` to create a new window.

* **Renaming Windows**: To rename a window, press `Ctrl-b` followed by `,` and enter the new name.

* **Navigating between Windows**: To navigate between different windows, press `Ctrl-b` followed by the window number (e.g., 0,
1, 2, etc.) or use the key combination `Ctrl-b` followed by `n` to go to the next window or `Ctrl-b` followed by `p` to go to
the previous window.

* **Splitting Panes**: Tmux allows you to split windows into multiple panes, enabling you to view and interact with different
terminal sessions simultaneously. Use `Ctrl-b` followed by `%` to split the current pane vertically and `Ctrl-b` followed by `"`
to split it horizontally.

* **Navigating between Panes**: To navigate between different panes, use the key combination `Ctrl-b` followed by an arrow key.

* **Deleting Panes**: To delete a pane, use the key combination `Ctrl-b` followed by `x`.

These are just a few of the many Tmux commands and features available. To explore more advanced functionalities and
customization options, refer to the Tmux documentation. :book:

## Example Configuration

Here is an example of a Tmux session configuration to run your experiments smoothly while monitoring server resources.
First, create a new Tmux session called `exps` :computer::
``` bash
tmux new -s exps
```
Then, split the window into two panes:
``` bash
Ctrl-b %
```
In the left pane, start a `htop` session to monitor server resources:
``` bash
htop
```
In the right pane, start a `watch nvidia-smi` session to monitor your GPU usage:
``` bash
watch nvidia-smi
```
Rename the window to `monitor`:
``` bash
Ctrl-b ,
```

Create a new window to run your experiments:
``` bash
Ctrl-b c
```
Rename the window to `exps`:
``` bash
Ctrl-b ,
```
In the new window, start your experiment:
``` bash
python main.py
```

Finally, create a new window for running commands and navigating the file system:
``` bash
Ctrl-b c
```
Rename the window to `shell`:
``` bash
Ctrl-b ,
```

At this point, you should have three windows: `monitor`, `exps`, and `shell`. You can navigate between them using

* `Ctrl-b 0` for `monitor`
* `Ctrl-b 1` for `exps`
* `Ctrl-b 2` for `shell`

To detach from the session, press `Ctrl-b` followed by `d`. You can now log out of the server and close your terminal. 
When you log back in, you can reattach to the session using:
``` bash
tmux a -t exps
```
