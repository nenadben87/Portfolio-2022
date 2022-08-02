
const btnHome = document.getElementById('btn-home');
const homeBox = document.querySelector('.home-box');
const img = document.querySelector('.img');

btnHome.addEventListener('click',toggleHome);

let i = 0;
let incRep = 10;

function toggleHome() {
  const repo = document.getElementById('repo');
 
  homeBox.classList.add('active');
  resumeBox.classList.remove('active-resume');
  workBox.classList.remove('active-work');
  contactBox.classList.remove('active-contact');
  
  i += 1;

  const incRepos = setInterval(() => {
    incRep++;

    if(incRep > 35) {
      clearInterval(incRepos);
      incRep = 36;
    }

    repo.innerText = `${incRep}`;
  },100)

  if(i > 1) {
    img.classList.remove('active-img');
    img.classList.add('active-2');
  }
}

window.addEventListener('scroll', toggleHomeElements);

function toggleHomeElements() {
  const elementTop = homeBox.getBoundingClientRect().bottom;
  const triggerBottom = window.innerHeight;

  if(elementTop < triggerBottom) {
    img.classList.add('active-img'); 
  }
  
  if(i > 1) {
    img.classList.remove('active-img');
    img.classList.add('active-2');
  }

}

// Resume Box /////////
const btnResume = document.getElementById('btn-resume');
const resumeBox = document.querySelector('.resume-box');

btnResume.addEventListener('click',toggleResume);

function toggleResume() {
  resumeBox.classList.add('active-resume');
  homeBox.classList.remove('active');
  workBox.classList.remove('active-work');
  contactBox.classList.remove('active-contact');
}

// Work Box //////////
const btnWork = document.getElementById('btn-work');
const workBox = document.querySelector('.work-box');

btnWork.addEventListener('click',toggleWork);

function toggleWork() {
   workBox.classList.add('active-work');
   homeBox.classList.remove('active');
   resumeBox.classList.remove('active-resume');
   contactBox.classList.remove('active-contact');
}

// /// Contact Box ////////
const btnContact = document.getElementById('btn-contact');
const contactBox = document.querySelector('.contact-box');

btnContact.addEventListener('click',toggleContact);

function toggleContact() {
  contactBox.classList.add('active-contact');
  homeBox.classList.remove('active');
  resumeBox.classList.remove('active-resume');
  workBox.classList.remove('active-work');
}

 const otherProjects = document.querySelector('.other-projects');

 if(window.innerWidth < 540) {
   otherProjects.innerHTML = `<div>To see more projects</div>
   <div>check <a href="https://github.com/nenadben87"> My Github profile</a></div>`;
 }






