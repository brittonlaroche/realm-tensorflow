# realm-tensorflow


| Why TensorFlow?       | 
|-----------------------|
|![TensorFlow](./img/tfLogo2.png)    | 
|TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications. |

|Easy model building                            | Robust ML production anywhere                 |  Powerful experimentation for research        |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
|![Easy Model](./img/tfModel.png)               | ![ML Anywhere](./img/tfMLAnywhere.png)        | ![Easy Model Building](./img/tfResearch.png)  |
|Build and train ML models easily using intuitive high-level APIs like the layer API, which makes for immediate model iteration and easy debugging.| Easily train and deploy models in the cloud, on-prem, in the browser, or on-device no matter what language you use.|A simple and flexible architecture to take new ideas from concept to code, to state-of-the-art models, and to publication faster.|

## TensorFlow.js      

![TensorFlow](./img/tensorflowjsLogo.png)    
TensorFlow.js is a library for machine learning in JavaScript. Develop ML models in JavaScript, and use ML directly in the browser   

## Getting Started
This project uses Tensorflow.js, MongoDB Realm and Atlas to provide you with everything you need to create a cloud based machine learning platform with nothing more than a modern web browser, and the determination to begin with some good "old fashioned" human learning.  This short tutorial expects that you know nothing about MongoDB Atlas, Realm or Machine Learning with Google Tensorflow. We chose Tensorflow.js for this project because it is very intuitive, easy to pick up and the results can be seen directly in the web browser with just a few lines of code.

## ![1](./img/1b.png) Create an Atlas Cluster
Our first step is to create an atlas cluster. Create a free tier cluster known as an M0.     
__BE SURE TO CREATE ATLAS VERSION 4.4__

Click the following link https://cloud.mongodb.com to sign up. Additional instructions on creating an Atlas cluster are available here: [Atlas getting started Guide](https://docs.atlas.mongodb.com/getting-started/)  

![Atlas](./img/Atlas5.png)   

When you create your account you will be asked to create a project.  If you have gone with the default __"Project0"__ then create a new project and name it __"Machine Learning"__.  This is not necessary, but it is good form to clearly identify what your project is.


## ![2](./img/2b.png) Create a Realm Application
Our second step is to create a Realm application.  MongoDB Realm has a number of very cool features. We will be focused on the Realm browser SDK that allows you to connect to MongoDB Atlas through the web browser.  Additionally we will be creating a Realm function that loads data from a CSV file into MongoDB Atlas.  This is imporatnt because once the data is in MongoDB, you can search and filter for specific fields and criteria that make feeding your machine learning model much easier and far more precise.  MongoDB's flexible data model allows you to load data from any CSV file directly into the database with out any need to model the data first.  This project showcases how easy it is to do machine learning with MongoDB.

Open the Atlas console and select the __"Realm"__ tab in the upper middle.  This brings up a dialog to create your first realm application. Select __"Web"__ as the primary application we are building for, and __"No I'm starting from scratch"__ when asked if you are currently using the Realm database.

![realm1](./img/createRealmApp1.png)   

Give your application a name.  Lets go with __"Tensorflow"__ be sure your newly created cluster is selected.    
![realm2](./img/createRealmApp2.png)   

The application guide pops up, you can close guides or select __"WebSDK"__ as we will be using the web SDK as part of this project.  The guides are helpful for a quick check list of things to do.   
![realm3](./img/createRealmApp3.png)   

Take note of the __"App Id"__ circled in red.  Press the copy icon and paste this into your notes for future use.  You can return to this screen at any time in the future.  Notice the guides check list, we will be covering this list next.
![realm4](./img/createRealmApp4.png)   

## ![3](./img/3b.png) Configure a Collection

## ![4](./img/4b.png) Set up Application Authentication   

## ![5](./img/5b.png) Connect to Realm from your Cleint   



