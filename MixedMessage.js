// we want to generate messages for this project: random messages 


randomMessage = ['Tell a funny story about you! Something personal',
'You have to do 10 pushups',
'Send your mom a text', 'drink a cup of water', 'take a shot', 'play Spider Tanks'];

players = ['Kaizen', 'Pacheco', 'Deadly','jsoto', 'jack'];


function randomPlayer(arr){
    let size = arr.length 
    let randomPlayer = Math.floor(Math.random()*size);
    return arr[randomPlayer];

}

function randomChallenge(arr){
    let randomChall = Math.floor(Math.random()*arr.length);
    return arr[randomChall];
}

console.log(randomChallenge(randomMessage));
console.log(randomPlayer(players));