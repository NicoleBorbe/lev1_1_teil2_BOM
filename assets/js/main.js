let count;
let counter = 11;
function timerFunction () {
    if (counter >= 2) {
    console.log(counter -= 1);
    } else {
        clearInterval(count);
        console.log("Endlich Feierabend!");
    }
};
count = setInterval(timerFunction, 1000);