const artworks =
document.querySelectorAll(
'.art-card img'
);

const lightbox =
document.getElementById(
'lightbox'
);

const lightboxImg =
document.getElementById(
'lightbox-img'
);

const closeBtn =
document.getElementById(
'close-lightbox'
);

artworks.forEach(img=>{

    img.addEventListener(
    'click',
    ()=>{

        lightbox.classList.add(
        'active'
        );

        lightboxImg.src =
        img.src;

    });

});

closeBtn.addEventListener(
'click',
()=>{

    lightbox.classList.remove(
    'active'
    );

});

lightbox.addEventListener(
'click',
(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove(
        'active'
        );

    }

});
const themeToggle =
document.getElementById(
'theme-toggle'
);

themeToggle.addEventListener(
'click',
()=>{

document.body.classList.toggle(
'dark'
);

if(
document.body.classList.contains(
'dark'
)
){

themeToggle.innerHTML='☀️';

}else{

themeToggle.innerHTML='🌙';

}

});
if(
localStorage.getItem('theme')
==='dark'
){

document.body.classList.add(
'dark'
);

themeToggle.innerHTML='☀️';

}

themeToggle.addEventListener(
'click',
()=>{

if(
document.body.classList.contains(
'dark'
)
){

localStorage.setItem(
'theme',
'dark'
);

}else{

localStorage.setItem(
'theme',
'light'
);

}

});
const lines = document.querySelectorAll(
'.terminal-body p'
);

lines.forEach((line,index)=>{

line.style.opacity='0';

setTimeout(()=>{

line.style.opacity='1';

},index*300);

});
console.log(`
BUB.EXE

Access Granted.

Welcome, traveler.
`);
window.addEventListener('scroll',()=>{

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(winScroll / height) * 100;

document.getElementById(
'progress'
).style.width =
scrolled + '%';

});
document.addEventListener(
'keydown',
e=>{

if(e.ctrlKey && e.key==='k'){

e.preventDefault();

document.getElementById(
'command'
).style.display='block';

}

}
);