# Autodelete Bot

## Table of Contents
1. [Introduction](#introduction)
2. [Usage](#usage)
3. [Limitations](#limitations)
4. [Recent Updates](#recent-updates)

## Introduction
This discord bot automatically deletes messages after a specified time in seconds. The messages are deleted individually after a set time. For example, if the deletion time is set to 5 seconds, each message will be deleted 5 seconds after it was sent. The intent is to delete messages as they are sent, not a bulk deletion after a period of time.

When support for [riking's AutoDelete bot](https://github.com/riking/AutoDelete) ended, I could not find a replacement that suited my needs, so I decided to build my own. It was created for use in a small private server, so as such, it is not hosted publicly or configured for use in large or public servers. If you would like to use this bot, you will have to host it yourself.<br>

## Usage
### List of commands
[`/autodelete`](#turning-autodelete-on-and-off) <br>
[`/setdeletetime`](#setting-delete-time)

### Turning autodelete on and off
By default, the bot is off. To turn it on, run the command `/autodelete` and select 'on'.<br>
To turn it back off, run the same command and select 'off'.<br>
After turning autodelete on, you should set the delete time as it defaults to deleting immediately.

### Setting delete time
To set the delete time, run the command `/setdeletetime` and specify the number of seconds you would like to elapse after a message is sent before it is deleted.

### Preventing message deletion
To prevent the deletion of a message while autodelete is turned on, include '`[keep]`' in the message.


## Limitations
This bot is not intended to bulk delete messages.<br>
Deletion time is also intended to be on a short basis, and while you could set the delete time to a longer interval (say > 1 min), you would have to calculate the time in seconds, as the `/setdeletetime` command uses seconds.

Currently, the bot will delete messages in every channel it has permission to view, and the delete time is the same for every channel. To make sure messages are only deleted where you want them to be, only give the bot permission to view channels you want messages to be deleted in. If you do not know how to do this, consult [this Discord support article](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ).

The bot cannot delete messages that were sent before it was added to the server or messages sent while it is offline.

## Recent Updates
Last updated 29 Mar 2024
- Command to turn autodelete on and off (`/autodelete`)
