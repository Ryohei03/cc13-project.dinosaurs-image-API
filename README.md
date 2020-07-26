# dinosaur's-image-API


## Overview

`dinosaur's-image-API` helps you have a child who loves dinosaurs. You just enter dinosaur's name
 then their images will be showing off.


## Installation
The environment is assumed that "node.js" and "postgreSQL" have already been installed.

You can download a library.

To initialize your environment:

    $ yarn



## Getting Started

    $ gethub authorize

This asks you where you want to clone your repositories as well
as creating an OAuth token for future GitHub requests.

The next time you run a `gethub`, all of your new repositories
will be cloned and your existing repositories will be fetched.

It's useful if you have a lot of repos and may not have an
internet connection.

Never leave home without running `gethub`.

## Directory Structure

It's opinionated about how you organize your repositories.

    ������ pearkes
    ��   ������ gethub
    ��   ������ tugboat
    ��   ������ jack.ly
    ������ mitchellh
    ��   ������ vagrant
    ������ amadeus
    ��   ������ html7
    ������ someorg
    ��   ������ bigproject
    ������ someotherorg
        ������ biggerproject

Basically, your repositories will be name-spaced according
to who the owner is on GitHub.

## Behind the Curtain

    $ gethub

1. Checks to see if the necessary requirements for `gethub` exist,
like it's `~/.gethubconfig` file.
2. Makes sure the path to your repositories looks ok.
3. Clones any repositories that are missing.
4. Runs `git fetch` in repositories that exist.

## Configuration

Configuration is stored in a `.gethubconfig` file in your home directory.
(`~/.gethubconfig`)

### Ignored Repositories

Sometimes you don't want to retrieve that gigantic project that
someone committed `.mov` files to.

    [ignores]
    repo: icloud, facebook, pearkes/bootstrap
    owner: adobe

## Contributing

Check out the [contributing guide](CONTRIBUTING.md).