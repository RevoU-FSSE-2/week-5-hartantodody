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

<details><summary> <h3>🛠️ My Riot Games Clone Page </h3></summary>

#### </> Head
![meta head](/asset/content/readme/head.png)
#### </> Body
![script js](/asset/content/readme/body-js.png)
##### </> Header
![https link copy](/asset/content/readme)
![https link copy](/asset/content/readme)
![https link copy](/asset/content/readme)
![https link copy](/asset/content/readme)
##### </> Main
![hero](/asset/content/readme/main-hero.png)
![about us](/asset/content/readme/main-about-us.png)
![our values 1](/asset/content/readme/main-ourvalues.png)
![our values 2](/asset/content/readme/main-ourvalues2.png)
##### </> Footer
![footer1](/asset/content/readme/footer1.png)
![footer2](/asset/content/readme/footer2.png)
![footer3](/asset/content/readme/footer3.png)
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




