const btnColour = document.getElementById('change-color');
const boxDisplay = document.getElementById('bg-color');
const bigSection = document.getElementById('section');

btnColour.addEventListener('click', () => {
    let strHexColour = '#';
    const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++){
        strHexColour += arrHex[getRandomNumber(arrHex.length)];
    }
    boxDisplay.innerText = strHexColour;
    bigSection.style.backgroundColor = strHexColour;

});


// Generate random number in range from 0 to max-1
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    };