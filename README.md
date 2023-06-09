# Terminal calculeitor

This is the README for the calculator project. Here you will find information about the project, how to run it using Docker Compose, and the rules that can be found on a specific URL of the page.

## Descripción del proyecto
The calculator is an application that allows performing basic mathematical operations such as addition, subtraction, multiplication, and division of numbers. It provides a simple and user-friendly interface for quick calculations.

## Requirements
 - Docker 
 - Node

## Running with Docker Compose
 Follow the steps below to run the calculator using Docker Compose:

 1- Clone the project repository: 

``` bash 
    git clone https://github.com/AG-9571/Calculator.git
```

2- Navigate to the project directory:

``` bash
    cd calculator
```
3- Make sure you have the docker-compose.yml

4- Run the following command to build and run the Docker containers:

``` bash
    docker-compose up
```
5- Make sure that the container is running correctly.
``` bash
docker ps
```

6- "Insert the name of the container or ID in the <name-container> parameter..
``` bash
docker exec -it <name-container> sh
```
7- Run the application in the sh terminal.
``` bash
npm run dev
```

## Running with Node
 Follow the steps below to run the calculator using Docker Compose:

 1- Clone the project repository: 

``` bash 
    git clone https://github.com/AG-9571/Calculator.git
```

2- Navigate to the project directory:

``` bash
    cd calculator
```
3- corre en la aplicaiones:

``` bash
    npm run dev
```

## rules
To fetch the rules from a specific URL of the page, follow the steps below:
``
https://ag-9571.github.io/Calculator/
``

## licence
Esta aplicación está bajo la Licencia MIT. Para más información, consulta el archivo ``licence``.

