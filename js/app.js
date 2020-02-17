// start top-arrow //
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

/* start dynamic header list*/
const myList = document.querySelector('ul');
const items = document.querySelectorAll('section');

for(const item of items){
    const li = document.createElement('li');
    const itemId = item.getAttribute('id');
    li.innerHTML=`<a href= #${itemId} class='link' > ${itemId}</a>`;
    myList.appendChild(li);

}
/*end dynamic header list */

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





