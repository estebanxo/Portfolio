// btnWorkSpace.addEventListener('click', dropDown( contentWorkSpace, isCheckedForBtnWorkSpace, btnWorkSpace ));
// btnFrontend.addEventListener('click', dropDown( contentFrontend, isCheckedForBtnFrontend, btnFrontend ));
// btnBackend.addEventListener('click', dropDown( contentBackend, isCheckedForBtnBackend, btnBackend ));

// function dropDown(content, isChecked, btn) {
//     isChecked = !isChecked;

//     if (isChecked === true) {
//         btn.style.borderRadius = "7px 7px 0 0";
//         content.style.padding = "5px";
//         content.style.height = "auto";
//     } else {
//         btn.style.borderRadius = "7px";
//         content.style.padding = "0";
//         content.style.height = "0";
//     }
// };

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