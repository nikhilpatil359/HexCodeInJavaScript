let hexNumber = ['1','2','3','4','5','6','7','8','9','A','B','C','E','F'];
const hexBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex(){
    let hexCol = '#';
    
    for(let i = 0; i < 6; i++)
    {
        let random = Math.floor(Math.random()*hexNumber.length);
        hexCol += hexNumber[random];   
    }

    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}


