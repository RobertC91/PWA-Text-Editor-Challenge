# PWA-Text-Editor-Challenge

## Table of Contents
- [Description](#description)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)

### Description
This is a text editor that runs in the browser, but can also be installed and used offline. This app is a single-page application that meets PWA criteria. In addition it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. Once you go back online, the cache will update with data that was stored while you were offline.

### Technology

Node.js, Express.js, IndexedDB, PWA, Heroku

### Installation
To run this project, install it locally using npm:
```sh
npm install
npm run start
```
### Usage
Once started, type into the editor. The content will be saved in the IndexedDB when the window is blurred. When you close the editor and reopen it, the data in the editor will be retrieved from the IndexedDB. You can also click the Install button to download the application and use it locally in your computer. You do not need an internet connection to use this application as well.

## Heroku Deployment


## ScreenShot

![Alt text](<Assets/JATE challenge.png>)

### License

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

### Questions

If you have any questions feel free to contact me via email: robertcoulson91@gmail.com 
You can also view more of my projects at https://github.com/RobertC91.