/* var game = document.getElementById('game'); */
var block = document.getElementsByClassName('block');
var currentPlayer = document.getElementById('currPlyr');

var stat = {
    "x": 0,
    "o": 0,
    "d": 0
}
var player = "x";
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


 for(var i = 1; i<=9; i++){
    document.getElementById('game').innerHTML+="<div class='block' pos=" + i +"></div>";
} 
for (var i=0;i<block.length;i++){
    block[i].addEventListener('click', cellClick, false);
}

function cellClick(){
    var data = [];

    if(!this.innerHTML){
        this.innerHTML = player;
    }else{
        alert("Ячейка занята");
        return;
    }

    for(var i in block){
        if(block[i].innerHTML == player){
            data.push(parseInt(block[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)){
        stat[player]+=1;
        resrart("Выиграл: " + player);
    }else{
        var draw = true;
        for(var i in block){
            if(block[i].innerHTML == '') draw =false;
        }
        if(draw){
            stat.d+=1;
            resrart("Ничья");
        }
    }     
    
    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();

}

function checkWin(data){
    for(var i in winIndex){
        var win = true;
        for(var j in winIndex[i]){
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1){
                win = false
            }            
        }

        if(win) return true;
    }
    return false;
}

function resrart(text){
    alert(text);
    for(var i=0; i<block.length;i++){
        block[i].innerHTML='';
    }
    updateStat();
}

function updateStat(){
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}
