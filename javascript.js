var playing =false;
var score=0;
var counter=60;
var tim;
var timeout;
var ans;
document.getElementById("timeremaining").style.visibility="hidden";
document.getElementById("correct").style.visibility="hidden";
document.getElementById("wrong").style.visibility="hidden";
document.getElementById("gameOver").style.visibility="hidden";
//if we click on the start/reset
    document.getElementById("startreset").onclick =function(){
        //if we areplaying
        if(playing==true){
            //reload page
            location.reload();
            counter=60;
            //show countdown box
            tim=setInterval(timer,1000);
            document.getElementById("gameOver").style.visibility="hidden";
        }
        else{
            document.getElementById("startreset").innerHTML="Reset Game"
            //show countdown box
            document.getElementById("timeremaining").style.visibility="visible";
            counter=60;
            tim=setInterval(timer,1000);
            playing=true;
            //set score to zero
            score=0;
            document.getElementById("scorevalue").innerHTML=""+score;
            question();
        }
    }
function timer(){
    counter=counter-1;
    if(counter==0){
        clearInterval(tim);
        timeout=true;
        document.getElementById("gameOver").style.visibility="visible";
        document.getElementById("gameOver").innerHTML="<p>Game Over</p><p>Your Score is "+score+"</p>";
        document.getElementById("timeremaining").style.visibility="hidden";
    }
    document.getElementById("time").innerHTML=""+counter;
}
function question(){
    var x = Math.floor( Math.random()*10);
    var y = Math.floor( Math.random()*10);
    document.getElementById("question").innerHTML = '' + x + 'x' + y;
    ans=Math.round(Math.random()*4);
    document.getElementById("box"+ans).innerHTML=""+x*y;
    for(var i=1;i<=4;i++){
        if(i!=ans){
            document.getElementById("box"+i).innerHTML=""+Math.floor( Math.random()*100);
        }
    }
}
//document.getElementById("box"+1).onclick=check(1);
//document.getElementById("box"+2).onclick=check(2);
//document.getElementById("box"+3).onclick=check(3);
//document.getElementById("box"+4).onclick=check(4);
function check(x){
    if(x==ans){
        score++;
        question();
        document.getElementById("correct").style.visibility="visible";
        document.getElementById("wrong").style.visibility="hidden";
        document.getElementById("scorevalue").innerHTML=""+score;
    }
    else{
        document.getElementById("wrong").style.visibility="visible";
        document.getElementById("correct").style.visibility="hidden";
    }
}
    //if we are not playing
        
        
        //reduce time by 1sec in loops
            //timeleft?
                //yes->continue
                //no->gameover
        //chnage button to reset
        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec