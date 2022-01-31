//create the list for each section=>
let cont = 0;
// this counter to add Number of section
// increment every once
cont++;
// Selection the ul in to nav-bar
const Naav_UL = document.querySelector("#navbar__list");
//create nav=>
// create variable and create the li's a insde it
var createNav = (x) => {
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
var Sectionss = document.querySelectorAll(" main > section");
// loop section onload page and callback function nav,section
// initial value of while loop
var i = 1;
// used while loop
while (i <= 4) {
  //foreah section loop funtion of create li a and let every section li a
  //callback function that will do create li a for each section
  createNav(`section${i}`);
  // increment of counter i for every time
  i++;
}
// ===========================for li a on click event ===================================
// add activ class foreach link
var activation_link = document.querySelectorAll(" li a");
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

// =======****************=======wehen user scroll the li a is heighlight =====*******======================
// get element who active it
// //when window scrolling ,the section that is insertview will light and it's link into navbar will light
window.addEventListener("scroll", scrooolling_sec);
// callback function that observe the section
function scrooolling_sec() {
  // local scope function
  // Selecte all sections on page
  var seeections = document.getElementsByTagName("section");
  // after than apply forEach method over the Array of var (seeections)
  for (let i = 0; i < seeections.length; i++) {
    // used if condition to ensure status  section on screen of user if ture or false
    if (
      // condition of if statment used getBoundingClientRect
      //to determine Dimensions
      seeections[i].getBoundingClientRect().top >= -70 &&
      // if the top of section is greaterthan or equal >=(-45)
      seeections[i].getBoundingClientRect().top <= 300
      // if the top of section is lessthan or equal <=(-167)
    ) {
      // create var contains the  [data-nav] of section
      var SecDataNav = seeections[i].getAttribute("data_nav");
      // callBack The Function that light link his releated with his section
      light_link_activate(SecDataNav);
      // light_link_activate(SecDataNav);
    }
    // end forEach looping method
  }
}
// ============*******==function heighlight =======**********=========******========
function light_link_activate(w) {
  //create varialble that refered link a of his section on viewporte
  var light__link = document.querySelectorAll("ul > li > a ");
  // used forEach method to loop about every link and remove class active_link for him
  light__link.forEach((li__a) => {
    // remove class active_link for him
    li__a.classList.remove("active_link");
  });
  // create variable that contain link he including data-link=section-num
  var _Active_link = document.querySelector(` ul li a[data_link="${w}" ]`);
  // after than add class active_link
  _Active_link.classList.add("active_link");
}

/*in media query on screen small & medium the icon is menu
    when click it apper the menu links of navbar; 
    */
// seclete the element a>i in nav bar
var A_menu = document.querySelector("#iconNav");
// seclet the ul that will content the element li link of section
var menu_ul = document.querySelector("nav > ul");
// create the function that will show ul when clicked it
A_menu.addEventListener("click", function () {
  //here! when clicked on the icon in nav bar every time add or romve this class
  menu_ul.classList.toggle("ulNav");
  // remove this class when click over a > i on nav bar
  menu_ul.classList.remove("ulNavclose");
});

// when click the link on ul nav
//select the all element of the ul li and put them in Array
var li_link = document.querySelectorAll(" ul > li > a");
// after then used for loop to remove class form his parent when clicked the link
for (var i = 0; i < li_link.length; i++) {
  // addEventListener to make click event and cllabck function
  li_link[i].addEventListener("click", function () {
    // this function that remove this class form ul every click on link
    menu_ul.classList.add("ulNavclose");
  });
}
///srkadi
const AA = document.querySelectorAll("ul li a ");
///selected the element that contains link
AA.forEach((e) => {
  ///used forEch to add event for each one them
  e.addEventListener("click", (el) => {
    //selcte the element who is equal the elemne that in borwser view
    el = document.querySelector("#" + el.getAttribute("data_link"));
    ///used scrollIntoView to scrolling with smooth
    el.scrollIntoView({ behavior: "smooth" });
  });
});
///end fun
