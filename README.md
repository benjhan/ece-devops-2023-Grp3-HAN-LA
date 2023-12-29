# ECE DevOps 2023 - Group 3 (HAN, LA, ZOUCH)

## Description

This repository showcases the work and projects completed by Group 3 for the DevOps course in our ING4 year at ECE. It includes a range of labs and a comprehensive end-of-year project that involves developing a web application using a specific programming language, implementing a database for data storage, and ensuring quality through multiple testing levels.

Access our project website deployed on Microsoft Azure: [HLZ Project](https://hlz-project.azurewebsites.net/).

## Features

- **Programming Language:** Node.js
- **Database:** Redis
- **Functionality:** CRUD operations for user management
- **Test Levels:** Unit, API, Configuration, Connection

## Installation

Clone the repository and navigate to its directory:


```
git clone https://github.com/marcolap13/ece-devops-2023-Grp3-HAN-LA-ZOUCH.git

```

  

## Usage

  

To get the project up and running, follow these steps:

1. **Install Dependencies:**

```
npm install

```

2. **Start the Application:**

First, navigate to the project (userapi) directory:

```
cd userapi
```

To launch the application locally:

```
npm start

```

3. **Running Tests:**

  

To test the functionality of the site (e.g., database connections, etc.):

```
npm test

```


After doing these command you can go to the url : https://localhost:8080

# CI/CD with Azure

We have implemented CI/CD using Azure.

The application is deployed at https://hlz-project.azurewebsites.net/. 

Azure Redis is utilized, and sensitive information such as .env files are stored securely in the GitHub secret environment.
  
  
  
# Infrastructure as Code (IaC) Configuration with Vagrant and Ansible

## Configure and Provision a Virtual Environment

Set up and run your application in a virtual environment using Vagrant for configuration and Ansible for provisioning. 

#### Vagrant Configuration
- **Goal:** Create 1 Virtual Machine (VM) running on any Linux distribution.
- **Steps:**
  1. Install Vagrant on your system.
  2. Create a `Vagrantfile` to define the VM configuration.


# Kubernetes Setup Guide with Minikube

  

This guide explains how to install and run a local Kubernetes cluster using Minikube.

Note: We use Secret.yaml to securely manage sensitive information since we are connected to REDIS_AZURE. This file contains important data from the .env file, eliminating the need for using persistent volumes (pv) and persistent volume claims (pvc) as we are not using Redis locally.
  

## Prerequisites

  

- [Minikube](https://minikube.sigs.k8s.io/docs/start/) must be installed on your machine.

- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) must be installed to interact with the Kubernetes cluster.

  

## Steps

  



1. Start Minikube
```
minikube  start
```
  

2. You can check Minikube status with
```
minikube  status
```
  

3. Deploy an application on Kubernetes, (use the provided YAML files to deploy an application, e.g., Deployment.yaml, Service.yaml, ConfigMap.yaml, Secret.yaml.)

```
kubectl  apply  -f  Deployment.yaml

kubectl  apply  -f  Service.yaml

kubectl  apply  -f  ConfigMap.yaml

kubectl  apply  -f  Secret.yaml
```
  

4. Check the deployment

```
kubectl  get  deployments

kubectl  get  pods

kubectl  get  services
```
  

5. Access the application (get the URL to access the application with)

```
minikube  service  my-app-service  --url
```

or access to the application directly with

```
minikube  service  my-app-service 
```

6. Stop Minikube

```
minikube  stop
```



  
  

## Authors

  

-  Benjamin  HAN

-  Marco  LA

-  Rayan  ZOUCH
