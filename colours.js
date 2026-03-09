     const btnColor = document.getElementById('change-color');
        const bgColor = document.getElementById('bg-color');
        const bigSection = document.querySelector('section');

        btnColor.addEventListener('click', () => {
            let strHexColor = '#';
            const arrayHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            for (let i = 0; i < 6; i++) {
                strHexColor += arrayHex[Math.floor(Math.random() * 16)];
            }
            bigSection.style.backgroundColor = strHexColor;
            bgColor.textContent = strHexColor;
        });

          // Generate random number in range from 0 to max-1
    function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}