//SENTENCES RANDOM \/\/\/
let Sentences = [
    "this website is the infinite version of code monkey",
    "thx for playing",
    "how are you",
    "oh im good",
    "i like this website",
    "it is good",
    "do you want to chat",
    "im quite happy rn",
    "this website took me a while to make",
    "im good",
    "i hate brain rot",
    "i am a fast typer",
    "welcome to InfiniType",
    "i like pizza",
    "do you know i like pizza",
    "you know who likes pizza",
    "i hope i finish this project",
    "i like coding",
    "these sentences are pretty cool arnt they",
    "i am hungry",
    "i hope you find my website cool",
    "when was the last time you ate",
    "sorry i am trying to add as many sentenses as possible",
    "i think this project will turn out good",
    "people who use this website are very cool",
    "this is my biggest project yet",
    "the hardest bit about this project is the javascript",
    "also changing the colour of the text is pretty hard",
    "if you dont like cats leave this website nowww",
    "if you want to support me you can support me via ko fi",
    "ko fi is found in the bottom corner",
    "i have actually made no money online so it would help if you could support me thx",
    "i am aware this website is not that unique but i think it is a good project as it is simple and lets me earn a small amount of money from ads",
    "js is quite simple actually",
    "the reason i am adding so many sentences is so they are more diluted",
    "this website never ends...",
    "cmon keep on typing",
    "you can do this lets go",
    "making this was hard",
    "i hope you are having fun",
    "do you feel like your getting better",
    "thank you so much for using my product as it is not the coolest or most flashy",
    "how fast can you type",
    "can you keep up as it might be hard to",
    "feel free to explore",
    "this is open source and the code is fully available",
    "if you have a reccomendation you can email me",
    "the i icon at the bottom of the page brings you to a page which will tell you about the website",
    "the yt will bring you to my chanell where i will post videos on coding",
]
//SENTENCES RANDOM END

//VARIABLES \/\/\/
let Word_space = document.getElementById("WD");
let letter = 0;
let WCT = '';
let WPMC = document.getElementById("WPMC");
let TIME = 0;
let timeInterval = null;
let periods = 0;
let periodsCooldown = false;
//VARIABLES END

//FUNCTIONS \/\/\/\/\/

//PERIODS \/\/\/
function PERIODS() {

    periods = periods === 0 ? 1 : 0;
    Start();
}
//PERIOD END

//WPM \/\/\/

function WPMSS() {
    if (TIME === 0) {
        WPMC.innerHTML = 0;
        return;
    }
    let WPMSTC = Math.round((letter / 5) / (TIME / 60));
    // WPMC.innerHTML = WPMSTC;
} 

//END OF WPM

//TIME \/\/\/
function startTimer() {
    timeInterval = setInterval(() => {
        TIME = TIME + 1;
        WPMSS();
    }, 100);
}
//TIME END


//START \/\/\/
function Start() {
    let FRSS = [];

    // Pick random sentences
    for (let RS = 0; RS < 100; RS++) {
        let RSC = Math.floor(Math.random() * Sentences.length);
        FRSS.push(Sentences[RSC]);
    }

    // Build text correctly
    let CLMT;
    if (periods === 1) {
        CLMT = FRSS.join(". ");
    } else {
        CLMT = FRSS.join(" ");
    }

    let CUT = CLMT.substring(0, 450);

    // Display text
    Word_space.innerText = CUT;

    // Reset letter counter
    letter = 0;

    // Update WCT with NEW text
    WCT = Word_space.textContent;

    // Wrap letters
    Word_space.innerHTML = WCT.split('')
        .map(char => `<span>${char}</span>`)
        .join('');
}
//START END

//FUNCTIONS END

// START \/\/\/
Start();
// START END

const initUnderline = () => {
    if (Word_space.children[0]) {
        const firstChar = Word_space.children[0];
        firstChar.style.textDecorationLine = 'underline'; // underline the letter
        firstChar.style.textDecorationColor = 'yellow';    // yellow color
        firstChar.style.textDecorationThickness = '0.6vw'; // thickness
    }
};


initUnderline();

document.addEventListener('keypress', event => {
    if (TIME === 0) startTimer();

    const currentChar = Word_space.children[letter];
    if (!currentChar) return;

    if (event.key === WCT[letter]) {
        currentChar.style.color = 'white';
        currentChar.style.textDecorationLine = 'none';
    } else {
        currentChar.style.color = 'red';
        currentChar.style.textDecorationLine = 'underline';
        currentChar.style.textDecorationColor = 'red';
        currentChar.style.textDecorationThickness = '0.6vw';
    }

    letter++;

    // Clear yellow underline from all letters
    for (let i = 0; i < Word_space.children.length; i++) {
        const char = Word_space.children[i];
        if (char.style.textDecorationColor === 'yellow') {
            char.style.textDecorationLine = '';
            char.style.textDecorationColor = '';
            char.style.textDecorationThickness = '';
        }
    }

    if (letter >= Word_space.children.length) {
        Start();
        initUnderline(); // underline first letter of new text
        return;
    }

    // Underline next correct letter in yellow
    const nextChar = Word_space.children[letter];
    if (nextChar) {
        nextChar.style.textDecorationLine = 'underline';
        nextChar.style.textDecorationColor = 'yellow';
        nextChar.style.textDecorationThickness = '0.6vw';
    }
});





//MOBILE DETECTION \/\/\/
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    alert("This website is ment for devices like desktops or laptops not phones!");
}
//END OF MOBILE DETECTION

//WPM PRINT \/

