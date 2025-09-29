# Testing



Visit the deployed site here: [Hangman](https://fadam430.github.io/hangman/)

 
> Return back to the [README.md](README.md) file.

This document outlines the testing processes and results for the **Hangman**. It ensures that all features function as expected, meet accessibility standards, and provide an optimal user experience.

---

<a id=contents></a>

## CONTENTS

- [AUTOMATED TESTING](#automated-testing)
  - [W3C Validator](#w3c-validation)
  - [W3C CSS Validator](#css-validation)
  - [JavaScript Validator](#js-validation)
  - [Lighthouse](#lighthouse)
- [MANUAL TESTING](#manual-testing)
  - [Full Testing](#full-testing)
  - [Browser Compatibility](#browser)
  - [Responsiveness](#responsiveness)
  - [Testing User Stories](#testing-user)
  - [Features Testing](#features-test)
  - [Existing Features](#existing-features)
  - [Manual Features Testing](#manual-features-test)

<br>
<hr>

Testing was an **integral part of the development process**, ensuring the website remained both **functional and user-friendly** at every stage. By conducting **continuous testing**, potential issues were identified early, allowing for swift resolution and a more efficient workflow.

**Chrome Developer Tools** played a crucial role throughout development, providing real-time insights into performance, responsiveness, and debugging. This proactive approach helped streamline development and ensure the final product adhered to high-quality standards.

Additionally, **ChatGPT and ClaudeAI** served as a key resource for refining ideas, optimizing content, and overcoming technical challenges. By offering structured guidance, best practices, and alternative solutions, it contributed to improving both the efficiency of development and the overall quality of the final product.

To guarantee **cross-device compatibility**, every page was rigorously tested across various **screen sizes and devices** using Chrome Developer Tools. This process ensured the quiz was fully responsive, providing a seamless user experience across **desktops, tablets, and mobile devices**.

---

<a id=automated-testing></a>

## AUTOMATED TESTING

A series of **automated testing** tools were used on the site to check the code for web standard compliance and errors. These tools ensured repeatable, scalable, and performance-driven results throughout the site’s development.

<a id=w3c-validation></a>

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website.

| Directory | File tested | Screenshot | Notes |
| --------- | ----------- | ---------- | ----- |
| documentation/testing-w3c-home.webp | index.html | ![screenshot](/assets/images/testimages/index_html_validation.PNG) | no errors occurred when checking |
| documentation/testing-w3c-404.webp | game.html | ![screenshot](/assets/images/testimages/gamepage_error1.PNG) |autocorrect element not allowed to input element. After delete the attribute fix the problem |
| documentation/testing-w3c-500.webp | game.html | ![screenshot](/assets/images/testimages/gamepage_error2.PNG) | I left closing div tag in the file. Delete a closing tag to solve the issue. |

---

<a id=css-validation></a>

### CSS Validator

[CSS W3C Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS file.

| Directory                                | File tested  | Screenshot                                              | Notes                            |
| ---------------------------------------- | ------------ | ------------------------------------------------------- | -------------------------------- |
| /assets/css | style.css    | ![screenshot](/assets/images/testimages/landingpage_css.PNG) |no error or warning |
| /assets/css | game.css    | ![screenshot](/assets/images/testimages/CSS_validator.PNG) |3 warning but not concern |

<a id=js-validation></a>

### JavaScript Validator

 I installed [ESLint](https://eslint.org/) in [VS Code](https://code.visualstudio.com/), which automatically checked my JavaScript code in the console and reported any errors.  

I attempted to test with [Jest](https://jestjs.io/), but I encountered complications when importing functions into my test scripts. After assessing the time required to resolve these issues, I decided it would be more efficient to use the testing methods mentioned above.

<a id=lighthouse></a>

### Lighthouse

I've tested my deployed project using the Lighthouse Audit tool to test the performance, accessibility, best practices and SEO of the website.

| Page | Mobile | Desktop | Notes |
| :--: | :--: | :--: | :--: |
| Home | ![screenshot](/assets/images/testimages/mobile_homepage_lighhouse.PNG) | ![screenshot](/assets/images/testimages/homepage_desktop_lighthouse.PNG) | ✅ Passed  |
| Game | ![screenshot](/assets/images/testimages/hangman_lighthouse_mobile.PNG) | ![screenshot](/assets/images/testimages/hangman_lighthouse_desktop.PNG) | ✅ Passed  |


---

<a id=manual-testing></a>

## MANUAL TESTING

<a id=full-testing></a>

### Full Testing

This section outlines the **manual testing** process conducted to ensure the website functions correctly across different devices, screen sizes, and user interactions. Each test was performed methodically to identify potential issues with responsiveness, usability, and accessibility, with results documented for further improvements. Additional testing was taken by friends and family on a variety of devices and screen sizes.

---

<a id=browser></a>

### Browser Compatibility

- [Safari](https://www.apple.com/uk/safari/)

- [Chrome](https://www.google.com/chrome)
- [Firefox](https://www.mozilla.org/firefox)
- [Edge](https://www.microsoft.com/en-gb/edge?form=MA13FJ)

I tested my deployed project on multiple browsers to check for compatibility issues.

---

<a id=responsiveness></a>

### Responsiveness

In addition to testing my deployed site on different devices, I thoroughly tested it's responsiveness using Chrome Developer Tools.  
Based my testing on **320px** as a standard minimum width.  
Additionally, I used a Chrome extension designed to test site responsiveness across different devices.

#### Mobile Devices

| Device tested | Screen Width (px) | Screen Height (px) | Result | Notes (Issues Found) |
| :---: | :---: | :---: | :---: | :---: |
| Samsung Galaxy S23| 360px | 780px | ✅ Pass | no issues found  |
| Samsung Galaxy S25+| 1440px | 3120px | ✅ Pass | no issues found |
| iPhone 16 | 393px | 852px | ✅ Pass |  no issues found |


#### Tablets

I can not test in real life tablet. I tested in [Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [FireFox Developer edition](https://www.firefox.com/en-GB/channel/desktop/developer/)

#### Laptops & Desktops

| Device tested | Screen Width (px) | Screen Height (px) | Result | Notes (Issues Found) |
| :---: | :---: | :---: | :---: | :---: |
| Asus ROG laptop 15" Full HD monitor| 1920px | 1080px | ✅ Pass | ✅ Fully responsive |
| QHD monitor | 2560px | 1440px | ✅ Pass | ✅ Fully responsive  |

---


<a id=testing-user></a>

### Testing User Stories

#### First Time Visitors

| Goals | How were they achieved? |
| ------ | -------------------------- |
| **Have a clear and accessible way to navigate through different sections (start game, read rules).** | Provide a homepage panel with clear buttons for Rules and Start Game, all with ARIA labels for accessibility. |
| **Understand the game rules quickly before playing.**| In the Homepage before you press the Start Game button you can read a short rule how to play hangman game. |
| **Start a new game easily without confusion.** | The game panel includes a **"Start New Game" button**, which immediately takes users to new game. |
| **Track progress while guessing letters.** | Display underscores for the hidden word that update in real-time as correct letters are guessed. |
| **See how many chances are left.** | Use a progressive hangman drawing that adds body parts with each wrong guess until the game ends. |
| **Receive feedback when the game ends (win or lose).** | Show a clear **"Congratulations!"** or **"Game Over!"** message on completion of the game. |


---

<a id=features-test></a>

## Features Testing

<a id=existing-features></a>

### Existing Features

### Home Page Panel

#### Overview
The **Home Page Panel** point to the **Game page** and game not starting still user click the **Start New game**  button.

#### Features Tested:
- **Introduction & Engagement:**  
  - The panel presents a **clear and engaging welcome message**. 
  - The description uses **italic text**.  

- **Navigation & Call to Action:**  
  - The **"Start" button (`#btn btn-primary`)** initiates the Hangman game smoothly transitions users into the game.  
  - **ARIA labels** are applied to all buttons for improved accessibility.  

- **Branding & Design:**  
  - The **site’s branding is consistently maintained**, with a fun and engaging theme.  
  - The **layout is structured for easy interaction**, ensuring a smooth user experience.  
  - The **buttons are clearly labeled** and appropriately styled, making navigation intuitive.  

- **Responsiveness & Accessibility:**  
  - The home page panel adapts well to **various screen sizes** (desktop, tablet, mobile).  
  - The **buttons are keyboard-navigable**, ensuring usability for all users.  
   

- **Performance & Functionality:**  
  - The **home page loads quickly**, with no missing or broken elements.  
  - The **buttons work correctly**, allowing users to navigate without errors.  

<details>
<summary>Click here to see the Home Page Panel</summary>

![Home Page](https://fadam430.github.io/hangman/)

### Game Panel

#### Overview
The **Game Panel** provides an interactive interface for users. It dynamically updates letter, and displays the current letter. 

#### Features Tested:
- **Underscore letter & Dynamic Updates:**  
  - The **guessed letter** correctly increments as users progress through the progression.  
  - Words are randomly choice are **AI generated word list JSON file** .  

- **Answer Selection & Feedback:**  
  - The **Typing a keyboard or mobile keyboard** highlight correct or incorrect letter or letters.  
  - Once a letter is chosen, **users cannot change their selection** .  
  - The system register correct letter and updates the **underscore** dynamically to revile the letter for user.  

- **Navigation & Call to Action:**  
  - The **"New Game" button** Start a new game doesn't matter which stage you have a game.  

- **Branding & Design:**  
  - The game panel maintains a **consistent theme and visual design** with the rest of the site.  
  - The layout is structured for **easy readability and user engagement**.  
    

- **Responsiveness & Accessibility:**  
  - The game adapts well to **different screen sizes** (desktop, tablet, mobile).  
  - The **buttons are keyboard-navigable**, allowing non-mouse users to interact with the quiz.  
  

- **Performance & Functionality:**  
  - The game **loads letters efficiently** without delays or broken elements.  
  - Users **can proceed to the next word** without finished a word before just click a **New Game** button. 

<details>
<summary>Click here to see the Game Panel</summary>

![Game Panel](https://fadam430.github.io/hangman/game.html)




<a id=manual-features-test></a>

## Manual Features Testing

### Home Page

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) | 
| --- | --- | --- | --- | --- | --- |

| **Go to Game** button - click effect | When click the **Go to Game** button should go to game.html page | Click to the **Go to Game** button | The **Go to Game** button navigate to game.html page | ✅ No fix needed | 

---

###  Game Page

| Component | Expected Behavior | Testing Steps | Actual Result | Fix (if needed) |
| --- | --- | --- | --- | --- | --- |

| **Start New Game** button |  | Clicked on the **Start New Game** button | New word randomly generated and display the screen to underscore.| ✅ No fix needed | 
| **Start New Game** button  | Before clicked the **Start New Game** button keystroke is not registered. |  before click/press  **Start New Game** button and press any letters or numbers or special character not response | before you click/press  **Start New Game** button not recognize the keystroke  | ✅ No fix needed | 
| **Use Numbers** | If you start a game and press any number in the keyboard it is not recognized. | Pressed all numbers in the keyboard. | Not recognized key press and you do not get penalty. | ✅ No fix needed |
| **Use Shift/Ctrl plus letters** | Use Shift to recognize as a normal character. When you press Ctrl and letters it is recognize as a normal letter | I Tested all Shit all Ctrl combinations | Result just recognize as normal letter | ✅ No fix needed |
| **Use special characters** | Try to type special character to add to guess list but it doesn't accept it | I try to add any special character when game is on. | You can not add special character in the Guessed Letter list. | ✅ No fix needed |

---



<br><hr>
[🔼 Back to top](#contents)