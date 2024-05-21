
const emoji = ['🐸', '👾', '👁️', '🐋', '🍕', '🔥', '🐞', '🎱'];
const emojiConfig = (emoji.join(' ') + " ").repeat(2).trim().split(' ');
const sizeMap = 4;
const matrix = new Array(sizeMap).fill(0).map(() => new Array(sizeMap).fill(0));
let comparedCards = [];
let identityCounter = 0;
let tumeoutId;



createMap()
function createMap() {
    emojiConfig.sort(() => Math.random() - 0.5)
    const emojiConfigCopy = Array.from(emojiConfig);
    for (let i= 0; i < sizeMap; i++) {

        for (let j= 0; j < sizeMap; j++) {
            matrix[i][j] = emojiConfigCopy[emojiConfigCopy.length-1]
            emojiConfigCopy.pop()
        }
    }
    matrix.forEach(i => i.forEach(j => createEmojiCard(j)))
}


function createEmojiCard(item) {
    const container = document.getElementById('.container');

    const note = document.createElement('div');
    note.classList.add('card');

    note.innerHTML =`
    <span class="item"> ${item} </span>
    `
    document.querySelector('.container').append(note);
    note.addEventListener('click', () => clickChekc());

    function clickChekc(){
        if(comparedCards.length === 2){
            clearTimeout(tumeoutId);
            clearTimeOut()
            comparedCards.length = [];
        }else{
            click(note)
        }
    }

}
function clearTimeOut(){
    comparedCards.forEach(i => i.classList.remove('action'))
    comparedCards.length = [];
}
function click(note){
    let num = note.classList.length
    if(num < 2){
        note.classList.add('action')
        comparedCards.push(note)
        if(comparedCards.length === 2){
            if(getEmpjiFromNote(comparedCards[0]) === getEmpjiFromNote(comparedCards[1])) {
                comparedCards.forEach(i => i.classList.add('identity'))
                identityCounter +=1
                console.log(identityCounter)
                comparedCards.length = [];
                if(identityCounter === 8){
                    console.log('88888')
                    congratulate();
                    identityCounter = 0
                }
            }
            setTimeout(() => clearTimeOut(),300)
        }
    }
}

function getEmpjiFromNote(note) {
    return note.children[0].innerText
}
function congratulate(){

   const textCongratulate = document.createElement('div');
    textCongratulate.classList.add('congratulate');



        textCongratulate.innerHTML =`
        <div>VICTORY</div>
        `
        document.querySelector('.container').append(textCongratulate);

        textCongratulate.addEventListener('click', () => {
            document.querySelector('.container').innerHTML = '';
            matrix.forEach(i => (i.forEach(j => {

            })))
            createMap();
        });
}
