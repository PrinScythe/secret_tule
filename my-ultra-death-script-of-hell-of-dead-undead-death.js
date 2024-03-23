const PROMPT_NAME = 'myPrompt';
const BLOCK = ["⠀", "▏","▎","▍","▌","▋","▊","▉","█"];

function getProgressBar(percent, lenght = 10) {
    if (lenght <= 0) return "error";
    if (percent < 0 || percent > 100) return "error";
    const p = (percent / 100) * lenght;
    const nbOfFullBlocks = Math.floor(p);
    const nbOfEmptyBlocks = Math.floor(lenght - p);
    const x = Math.floor((p - nbOfFullBlocks) * 9);
    const progressbar = BLOCK[8].repeat(nbOfFullBlocks) + BLOCK[x] + BLOCK[0].repeat(nbOfEmptyBlocks);
    return progressbar + percent + "%";
}

function printInPrompt(text = "Hello Wolrd"){
    document.getElementById(PROMPT_NAME).innerHTML = text;
}

function buttonFun() {
    const percent = document.getElementById('percent').value;
    const lenght = document.getElementById('lenght').value;
    printInPrompt(getProgressBar(percent, lenght));
}

function autoPlay(step = 0) {
    if(step == 100.01) {}
    else {
        const lenght = document.getElementById('lenght').value;
        printInPrompt(getProgressBar(step, lenght));
        sleep(200).then(() => {
            // Do something after the sleep!
            autoPlay(step + 0.01)
        });
    }
}
