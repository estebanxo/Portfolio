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

if (hoverCard1 === null) {
    console.log(null);
} else {
    hover(hoverCard1, name1);
    hover(hoverCard2, name2);
}