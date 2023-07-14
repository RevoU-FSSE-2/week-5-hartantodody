# 🚀 PROJECT MILESTONE 1

This week project is about making a company website. And in this project, i choose to clone an existing company's website instead of making a new one. I cloned [Riot Games Company](https://www.riotgames.com/en/who-we-are) Who We Are page instead of the home page because in the homepage there is no information about the company. 

## 🌐 Riot Games Website
In this repository, i will show you guys the 5th Assignment (1st Project Milestone) that i have created in this week. Like I said before, in this assignment, we given task to make a website about company profile and i choose to clone [Riot Games Company](https://www.riotgames.com/en/who-we-are) Website.

You can see the finished page [here](dodyhartanto.site) or from my [netlify](https://riotgames-company.netlify.app) domain.

Feel free to give me tips, suggestion, or roast my project so i can learn much more! Enjoy!

### 👨‍💻 How to Set Up and Run the Project
1. Login to [github](https://github.com/login) with your registered account.
2. Click [here](https://github.com/RevoU-FSSE-2/week-5-hartantodody.git) to open my repository.
3. Click on the ***Code (green button)***  in the image and on the ***HTTPS*** tab, copy the link given.
![https link copy](/asset/content/readme/Screenshot%202023-07-14%20143814.png)
4. Open your IDE (I use Visual Studio Code). 
5. Click Terminal Menu > New Terminal, and then choose and create a folder to save/clone the project.
6. Type ```git clone https://github.com/RevoU-FSSE-2/week-5-hartantodody.git``` in your terminal. ***Make sure your folder address for the project is right.***
7. Voila! Now you have my project, feel free to ask me a question, give me suggestion, or even roast me!

If you curious in how i change into my own domain, set it up using cloudflare and linking it into my netlify site [click here](https://github.com/RevoU-FSSE-2/week-4-hartantodody.git) to read the guide for it!

<details><summary> <h3>🛠️ My Riot Games Clone Page </h3></summary>
Before jumping into cloning the website, first i download the assets (image,svg) for making the website. After that i made an asset folder within the projects folder to store all the image and the other assets to build this website.

After that, connect the repository from the github to my folder from vscode terminal.

Lets build the site!
#### </> Head
First of all, i add two links in the head for my css styling and for site's icon. Because im using favicon in this project, insert script like in the image.
![meta head](/asset/content/readme/head.png)
#### </> Body
Actually, JS is the last thing i made, so make sure to create the HTML and CSS first and create the element for it. For the code details, you can scroll below to see it.
![script js](/asset/content/readme/body-js.png)
##### </> Header
In the header section i split it into three section (left section, right section, and hamburger button) and using flex to align it. 
![https link copy](/asset/content/readme/header1.png)
![https link copy](/asset/content/readme/header2.png)

Here is the navbar preview.
![https link copy](/asset/content/readme/navbar-hero.png)
##### </> Main
The main section consist of 4 section, Hero, About Us, Our Values, And Global. I create from top to bottom section. Our Values upper section and Global is actually different from the real page and i tried to make it because of my lack experience (sowwy).

![hero](/asset/content/readme/main-hero.png)

For hero and about us section is pretty simple, using h2 and p to add the text and background imagecolor in css to style the background with some text alignment using flex.
![about us](/asset/content/readme/main-about-us.png)
![about us](/asset/content/readme/main1.png)
For the our values section, in the real page, when you click onto the image you can see the image will stretch and showing us the details. But in my case im just adding text and styling it using flex again with different background in each div/h2.

![our values 1](/asset/content/readme/main-ourvalues.png)
![about us](/asset/content/readme/main2.png)
And in this our values lower section, im just using 2/4 div to add the image and text. The one with group photos using flex direction row reverse to swap the position between image and image.
![our values 2](/asset/content/readme/main-ourvalues2.png)
![about us](/asset/content/readme/main3.png)

For the global section, its pretty simple except for the slider. The difference between the real page and my cloned is, the real one using animation to change the image every about 6 secs, and mine is using slider.

![our global](/asset/content/readme/main-global.png)
![about us](/asset/content/readme/main4.png)
##### </> Footer
This is my code for the footer section. This footer section has 5 items which is 2 divs and the rest is button. One of the button is making you go automatically to the top after you click it.

![footer1](/asset/content/readme/footer1.png)
![footer2](/asset/content/readme/footer2.png)
![footer3](/asset/content/readme/footer3.png)
Here is the footer preview from the web.
![footer3](/asset/content/readme/footer.png)
##### </> JavaScript
**1. Dropdown**

**2. Slider**
- Previous Button

```
const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
```

- Next Button

```
let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
```
- Slider

```
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

```


**3. Scroll to top**
This is the code to make ***TO THE SURFACE*** button goes to the top. 
```
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
```
</details>

### 🛠️ External Libraries
In the making, beside using HTML, CSS, and JavaScript, I only use Favicon as you can see in the ```<head>``` element as you can see below :
```<script src="https://kit.fontawesome.com/a674f99ada.js" crossorigin="anonymous"></script>```
This script allows me to use unique icon as text in my html page.




