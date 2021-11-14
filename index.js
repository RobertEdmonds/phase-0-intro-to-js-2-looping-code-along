// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
function writeCards(names){
    const final =[]
    for (let i = 0; i < names.length; i++){
        final.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return final;
}

function countDown(num){
    let i = num;
    while (i >= 0){
        console.log(i--);
    }
    return i;
}
console.log(countDown(10));