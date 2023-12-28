let darkmode= document.querySelector('#darkmode');

darkmode.onclick=()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('color');
    }
} 
const sr = scrollReveal({
    distance:'70px',
    duration:2700,
    reset:true
});
sr.reveal('.hero-text',{delay:200, origin:'bottom'});
sr.reveal('.hero-img',{delay:350, origin:'top'});
sr.reveal('.down-arrow',{delay:350, origin:'right'});