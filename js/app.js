// start top-arrow //
const divTop = document.querySelector('.arrow-top');
divTop.innerHTML = `<i  id="top" class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i>`
let topArrow = document.getElementById('top');
/* show or hide top arrow */
 window.onscroll = function () {
    if (window.pageYOffset > window.innerHeight ){
        topArrow.style.display = "block";
    } else {
        topArrow.style.display = "none";
    }
}

/*scroll to top when click top arrow */
topArrow.onclick = function () {
    let top = window.pageYOffset;
    window.scrollTo({ top:0 , behavior:'smooth'}) ;
}
//end top-arrow*/

// start header // 
const header = document.querySelector('header');
const nav = document.querySelector('nav');
//create brand div//
const divBrand = document.createElement('div');
divBrand.classList.add('brand');
const brand = document.createElement('h2');
const brandSpan = document.createElement('span');
brandSpan.textContent = 'music';
brand.textContent = 'sol';
nav.appendChild(divBrand);
divBrand.appendChild(brand);
brand.appendChild(brandSpan);

//create items div//
const divItems = document.createElement('div');
divItems.classList.add('items');
const myList = document.createElement('ul');
nav.appendChild(divItems);
divItems.appendChild(myList);
// create menu button//
const divMenu = document.createElement('div');
divMenu.classList.add('menuButton');
const div = document.createElement('div');
const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
divMenu.appendChild(div);
div.appendChild(span1);
div.appendChild(span2);
div.appendChild(span3);
const pargh = document.createElement('p');
pargh.textContent = 'menu';
divMenu.appendChild(pargh);
nav.appendChild(divMenu);


/* start dynamic nav list*/

const items = document.querySelectorAll('section');

items.forEach((item)=>{
    const li = document.createElement('li');
    const itemId = item.getAttribute('id');
    li.innerHTML=`<a href= #${itemId} class='link' > ${itemId}</a>`;
    myList.appendChild(li);
})
/*end dynamic nav list */
// end header//

// home section//
const secHome = document.querySelector('#home');
const divText = document.createElement('div');
const divImg = document.createElement('div');
secHome.appendChild(divText);
secHome.appendChild(divImg);
divText.className='text';
divImg.className = 'image';

divText.innerHTML = `<h1 class="h1"><span>listen</span> to new music.</h1>
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliquaUt enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequatDuis aute irure dolor in reprehenderit .</p>
 <button class="btn">download now</button> <button class="btn">start free trial</button>`;

divImg.innerHTML = ' <img src="image/people.jpg" alt="music">';
//end home section//
//start access section//
const secAccess = document.querySelector('#access');
const divFirst = document.createElement('div');
const divSec = document.createElement('div');
divFirst.classList.add('first');
divSec.classList.add('second');
secAccess.appendChild(divFirst);
secAccess.appendChild(divSec);
divFirst.innerHTML = `<h1 class="h1">unlimited access to 100k tracks</h1>`;
divSec.innerHTML = `<p class="lead">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
 Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  Duis aute irure dolor in reprehenderit exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .
</p>
<button class="btn">try it now</button>`
//end access section//
//start how works section//
const secWork = document.querySelector('#work');
secWork.innerHTML = ` <h1>how it works</h1>

<div class="parent">
    <div class="first">
        <h2>create an account</h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </div>
    <div class="second">
        <h2>choose aplan</h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </div>
    <div class="third">
        <h2>download music</h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </div>
</div>`

//Start artist section//

const secArtist = document.querySelector('#artist');
secArtist.innerHTML = `<div class="parent">
<div class="head">
    <h1 class="h1">unlimited access to 100k tracks</h1>
</div>
<div class="par">
    <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        Duis aute irure dolor in reprehenderit exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .
    </p>
    
</div>
</div>
<div class="parent">
        <div class="box">
            <img class="img-fluid" src="image/1.jpg" alt="">
        </div>
        <div class="box">
            <img class="img-fluid" src="image/2.jpg" alt="">
        </div>
        <div class="box">
            <img class="img-fluid" src="image/3.jpg" alt="">
        </div>
        <div class="box">
            <img class="img-fluid" src="image/4.jpg" alt="">
        </div>
    </div>
`
// start subscribe section//

const secsubs = document.querySelector('#subscrib');
secsubs.innerHTML = `<div class='cost'>
<h1 class="h1">subscription from $15/month</h1>
<h2>start afree trial now</h2>
<p class="lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
     Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      Duis aute irure dolor in reprehenderit .
</p>
<button class="btn">try it now</button>
</div>
<div class="list">
<ul>
    <li>play any track</li>
    <li>listen offline</li>
    <li>unlimited skip</li>
    <li>high quality audio</li>
    <li>shuffle play</li>
    <li>no ad interruption</li>
</ul>
</div>`

// start footer//
const footer = document.querySelector('footer');
footer.innerHTML = ` <div class="rights">
<div class="brand">
    <h2>sol <span>music</span></h2>
</div>
<p>copyright &copy; 2020 all rights reserved this template is made with &hearts; by <span>colorlip</span></p> 
<i class="fa fa-facebook" aria-hidden="true"></i>
<i class="fa fa-twitter" aria-hidden="true"></i>
<i class="fa fa-youtube" aria-hidden="true"></i>
</div>

<div class="box">
    <h3>about us</h3>
    <ul>
        <li>our story</li>
        <li>sol music</li>
        <li>history</li>
    </ul>
</div>
<div class="box">
    <h3>products</h3>
    <ul>
        <li>music</li>
        <li>subscribtion</li>
        <li>custom music</li>
        <li>footage</li>
</ul>
</div>
<div class="box">
    <h3>playlist</h3>
    <ul>
        <li>newsletter</li>
        <li>careers</li>
        <li>press</li>
        <li>contacts</li>
    </ul>
</div>`



/* verify if section is in viewport */
const isInViewport = (el) =>{
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top ;
    const viewport = {
        top:scroll,
        bottom: scroll+ window.innerHeight
    };
    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight
    };
    const header = document.querySelector('header');
    const bounding = el.getBoundingClientRect();
    const headerHeidght = header.getBoundingClientRect().height;
     return  (((bounding.top < window.innerHeight) && (bounding.top <= (headerHeidght + 100))) || (bounding.bottom <= 100));  
    
}


/* add class active if section in viewport */
const addClassActive = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section)=>{
        const links = document.querySelectorAll('.link');
        if(isInViewport(section)){
            section.classList.add('active');
            links.forEach((link)=>{
                if(link.hash === '#'+ section.id){
                    link.classList.add('activeLink');
                }
                else {
                    link.classList.remove('activeLink');
                }
            })
            
        }
        else {
            section.classList.remove('active');  
            
        }
    }) 
}

window.addEventListener('scroll', addClassActive);


/* in media 750px click menu button to show nav items */
let menuButton = document.querySelector('.menuButton');
let navItems = document.querySelector('div.items');
menuButton.onclick = ()=>{
    navItems.classList.toggle('show');
}





