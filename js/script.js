let body = document.querySelector('body');
let scroll = document.querySelector('#scroll');
let home1 = document.querySelector('#link_to_home1');
let home2 = document.querySelector('#link_to_home2');

// body.style.overflow = 'hidden';

scroll.onclick = function() {
    body.style.overflow = null;
    document.querySelector('header').style.display = "none";
};

home1.onclick = function() {
    document.querySelector('header').style.display = "block";
    body.style.overflow = 'hidden';
};

home2.onclick = function() {
    document.querySelector('header').style.display = "block";
    body.style.overflow = 'hidden';
};