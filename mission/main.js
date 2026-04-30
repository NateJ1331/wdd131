let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
pageContent = document.querySelector('#content');
underline = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = ("black"); 
        document.body.style.color = ("white");
        pageContent.style.borderColor = ("white");
        underline.style.borderColor = ("white");
        logo.setAttribute('src','assets/byui-logo-white.png')
        
    } else {
        document.body.style.backgroundColor = ("white"); 
        document.body.style.color = ("black");
        pageContent.style.borderColor = ("black");
        underline.style.borderColor = ("black");
        logo.setAttribute('src','assets/byui-logo-blue.webp')
    }
}     