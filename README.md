<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Game-based educational tool for Fitts' law</h3>

  <p align="center">
    SOFTENG702 Group 9
    <br />
    <a href="#getting-started"><strong>Getting started</strong></a>
    .
    <a href="#usage"><strong>Usage</strong></a>
    .
    <a href="#UAHPEC-certificates"><strong>UAHPEC Certificates</strong></a>
    <br />
  </p>
    <img src="https://user-images.githubusercontent.com/68038316/194476089-f66c6e53-2307-43fc-bbfb-182cb940152c.png" width="700"/>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#UAHPEC-certificates">UAHPEC Certificates</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This repository contains two prototypes developed for a research study conducted in a human computer interaction (HCI) course to investigate 

> *To what extent an interactive game-based educational tool with realistic scenarios helps students understand the concepts of Fitts' law.*

Two versions have been developed for comparison purposes. *Game version* contains elements of a reward system with the plant while the *static version* is purely an interactive activity. They both serve to educate users on the importance and usage of Fitts' law through interactive activities. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

The prototypes have been built with the following frameworks and libraries:

- [Material UI (MUI)](https://mui.com/)
- [ReactJS](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [LottieFiles](https://lottiefiles.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/wshe874/702-Project
   ```
2. Navigate to the corresponding directory
    ```sh
    // Game version
    cd game-version

    // Static version
    cd static-version
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the application
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
### Game version
<div>
  <div>
    <strong>1. Home</strong>
    <br/>
    <img src="https://user-images.githubusercontent.com/68038316/194480401-880e9e09-7f3b-485d-8e48-850f74923aa8.png" width="500"/>
    <br/>
    This is the home page for the application and is the start to the game.
  </div>
  <br/>
  <div>
    <strong>2. Instructions & Fitts' law</strong>
    <br/>
    <img src="https://user-images.githubusercontent.com/68038316/194475944-8a950c40-f858-4a12-9df4-c261ad141feb.png" width="500"/>
    <img src="https://user-images.githubusercontent.com/68038316/194476008-ab618074-b63a-434d-9331-df48a2dabe1e.png" width="500"/>
    After clicking 'start' on the home page, a background on Fitt's law and instructions on how to play the game is given.
  </div>
  <br/>
  <div>
    <strong>3. Canvas</strong>
    <br/>
    <img src="https://user-images.githubusercontent.com/68038316/194476089-f66c6e53-2307-43fc-bbfb-182cb940152c.png" width="330"/>
    <img src="https://user-images.githubusercontent.com/68038316/194476542-58a3924a-b2cc-4f02-b6bc-7e559ee5639b.png" width="330"/>
    <img src="https://user-images.githubusercontent.com/68038316/194476892-5e66866b-4341-464e-8a45-90ac887f49f1.png" width="330"/>
    Then clicking the 'start' button of the instructions page, the editing board with the buttons will be shown. Buttons can be resized and moved around to design the interface.
  </div>
  <br/>
  <div>
    <strong>4. Start game</strong>
    <br/>
    <img src="https://user-images.githubusercontent.com/68038316/194477606-00fd99da-1105-405f-9d76-0ad951f52799.png" width="500"/>
    <img src="https://user-images.githubusercontent.com/68038316/194478043-ce89fa58-053a-48a7-8853-a95e32312b5f.png" width="500"/>
    Once the designing of the interface is done, click the 'ready' button on the right side menu to begin the clicking tasks. These will be a series of clicking between a set of 2 buttons to determine if the interface best follows Fitts' law. Visual and text prompts will be shown to guide you through the clicking tasks. If an attempt has improved from the previous one, results on the right-hand side will be coloured green. Otherwise, it will be coloured red to show the current attempt was not an improvement and one life will be deducted. If there no further improvement is made after 3 attempts, the plant dies. 
  </div>
  <br/>
  <div>
    <strong>5. Results</strong>
    <br/>
    <img src="https://user-images.githubusercontent.com/68038316/194478294-689d5069-8316-426c-8313-bbdc4b2f849b.png" width="500"/>
    <br/>
    Results are shown after completing the game with the performance index indicated for each attempt. Users can play again and results can be downloaded as a .csv file by clicking the save button.
  </div>
 </div>
 
 ### Static version
 A similar game flow is followed for the static version.
 
 
<!-- UAHPEC Certificates -->
<div id="UAHPEC-certificates"> </div>

## UAHPEC-Certificates
Please follow the [link](https://drive.google.com/file/d/1nSYuvdpqzzyjlNYUULdc-l1sVDyzRuhi/view?usp=sharing) to view the certificates stored in Google drive. Note that the document can only be viewed using the University of Auckland organisational google account.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

