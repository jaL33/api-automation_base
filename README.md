# API AUTOMATION
This project is used as training material in the API Automation Workshop organised by Scott Miles.

## Architecture
This system consists of two applications: Tax and IdAM. Tax is dependent on IdAM to run successfully.

## Tax
Tax has one endpoint which can be used to calculate the tax amount for an employees income.

##### Usage
Install packages with:
> npm install

Run locally with:
> npm start

Test with (can be tested without IdAM):
> npm test


## IdAM
IdAM has one endpoint which is used to create and validate user sessions.

##### Usage
Install packages with:
> npm install

Run locally with:
> npm start

Test with:
> npm test
