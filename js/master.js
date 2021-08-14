// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (localStorage !== null) {
  // console.log("Local Storage Is Not Empty You Can Set It On Root Now");
  // console.log(localStorage.getItem("color_option"));
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("color_option")
  );
  // Remove Active Class From All Colors List Items
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  //Toggle Class Fa-Spin For Rotation on Self
  this.classList.toggle("fa-spin");

  //Toggle Class Open ON Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //Click On Every List Items
    console.log(e.target.dataset.color);

    //Set Color On Root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add Active Class On Self
    e.target.classList.add("active");
  });
});
// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    //Click On Every Span
    console.log(e.target.dataset.color);

    // Remove Active Class From All Spans
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add Active Class On Self
    e.target.classList.add("active");
  });
});
// Select Landing page Element

let landingPage = document.querySelector(".landing-page");

// Get Array of Images

let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {
  // Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change background image URL

  landingPage.style.backgroundImage =
    'url("imgs/' + imgsArray[randomNumber] + '")';
}, 5000);
