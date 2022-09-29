
const hamburger = document.querySelector('.hamburger')
const mobile_nav = document.querySelector('.mobile-navigation')
const close_hamburger = document.querySelector('.close-hamburger')

const mobile_arrow = document.querySelectorAll('.mobile-arrow')
const desktop_arrow = document.querySelectorAll('.desktop-arrow')

const li_feature = document.querySelectorAll('.li-features')
const li_company = document.querySelectorAll('.li-company')

hamburger.addEventListener('click', ()=>{
    mobile_nav.classList.add('active-menu');
});
close_hamburger.addEventListener('click', ()=>{
    mobile_nav.classList.remove('active-menu');
});

// Dropdown
for (let i = 0; i < li_feature.length; i++) {
    const element = li_feature[i];
    const feature = document.querySelectorAll('.feature-dropdown')

    element.addEventListener('click', ()=>{
        feature[i].classList.toggle('block');
        mobile_arrow[0].classList.toggle('arrow-drop')
        desktop_arrow[0].classList.toggle('arrow-drop')
        console.log('clicked 3')
    })
}

for (let i = 0; i < li_company.length; i++) {
    const element = li_company[i];
    const company = document.querySelectorAll('.company-dropdown')
    
    element.addEventListener('click', ()=>{
        company[i].classList.toggle('block');
        mobile_arrow[1].classList.toggle('arrow-drop')
        desktop_arrow[1].classList.toggle('arrow-drop')
        console.log('clicked 4')
    })
    
}