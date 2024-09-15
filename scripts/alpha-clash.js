// function play(){
//     //step-1 hide the home screen. to hide the screen and the class hidden to the home screen

//     const homeSection = document.getElementsById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList )
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }
// 

// function continueGame(){
//     //step-1: generate a random alphabet
//     const alphabet = getARandomAlphabet();
//     console.log('your random alphabet',alphabet); 
    
//     // set randomly generated alphabet to the screen (show it)
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;
// }
// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame()
// }  



function getARandomAlphabet(){
    // Create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');  // You forgot to split the string into an array
    
    // Get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    return alphabet;  // Return the randomly selected alphabet
}
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,currentAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // update score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        console.log(currentScoreText);
        // 2.increase the score by 1
        // 3.show the update score
        // start a new round
        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
    }
    
}
document.addEventListener('keyup',eventHandler);
function continueGame(){
    // Step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet); 
    
    // Set the randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
// set background color
setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();  // Call continueGame to start the game
}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
 function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
 }

 function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }





