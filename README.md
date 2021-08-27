# Challenge 19 PWA: Budget Tracker

## Description
This application allows users to add expenses and deposits to the budget tracker with or without an internet connection. If the user enters transactions offline, the total will be updated when they're brought back online. This application uses IndexedDB, Service Workers, and a web manifest for offline functionality. 

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Installation
Clone the repository from GitHub to your local machine. `npm install` to install the dependencies and `npm start` to run the server.
___

## Usage
This application lets users enter deposits and expenses with or without an internet connection.

![screenshotHere](/assets/images/ch19_screenshot.png)
___

## Links
### Walkthrough of app:
* [Deployed Application]()
___

## Tests
There are no tests for this application.
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
* This project started with a starter code from [Xandromus](https://github.com/coding-boot-camp/symmetrical-bassoon) as part of the UoT coding bootcamp.
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```

### Criteria: 
```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```