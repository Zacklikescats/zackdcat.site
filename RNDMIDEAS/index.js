console.log("JS loaded!");

async function IDEA() {
    const response = await fetch("https://api.datamuse.com/words?sp=??????");
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const idea = data[randomIndex].word;

    document.getElementById("placeideahere").innerText = idea;
    setRandomImage();
}


function setRandomImage() {
    const IDABX = document.querySelector(".ideaBX");
    let NTKOSP = Math.floor(Math.random() * 1000);
    IDABX.style.backgroundImage = `url('https://picsum.photos/600/350?random=${NTKOSP}')`;
    IDABX.style.backgroundSize = "cover";
    IDABX.style.backgroundPosition = "center";
    IDABX.style.backgroundRepeat = "no-repeat";
}
