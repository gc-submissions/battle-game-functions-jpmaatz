"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random()*10)+1 

const chooseOption = (opt1,opt2) => Math.random() < 0.5 ? opt1:opt2

function attackPlayer (health){
    return health - randomDamage;
}

const logHealth = (player,health) => console.log("" + player + " health " + health + "!")

const logDeath = (winner,loser) => console.log("" + winner + " defeated " + loser + "!")

const isDead = health => health <= 0 ? true:false 

function fight (player1,player2,player1Health,player2Health){
    
    const attacker = chooseOption
    while(player1 || player2 = chooseOption){
        return true;
    }

    if (attacker = player1){
        return player2Health = attackPlayer(player2Health);
    }
    console.log(logHealth(player2,player2Health))

    if (isDead(player2Health)){
        return logDeath(player1,player2);
        break;
    }

} else (player1Health === attackPlayer(player1Health)) {
    return logHealth(player1,player1Health);

    if (isDead(player1Health)){
        return logDeath(player2,player1);.
        break;
    }

}

fight(Mitch,Adam,100,100)