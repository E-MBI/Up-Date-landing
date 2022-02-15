//create the list for each section=>
let cont = 0;
// this counter to add Number of section
// increment every once
cont++;
// Selection the ul in to nav-bar
const Naav_UL = document.querySelector("#navbar__list");
//create nav=>
// create variable and create the li's a insde it
const createNav = (x) => {
  //  creat the li Element
  let list_link = document.createElement("li");
  // change the innerhtml and  link into li =>list_link
  list_link.innerHTML = `<a href="#${x}" data_link="${x}"   class="menu__link"> ${x} </a> `;
  // after than add li a inside ul in navbar used append method
  Naav_UL.append(list_link);
};

//scrolling smooth when clicked over link of nav bar
// link_nav.addEventListener("click", function (el) {
//   el.scrollIntoView({ behavior: "smooth" });
// });

//after than I'will looping over variale var {createNav}=>
const Sectionss = document.querySelectorAll(" main > section");
// loop section onload page and callback function nav,section
// initial value of while loop
let i = 1;
// used while loop
while (i <= Sectionss.length) {
  //foreah section loop funtion of create li a and let every section li a
  //callback function that will do create li a for each section
  createNav(`section${i}`);
  // increment of counter i for every time
  i++;
}
// ===========================for li a on click event ===================================
// add activ class foreach link
const activation_link = document.querySelectorAll(" li a");
//loop for click on link add active class and remov form other links
activation_link.forEach((elemeeent) => {
  // after than used addEventListener to add Event over li a on click /
  elemeeent.addEventListener("click", () => {
    /*used Nasted foreach method to loop each element and remove
      active_link class from all element (li a)
      */
    activation_link.forEach((element) => {
      //Remove class (active_link) Form all li a
      element.classList.remove("active_link");
    });
    //add class (active_link)  to  li a that user click it
    elemeeent.classList.add("active_link");
  });
  //end  nasted forech

  // end addEventListener
});
// end forEach
// ===========================wehen user scroll the li a is heighlight ===================================
//this function detected the section if into view or not  and add the active class into evrysection
//and determined the section is inside viewport if founded it execute particular action::=>
window.addEventListener("scroll", scrooolling_sec);
// =======****************=======wehen user scroll the li a is heighlight =====*******======================
// get element who active it
// //when window scrolling ,the section that is insertview will light and it's link into navbar will light
function scrooolling_sec() {
  //this function of scrolling to light section and callbackof function that light link of nav bar
  //secleted all section =>
  const seections = document.querySelectorAll("section");
  //used the foreach to detected the section that who on window view or not
  seections.forEach((sec) => {
    //used if condtion to make sure if section on veiw port of the secreen of user or Not
    if (
      //used getboundingrect to dertirmind the diamnations of section
      sec.getBoundingClientRect().top >= -50 &&
      //when section top -50px of y axis of header of page
      sec.getBoundingClientRect().top <= 170
      //and when section top 170px of y axis of header page and bottom of section
    ) {
      //exctued this block of code
      //get section data_nav =>
      const sec_DNav = sec.getAttribute("data_nav");
      //after then addcolor to the section on port view of user screen to mark it by adding class of color ("active_link")
      sec.classList.add("active_link");
      //And After theeeeeen ==> callback the function that will active the link of nav bar that refered to the section
      lighter_link(sec_DNav);
      //use eles to remove ("active_link")class
    } else {
      //here!! remove the ("Active_link") class
      sec.classList.remove("active_link");
    }
  });
}
//this Function that Active link into nav bar ==>
function lighter_link(sec) {
  //selecte the All links of nav bar
  const ArrLinkNav = document.querySelectorAll("ul li a");
  //using for loop =>To looping the array of links
  for (let i = 0; i < ArrLinkNav.length; i++) {
    //here ! removing the active class from the current element
    ArrLinkNav[i].classList.remove("active_link");
  } //end for
  //here linked the section data_nva with the data_link of  his link ("a")
  let linkActive = document.querySelector(` ul li a[data_link="${sec}"]`);
  //and after then add the active class to the link of section that active on user screen
  linkActive.classList.add("active_link");
}

/*in media query on screen small & medium the icon is menu
    when click it apper the menu links of navbar; 
    */
// seclete the element a>i in nav bar
const A_menu = document.querySelector("#iconNav");
// seclet the ul that will content the element li link of section
const menu_ul = document.querySelector("nav > ul");
// create the function that will show ul when clicked it
A_menu.addEventListener("click", function () {
  //when i pressed over it ,the transform rotate will change to (0deg)
  A_menu.classList.toggle("RotatArrow");
  //here! when clicked on the icon in nav bar every time add or romve this class
  menu_ul.classList.toggle("ulNav");
  // remove this class when click over a > i on nav bar
  menu_ul.classList.remove("ulNavclose");
});

// when click the link on ul nav
//select the all element of the ul li and put them in Array
const li_link = document.querySelectorAll(" ul > li > a");
// after then used for loop to remove class form his parent when clicked the link
for (let j = 0; j < li_link.length; j++) {
  // addEventListener to make click event and cllabck function
  li_link[j].addEventListener("click", function () {
    //when i pressed over a ,the 'RotatArrow' class will removed
    A_menu.classList.remove("RotatArrow");
    // this function that remove this class form ul every click on link
    menu_ul.classList.remove("ulNav");
    // this function that Add this class for ul with every click on link
    menu_ul.classList.add("ulNavclose");
  });
}

// ****************************
// make scrollIntoview smoothly
//selected the links of sections
const A_sc = document.querySelectorAll("a.menu__link");
//this i put it on global scope to access it from inside any function
console.log(A_sc);
//A_sc is an Array containt Links of nav bar (a)

// used the for loop to get an item who i clicked over it
for (let f = 0; f < A_sc.length; f++) {
  //element refered to a =>item
  const element = A_sc[f];
  //used addeventlistener to add event on the link that when scrolling
  element.addEventListener("click", function (for_sc) {
    //used preventDefault to prevent defualt behavior
    for_sc.preventDefault();
    //print the data_link attribute of a item on console secreen to ensure form it
    console.log(element.getAttribute("data_link"));
    // after then selected the section of link that i click over it by id
    const el_sc = document.getElementById(element.getAttribute("data_link"));
    //print it on console screen to ensure form it if he or not
    console.log(el_sc);
    //after ensured form it is true i will add function scrollIntoView to scroll to section with smoothly
    el_sc.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
// **************************SECOND SOLUTION*****************************
// another solution for scrollIntoView
// A_sc.forEach((ele) => {
//   ele.addEventListener("click", (For_sc) => {
//     For_sc.preventDefault();
//     console.log(ele.getAttribute("data_link"));
//     const el_sec = document.getElementById(ele.getAttribute("data_link"));
//     el_sec.scrollIntoView({ behavior: "smooth", block: "center" });
//     console.log(el_sec);
//   });
// });
