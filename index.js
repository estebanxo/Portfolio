//                    burger menu


let isCheckedForIcon = false;

document.getElementById('icon').addEventListener('click', function () {
    isCheckedForIcon = !isCheckedForIcon;

    if (isCheckedForIcon === true) {
        document.querySelector('nav').setAttribute("class", "active");
        document.querySelector('.navBar').style.boxShadow = "none";
    } else {
        document.querySelector('nav').removeAttribute("class", "active");
        document.querySelector('.navBar').style.boxShadow = "0 6px 15px 0 rgba(0, 0, 0, 0.15)";
    }
})


//                   Dropdown skills


let contentWorkSpace = document.querySelector('.contentWorkSpace');
let contentFrontend = document.querySelector('.contentFrontend');
let contentBackend = document.querySelector('.contentBackend');

let isCheckedForBtnWorkSpace = false;
let isCheckedForBtnFrontend = false;
let isCheckedForBtnBackend = false;

let btnWorkSpace = document.getElementById('btnWorkSpace');
let btnFrontend = document.getElementById('btnFrontend');
let btnBackend = document.getElementById('btnBackend');


btnWorkSpace.addEventListener('click', function () {
    isCheckedForBtnWorkSpace = !isCheckedForBtnWorkSpace;

    if (isCheckedForBtnWorkSpace === true) {
        btnWorkSpace.style.borderRadius = "10px 10px 0 0";
        contentWorkSpace.style.padding = "20px";
        contentWorkSpace.style.height = "auto";
    } else {
        btnWorkSpace.style.borderRadius = "10px";
        contentWorkSpace.style.padding = "0";
        contentWorkSpace.style.height = "0";
    }
});

btnFrontend.addEventListener('click', function () {
    isCheckedForBtnFrontend = !isCheckedForBtnFrontend;

    if (isCheckedForBtnFrontend === true) {
        btnFrontend.style.borderRadius = "10px 10px 0 0";
        contentFrontend.style.padding = "20px";
        contentFrontend.style.height = "auto";
    } else {
        btnFrontend.style.borderRadius = "10px";
        contentFrontend.style.padding = "0";
        contentFrontend.style.height = "0";
    }
});

btnBackend.addEventListener('click', function () {
    isCheckedForBtnBackend = !isCheckedForBtnBackend;

    if (isCheckedForBtnBackend === true) {
        btnBackend.style.borderRadius = "10px 10px 0 0";
        contentBackend.style.padding = "20px";
        contentBackend.style.height = "auto";
    } else {
        btnBackend.style.borderRadius = "10px";
        contentBackend.style.padding = "0";
        contentBackend.style.height = "0";
    }
});


//                   Hover over the container card


const hoverCard1 = document.querySelector('.containerCard1');
const hoverCard2 = document.querySelector('.containerCard2');

const name1 = document.querySelector('.hoverCard1 p');
const name2 = document.querySelector('.hoverCard2 p');

hover(hoverCard1, name1);
hover(hoverCard2, name2);

function hover(hoverCard, name) {
    hoverCard.addEventListener('mouseover', function () {
        name.style.display = "block";
    });
    hoverCard.addEventListener('mouseout', function () {
        name.style.display = "none";
    });
}