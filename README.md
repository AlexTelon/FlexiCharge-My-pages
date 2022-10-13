
# FlexiCharge My pages
This repo contains the "My pages" part of the flexicharge project that is developed as part of the [Software Engineering Project Methods](https://ju.se/en/study-at-ju/courses.html?courseCode=TMJN10&semester=20222&revision=1,000&lang=en&lang=en) course on [JTH](https://ju.se/en/about-us/school-of-engineering.html)

[Link to live app hosted on AWS](http://flexicharge-my-pages.s3-website-eu-west-1.amazonaws.com)

[Design brief](./public/Flexicharge%20My%20pages%20figma.pdf)

## Run Locally

Clone the project

```bash
  git clone https://github.com/knowitrickard/FlexiCharge-My-pages.git
```

Go to the project directory

```bash
  cd FlexiCharge-My-pages/flexicharge/
```

<details><summary>Recomended step</summary>

Uninstall create-react-app

```bash
  npm uninstall -g create-react-app
```

</details>

Install create-react-app

```bash
  npm install -g create-react-app
```

Install dependencies

```bash
  npm i @material-ui/lab
```

Start the app

```bash
  yarn start
```
or
```bash
    npm start
```


## AWS
**Access**

For acces to AWS contact the project manager and send them your email. 
You will then recieve an access link on email that you use to login to the flexicharge AWS.
You will also recieve a username, pasword, Access Key and Secret Access Key privately by the project manager.
These are what you use to login to the flexicharge AWS and to configure the AWS CLI.


## Deployment
*Assuming that you are logged in properly to the knowit AWS account, having an access key and a secret key.*

### Configure AWS Command Line Interface ###

[Youtube tutorial](https://youtu.be/BzzCIsjrE7U)

1. Download & install AWS CLI from the following link:
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

2. Open any terminal
```bash
  cd FlexiCharge-My-pages/flexicharge/
```
a. Open the configuration for AWS
```bash
  aws configure
```
b. You will then be prompted to input your access key
```bash
  AWS Access Key ID [****************ABCD]:
```
c. After inputing your access key you will be prompted to input your secret key
```bash
  AWS Secret Access Key [****************ABCD]:
```
d. It will then ask you for your default region name

Please input: **eu-west-1**

```bash
  Default region name [eu-west-1]:
```
e. It will then ask you for your default output format

Please input: **json**

```bash
  Default output format [json]:
```
*You are now done configuring the AWS CLI*

### Sync build folder with AWS ###
*This is how you deploy the app to AWS*

1. Open a preferred terminal
2. Navigate to the project directory
```bash
  cd FlexiCharge-My-pages/flexicharge/
```
3. Get a build folder of your web-app [More information about the build](https://create-react-app.dev/docs/deployment/)
```bash
  yarn build
```
4. Standing in your web-app directory in the terminal, run the following command:
```bash
  aws s3 sync build/ s3://flexicharge-my-pages
```
*Your pages should be hosted now!*

**To get the URL, navigate to your bucket properties and at the bottom you can find the link.**


## API Reference

The API used to comunicate with the backend can be accessed with the ip http://18.202.253.30:8080/ and swagger documentation for the API can be found at http://18.202.253.30:8080/swagger/


## Unit tests using Jest

Jest is a Javascript test runner, a JavaScript library for creating, running and structuring tests. But also works for TypeScript.
Read more about Jest here: https://jestjs.io/

All the test files can be found in the test folder of the project.
When creating a new test file it has to end with **test.tsx** for Jest to understand it is a test.

Looking in the checkValidate.test.tsx file, you'll see a method called **describe**, which isn't essential for running tests but it's used for containing one or more tests.
Inside describe is the actual test block called **test**.

To run your tests, go to the root directory and write:
```bash
npm test
```

In the terminal you will be able to see how many of the tests passed or failed.

In the test folder you can find a file called test-utils.tsx. This had to be added because when using the render() function from React Testing Library the tests couldn't find what it needed to continue.
This was solved by creating the test-utils.tsx file which contains a Custom Render and was added to one of the test files.
Read more about it here: https://testing-library.com/docs/react-testing-library/setup/

The mock folder inside the test folder contains a file which prevents Jest from processing specific files, such as .svg, .css etc.
We choose to ignore these files because Jest doesn't know how to process them.
