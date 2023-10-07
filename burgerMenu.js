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