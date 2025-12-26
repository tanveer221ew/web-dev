var typed = new Typed(".auto-type",{
    strings : ["Programmer", "Web Designer", "Web Developer", "Freelancer"],
    typeSpeed : 110,
    backSpeed : 110,
    loop : true,
});
document.querySelectorAll('.skillCard').forEach(skillCard => {
    const progress = parseInt(skillCard.getAttribute('data-progress'));
    const skillCircle = skillCard.querySelector('.skillCircle');
    const progressText = skillCircle.querySelector('p');
    
    progressText.textContent = `${progress}%`;

    function animateFill(targetValue) {
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 100);
        const interval = setInterval(() => {
            if (currentValue <= targetValue) {
                skillCard.style.background = `conic-gradient(gold ${currentValue}%, white ${currentValue}% 100%)`;
                currentValue += increment;
            } else {
                clearInterval(interval);
            }
        }, 5);
    }

    animateFill(progress);
});
document.getElementById("toggleNav").addEventListener('click', function(){
    document.getElementById("navigation").style.display = "flex";
});
document.getElementById("cross").addEventListener('click', function(){
let nav = document.getElementById("navigation");
if(nav.style.display = "flex"){
    nav.style.display = "none";
}
});
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach(item =>{
    item.addEventListener('click', function() {
        let nav = document.getElementById("navigation");
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
          }
    });
});
