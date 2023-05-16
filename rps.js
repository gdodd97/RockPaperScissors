//computer generated choice
function getComputerChoice(){
    const comp_choice = ["Rock","Paper","Scissors"];

    let size = comp_choice.length;
    return comp_choice[Math.floor(Math.random() * size)]
}
console.log(getComputerChoice())


