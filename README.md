# ece-devops-2023-Grp3-HAN-LA-ZOUCH

  

## Description

  

This repository contains the work and projects completed for the DevOps course during our ING4 year at ECE. It showcases a variety of labs and a comprehensive end-of-year project. The main project involves developing a web application using a chosen programming language, incorporating a database for data storage, and ensuring quality through various levels of testing.

  

## Installation

  

To install the project, clone the repository and navigate into its directory:

```
git clone https://github.com/marcolap13/ece-devops-2023-Grp3-HAN-LA-ZOUCH.git

```

  

## Usage

  

To get the project up and running, follow these steps:

1. Install Dependencies:

```
npm install

```

2. Start the Application:

  

To launch the application locally:

```
npm start

```

3. Running Tests:

  

To test the functionality of the site (e.g., database connections, etc.):

```
npm test

```


After doing these command you can go to the url : https://localhost:3000

  

# Kubernetes Setup Guide with Minikube

  

This guide explains how to install and run a local Kubernetes cluster using Minikube.

  

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