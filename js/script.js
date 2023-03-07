let body = document.querySelector('body');
let scroll = document.querySelector('#scroll');
let logo = document.querySelector('#link_to_home1');
let home = document.querySelector('#link_to_home2');

// body.style.overflow = 'hidden';

scroll.onclick = function() {
    body.style.overflow = null;
    document.querySelector('header').style.display = "none";
};

logo.onclick = function() {
    document.querySelector('header').style.display = "block";
    body.style.overflow = 'hidden';
};

home.onclick = function() {
    document.querySelector('header').style.display = "block";
    body.style.overflow = 'hidden';
};