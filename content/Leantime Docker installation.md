---
"Note Planted:": 2024-06-27
"Last Tended:": 2024-08-13
---
#🌱Seed  #😐Neutral 
****
> `Importance`: 10%
 
>[!Summary] The Big Idea
>

****
Install docker desktop

Initialize docker dev environment from forked repo

[https://docs.docker.com/desktop/dev-environments/create-dev-env/](https://docs.docker.com/desktop/dev-environments/create-dev-env/)

apt-get update

apt-get install curl

install node from curl source

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\

sudo apt-get install -y nodejs

https://github.com/nodesource/distributions/blob/master/README.md

apt-get install make

curl -s https://getcomposer.org/installer | php

sudo mv composer.phar /usr/local/bin/composer

[https://gist.github.com/kenng/e694a5fa1c4753644518d099665869a9](https://gist.github.com/kenng/e694a5fa1c4753644518d099665869a9)

[https://learn.microsoft.com/en-us/training/modules/use-docker-container-dev-env-vs-code/](https://learn.microsoft.com/en-us/training/modules/use-docker-container-dev-env-vs-code/)

[https://devcontainers.github.io/guide/dockerfile](https://devcontainers.github.io/guide/dockerfile)

[https://code.visualstudio.com/remote/advancedcontainers/configure-separate-containers](https://code.visualstudio.com/remote/advancedcontainers/configure-separate-containers)

First almost working dev container for lean time. Has correct php, node, and npm, but missing these php extensions (see next text). Also seems like we need to forward port 9000 for debugging. Possibly just use the Docker file and Docker_compose file within the devcontainer.js

// For format details, see https://aka.ms/devcontainer.json. For config options, see the

// README at: https://github.com/devcontainers/templates/tree/main/src/php

{

    "name": "PHP",

    // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile

    "image": "mcr.microsoft.com/devcontainers/php:0-8.2",

    // Features to add to the dev container. More info: https://containers.dev/features.

    // "features": {},

    // Configure tool-specific properties.

    // "customizations": {},

    // Use 'forwardPorts' to make a list of ports inside the container available locally.

    "forwardPorts": [

        8080

    ],

    "features": {

        "ghcr.io/devcontainers/features/node:1": {

            "nodeGypDependencies": true,

            "version": "lts"

        },

        "ghcr.io/devcontainers-contrib/features/npm-package:1": {

            "package": "typescript",

            "version": "latest"

        },

        "ghcr.io/jungaretti/features/make:1": {}

    }

    // Use 'postCreateCommand' to run commands after the container is created.

    // "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html"

    // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.

    // "remoteUser": "root"

}

 Problem 1

    - Root composer.json requires PHP extension ext-ldap * but it is missing from your system. Install or enable PHP's ldap extension.

  Problem 2

    - mpdf/mpdf[v8.1.3, ..., v8.1.6] require ext-gd * -> it is missing from your system. Install or enable PHP's gd extension.

    - Root composer.json requires mpdf/mpdf ^8.1.3 -> satisfiable by mpdf/mpdf[v8.1.3, v8.1.4, v8.1.5, v8.1.6].

Locally run make

Use git bash

Install php using zip install method

Enable needed extensions in php.ini