import { getRandomInt } from "../math";

export function is221(d1, d2, d3){
    let array = [d1, d2, d3];
    array.sort(function(a,b) {
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    let str = "" + array[0] + array[1] + array[2];
    let value = parseInt(str);
    return value === 221;
}
export function calculateRoundEnd(game){
    let players = Object.values(game.players);
    let playersScore = [];
    players.map(p => {
        let scores = [p.dice1.value,  p.dice2.value,  p.dice3.value];
        scores.sort(function(a, b) { return a - b; });
        let scoreString = "" + scores[2] + scores[1] + scores[0];
        let scoreInt = parseInt(scoreString);
        playersScore.push({player: p, score: getScoreForce(scoreInt)});
    });
    playersScore.sort(function(a, b) {
        if(a.score < b.score) return -1;
        else if (a.score > b.score) return 1;
        else return 0;
    });
    let nbSip = getNbSip(playersScore[playersScore.length - 1].score);
    let message = createMessage(playersScore[0].player, nbSip);
    let addSip = true;
    if(playersScore[0].score === playersScore[playersScore.length - 1].score){
        addSip = false;
        game.message = {
            value: "Nobody have to drink for this round...",
            change: game.message.change + 1
        };
    } else {
        game.message = {
            value: message,
            change: game.message.change + 1
        };
    }
    game.max_turn = 3;
    game.round = game.round + 1;
    for(let i = 0; i < playersScore.length; i++){
        game.players[playersScore[i].player.id].position = i;
        game.players[playersScore[i].player.id].dice1 = {value: 0, lock: false};
        game.players[playersScore[i].player.id].dice2 = {value: 0, lock: false};
        game.players[playersScore[i].player.id].dice3 = {value: 0, lock: false};
        game.players[playersScore[i].player.id].playing = false;
        game.players[playersScore[i].player.id].turnState = 0;
        if(i === 0){
            game.players[playersScore[i].player.id].playing = true;
            if(addSip) game.players[playersScore[i].player.id].points = game.players[playersScore[i].player.id].points + nbSip;
        }
    }
    return game;
}
function getScoreForce(score){
    switch(score){
        case 421:
            return 1500;
        case 111:
            return 1499;
        case 611:
            return 1498;
        case 511:
            return 1497;
        case 411:
            return 1496;
        case 311:
            return 1495;
        case 211:
            return 1494;
        case 222:
            return 1493;
        case 333:
            return 1493;
        case 444:
            return 1493;
        case 555:
            return 1493;
        case 666:
            return 1493;
        case 654:
            return 1492;
        case 543:
            return 1492;
        case 432:
            return 1492;
        case 321:
            return 1492;
        default:
            return score;
    }
}
function getNbSip(score){
    switch (score) {
        case 1500:
            return 8;
        case 1499:
            return 7;
        case 1498:
            return 6;
        case 1497:
            return 5;
        case 1496:
            return 4;
        case 1495:
            return 3;
        case 1494:
            return 2;
        case 1493:
            return 5;
        case 1492:
            return 3;
        default:
            return 1;
    }
}
function createMessage(player, nbSip){
    let rnd = getRandomInt(4);
    let sip = (nbSip === 1) ? "sip" : "sips";
    switch (rnd){
        case 1:
            return player.name + " just won " + nbSip + " " + sip + "!";
        case 2:
            return player.name + " inherited " + nbSip + " " + sip + ". Cheers!";
        case 3:
            return "Are you thirsty " + player.name + "? Drink " + nbSip + " " + sip + "!";
        default:
            return player.name + " is lucky. He can take " + nbSip + " " + sip + "!";
    }
}