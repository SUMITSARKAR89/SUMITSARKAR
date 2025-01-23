 // ==========================cursor===============================

// const cursorDot = document.querySelector('.cursor-dot');
// const toolsSec = document.querySelector('#skill');

// toolsSec.addEventListener('mousemove', (e) => {
//     const posX = e.clientX;
//     const posY = e.clientY;
//     console.log(posX, posY)

//     cursorDot.style.left = `${posX}px`;
//     cursorDot.style.left = `${posY}px`;
// })




 // ==========================darkmood===============================


let darkmood = localStorage.getItem('darkmood');
    const controlTheme = document.querySelector("#control");

    const enableDarkmode = () => {
        document.body.classList.add('darkmood')
        localStorage.setItem('darkmood', 'active')
    }

    const disableDarkmood = () => {
        document.body.classList.remove('darkmood')
        localStorage.setItem('darkmood', null)
    }

    if(darkmood === "active") enableDarkmode()
   
    controlTheme.addEventListener("click", () => {

        darkmood = localStorage.getItem('darkmood')
        darkmood !== "active" ? enableDarkmode() : disableDarkmood()
    })
 
//  ===========================menu===================================

const sideBar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");
const contactList = document.querySelector("#contact-list");
const day = document.querySelector("#control");



menu.addEventListener('click', () => {
    sideBar.style.display = "block";
    sideBar.style.width = "300px";
    menu.style.opacity = "0";
    contactList.style.display = 'none';
    day.style.display = "none";
    

});
function crossbar(){
    sideBar.style.display = "none";
    menu.style.opacity = "1";
    contactList.style.display = 'block';
    sideBar.style.width = "0px"; 
    day.style.display = "block";
    
};


// ==========================header link active===================================

const linkButton = document.querySelectorAll('.list-btn');
const dropdownContentBtn = document.querySelectorAll('.dropdown-content a');
linkButton.forEach((btn ) => {
    btn.addEventListener('click', () => {
        linkButton.forEach( btn => {
            btn.classList.remove('active-linkBtn');
        })
        btn.classList.add('active-linkBtn');
    });
});
dropdownContentBtn.forEach((btn ) => {
    btn.addEventListener('click', () => {
        dropdownContentBtn.forEach( btn => {
            btn.classList.remove('dropBtn');
        })
        btn.classList.add('dropBtn');
    });
});

// ==========================nav bar scroll===================================

window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const navbar = document.querySelector("nav");

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        navbar.style.top = "-2px";
    }else{
        navbar.style.top = ""
    }
};

// ==========================number count ===================================
const valueCounts = document.querySelectorAll("[about-data-value]");  // All elements with 'about-data-value'
let interval = 3000;

valueCounts.forEach((valueCount) => {
    let startvalue = 0;
    let endValue = parseInt(valueCount.getAttribute('about-data-value'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
        startvalue += 1;
        valueCount.textContent = startvalue;
        if (startvalue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});



//  ===============================tab =================================

function showpanel(a,b,c){
    //tabpanel + for loop
    const tabpanel = document.getElementsByClassName("tabpanel");
    for(let i = 0; i< tabpanel.length; i++){
        tabpanel[i].style.display = "none";
    }

    //btn + for loop
    const btn = document.getElementsByClassName("btn");
    for(let i = 0; i< btn.length; i++){
        btn[i].style.backgroundColor = "";
    }
    //a = onclick(btn)
    //b = onclick(this)
    //c = onclick(color name)
    document.getElementById(a).style.display = "block";
    b.style.backgroundColor = c;
}
document.getElementById("default").click();
//  ========================topic===========================

// == referance ==

const topicPrevBtn = document.getElementById("topic-prev");
const topicNextBtn = document.getElementById("topic-next");
const topicSlider = document.getElementById("topic-slider");

const learnMore = document.querySelector(".topic-img-btn");
const featureSection = document.querySelector("#feature-blog");

// learnMore.addEventListener('click', () => {
//     featureSection.style.backgroundColor = 'red';
// })

// == next btn == 
topicNextBtn.addEventListener("click", nextPage);
function nextPage(){
    topicSlider.appendChild(topicSlider.firstElementChild);
};

// == privious btn == 
topicPrevBtn.addEventListener("click", previousPage);
function previousPage(){
    topicSlider.prepend(topicSlider.lastElementChild);
};


// == auto slider== 
function autoTopicSlide(){
    autoInterval = setInterval(timer, 5000);
    function timer(){
        nextPage();
    }
    //  setInterval(() => nextPage(), 3000);
} 
autoTopicSlide();
// ==resume suto slider== 
topicSlider.addEventListener("mouseout", autoTopicSlide);
topicNextBtn.addEventListener("mouseout", autoTopicSlide);
topicPrevBtn.addEventListener("mouseout", autoTopicSlide);



// == stop auto slider== 
topicSlider.addEventListener("mouseover", deleteAutoSlider);
topicNextBtn.addEventListener("mouseover", deleteAutoSlider);
topicPrevBtn.addEventListener("mouseover", deleteAutoSlider);

function deleteAutoSlider(){
    clearInterval(autoInterval);
};

const mainImages = document.querySelectorAll(".slide-item img");
const modalBody = document.querySelector(".topic-modal");
const modalImages = document.querySelector(".topic-modal-img");
const text = document.querySelector(".topic-modal-text");
const close = document.querySelector(".topic-closed");


const featureImages = document.querySelectorAll(".column img");


//take ForEach loop in images to appear a classlist on their



mainImages.forEach((image) =>{
    image.addEventListener('click', () =>{
        modalBody.classList.add("active");
          
        // //indevidual Title and individual photo
        modalImages.src = image.src;
        text.innerHTML = image.alt; 
        

        close.addEventListener('click', () =>{
            modalBody.classList.remove("active");
        });
    });

});
featureImages.forEach((image) =>{
    image.addEventListener('click', () =>{
        modalBody.classList.add("active");
          
        // //indevidual Title and individual photo
        modalImages.src = image.src;
        text.innerHTML = image.alt; 
        

        close.addEventListener('click', () =>{
            modalBody.classList.remove("active");
        });
    });

});


  


//=========================more templete=========================
const moreTemplete = document.querySelector("#more-work-templete");
const moreExploreBtn = document.querySelector(".work-explore-btn");
const moreListLink = document.querySelector("#more-list-link");

moreExploreBtn.addEventListener('click', () => {
    moreTemplete.style.display = "block";
});
moreListLink.addEventListener('click' , () => {
    moreTemplete.style.display = "block";

})

// ========================toggle =================================
const topScroll = document.querySelector('.top-scroll');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500){
        topScroll.classList.add("active")
    }else{
        topScroll.classList.remove("active")
    }
});
// -----------------------------submit btn-----------------------
function contactSubmit() {
    let contactName = document.getElementById("contactName");
    let contactEmail = document.getElementById("contactEmail");
    let contactMsg = document.getElementById("contactMsg");
    const contactToastBox = document.querySelector(".contact-toast-box");
    const contactDenger = document.querySelector(".contact-denger");

    if(contactName.value === '' || contactEmail.value === '' || contactMsg.value === ''){
        contactDenger.style.display = "block";
    }else{
       setTimeout ( () => {
        contactName.value = '';
        contactEmail.value = '';
        contactMsg.value = '';

       }, 8000)
       contactToastBox.style.display = "block";
    }
   

    setTimeout ( () => {
        contactDenger.style.display = "none";
        contactToastBox.style.display = "none";
    }, 5000)


}
 
// =============================massage box==========================

const msgModalBox = document.querySelector(".msg-modal-box");
const msgModalBoxIcon = document.querySelector(".msg-box");
const msgModalBoxdlt = document.querySelector("#msg-dlt");


msgModalBoxIcon.addEventListener('click', () => {
    msgModalBox.style.display = "block";
});
msgModalBoxdlt.addEventListener('click', () =>{
    msgModalBox.style.display = "none";
});



function submitmsgBox(){
    // e.preventDefault();
    let name = document.getElementById("msgName"); 
    let email = document.getElementById("msgEmail"); 
    let msg = document.getElementById("msgMassage"); 
    const toastBoxDenger = document.querySelector(".toast-box-danger");
    const toastBox = document.querySelector(".toast-box");

    if(name.value === '' || email.value === '' || msg.value === '' ){
        toastBoxDenger.style.display = "block";
    }else{
        setTimeout ( () => {
            name.value = '';
            email.value = '';
            msg.value = '';

        }, 4000);
        toastBox.style.display = "block";
    }

    setTimeout ( () => {
        toastBoxDenger.style.display = "none";
        toastBox.style.display = "none";
    }, 4000);
}





// ======================more topic======================

const moreBtnContainer = document.getElementById("myBtnContainer");
const featureBtns = document.querySelectorAll(".feature-btn");
const featureColumns = document.querySelectorAll(".column");

function featureFilter(category) {
    // Show all if category is 'all', otherwise filter by category
    featureColumns.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add("show");
        
      } else {
        a.classList.remove("show");
        
      }
    });
  };
  // Initialize to show all
  featureFilter("all");

  // Add active class to the clicked button

  featureBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      featureBtns.forEach((i) => i.classList.remove("feature-active"));
      // Add 'active' class to the clicked button
      btn.classList.add("feature-active");
      
    });
  });

//   -------------------------search-feature-----------------------------
function searchTwo() {
    const searchQuery = document.getElementById('search_input').value.toUpperCase();
    const blogFeatureItems = document.querySelectorAll('.column');

    blogFeatureItems.forEach((item) => {
        const headline = item.querySelector('.tips-h6');
        const headlineText = headline ? headline.textContent || headline.innerText : "";

        if (headlineText.toUpperCase().includes(searchQuery)) {
            item.style.display = "";  // or "" to restore default display if needed
        } else {
            item.style.display = "none";
        }
    });
}


  
//   -------------------------topic active or inactive------------------------------------
const topicLearnMore = document.querySelector('.topic-img-btn');
const featureBlog = document.querySelector('#feature-blog');
const listFeatureBtn = document.querySelector('#list-feature-btn');

topicLearnMore.addEventListener('click', () => {
    featureBlog.style.display = "block";

});
listFeatureBtn.addEventListener('click', () => {
    featureBlog.style.display = "block";
});

// ------------------------------ umcoming btn-------------------------------

const upcomingBtn = document.querySelector('.upcoming-btn');
upcomingBtn.addEventListener("mouseover", () => {
    if(upcomingBtn.innerHTML = "Upcoming post"){
        upcomingBtn.innerHTML = "Post is Unavilable"
    }else{
        upcomingBtn.innerHTML = "upcoming post"
    }
});

// ----------------------------------accordion----------------------------- 

const accordion = document.getElementsByClassName("accordion-btn");
        
let i;
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("acc-on");
        let card = this.nextElementSibling; //sibling element is = "p"//
        if(card.style.maxHeight){
            card.style.maxHeight = null;
        }else{
            card.style.maxHeight = card.scrollHeight + "px";
        }
    });

};


// ======================================================================
const asideBtn = document.querySelector('.aside_btn');
const aboutLinkBtn = document.querySelector('.aboutBtn');
const aboutLinkBtn2 = document.querySelector('.aboutMe');
const aboutLinkBtn3 = document.querySelector('.aboutMeNav');
const asideBody = document.querySelector('#aside-part');
const mainClosedBtn= document.querySelector('#mainClosed');

asideBtn.addEventListener('click', () => {
    asideBody.style.left = "35%"
});
aboutLinkBtn.addEventListener('click', () => {
    asideBody.style.left = "35%"
});
aboutLinkBtn2.addEventListener('click', () => {
    asideBody.style.left = "35%"
});
aboutLinkBtn3.addEventListener('click', () => {
    asideBody.style.left = "35%"
});
mainClosedBtn.addEventListener('click', () => {
    asideBody.style.left = "-150%"
});

//=================================================

const forthBtns = document.querySelectorAll('.f-btn');
const forthContents = document.querySelectorAll('.f-tabpanel');

forthBtns.forEach( (btn, index) => {
btn.addEventListener('click', () => {

    forthBtns.forEach( btn => {
        btn.classList.remove('f-active')
    })
    btn.classList.add('f-active');

    forthContents.forEach(content => {
        content.classList.remove('f-active');
    })
    forthContents[index].classList.add('f-active');

    })
});


//--------------------------------removal animation ----------------------------- 

ScrollReveal({ 
    
    distance: '60px',
    duration: 2500,
    delay:300 
});
ScrollReveal().reveal('.title-box', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.h1', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.hero-image', { delay: 300, origin: 'right'});
ScrollReveal().reveal('.about-text', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.numbers', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.remove-sumit', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.skill-text', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.tools-items', { delay: 400, origin: 'top'});
ScrollReveal().reveal('.skill-body', { delay: 300, origin: 'top'});
ScrollReveal().reveal('.skill-side-2', { delay: 400, origin: 'right'});
ScrollReveal().reveal('h4', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('h5', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('h1 .h1', { delay: 300, origin: 'bottom'});

ScrollReveal().reveal('h1', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('h2', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('h3', { delay: 400, origin: 'bottom'});

ScrollReveal().reveal('.text', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('#topic-slider', { delay: 400, origin: 'right'});
ScrollReveal().reveal('.topic-btn i', { delay: 400, origin: 'right', interval: 200});
ScrollReveal().reveal('.feature-btn', { delay: 100, origin: 'top', interval: 200});

ScrollReveal().reveal('#topic-slider', { delay: 200, origin: 'right'});
ScrollReveal().reveal('.feature-blog-left', { delay: 200, origin: 'left'});

ScrollReveal().reveal('.feature-blog-right', { delay: 400, origin: 'right'});
ScrollReveal().reveal('.contact-me', { delay: 100, origin: 'left'});
ScrollReveal().reveal('.footer-card-link', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.footer-p', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.accordion-container', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.contact-container', { delay: 200, origin: 'right'});
ScrollReveal().reveal('.footer-card-link a', { delay: 200, origin: 'bottom'});


// -------------wheel image slider model box --------------------------------------
const sliderTwo = document.querySelector('.slider-two');
const sliderTwoPrev = document.querySelector('#left-btn');
const sliderTwoNext = document.querySelector('#right-btn');

sliderTwo.addEventListener('wheel', (index) => {
    index.preventDefault();
    sliderTwo.scrollLeft += index.deltaY;
    sliderTwo.style.scrollBehaviour = "auto";
});

sliderTwoNext.addEventListener('click', () => {
    sliderTwo.style.scrollBehaviour = "smooth";
    sliderTwo.scrollLeft += 900;
    
});
sliderTwoPrev.addEventListener('click', () => {
    sliderTwo.style.scrollBehaviour = "smooth";
    sliderTwo.scrollLeft -= 900;
    
});

// -------------design layout box -------------------
const designBtn = document.querySelector('.designBtn');
const designBtn2 = document.querySelector('.designBtn2');
const designBtn3 = document.querySelector('.designCategory');
const designBtn4 = document.querySelector('.myDesignNav');

const designBody = document.querySelector('#design');
const logOutBtn= document.querySelector('.log_out');


designBtn.addEventListener('click', () => {
    designBody.style.left = "4px"
});
designBtn2.addEventListener('click', () => {
    designBody.style.left = "4px"
});
designBtn3.addEventListener('click', () => {
    designBody.style.left = "4px"
});
designBtn4.addEventListener('click', () => {
    designBody.style.left = "4px"
});
logOutBtn.addEventListener('click', () => {
    designBody.style.left = "-100%"
});






