var nav = document.querySelector('.nav');


window.addEventListener('scroll', function(){
    if(this.window.scrollY > 800){
        nav.style.backgroundColor = '#fff';
        nav.style.height = '70px';
    } 
    else{
        nav.style.height = '80px';
        nav.style.backgroundColor = 'rgb(255, 115, 0)';
    }
})


document.querySelector('.nav').addEventListener('click', function(){
    document.querySelector('#slidingNavbar').style.top = '0';
});


document.querySelector('#closebtn').addEventListener('click', function(){
    document.querySelector('#slidingNavbar').style.top = '-100%';
});
