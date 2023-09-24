var turn='x';
let title=document.querySelector('.title');
let squres=[]

function but(){
    
    setTimeout(function(){location.reload()},50)
    }
function whoWin(n1,n2,n3){
    title.innerHTML=`${squres[n1]} winner`
document.getElementById('item'+n1 ).style.background='#000'
document.getElementById('item'+n2).style.background='#000'
document.getElementById('item'+n3).style.background='#000'
setInterval(function(){
    title.innerHTML+='.'
},1000)
setTimeout(function(){location.reload()},3000)
}



function winner(){
for(let i=1;i<10;i++)
{
squres[i]=document.getElementById('item'+i).innerHTML
}
if(squres[1]==squres[2] &&  squres[2]==squres[3] && squres[1]!=''){
    whoWin(1,2,3)

}

else if(squres[4]==squres[5] &&  squres[5]==squres[6] && squres[4]!=''){

    whoWin(4,5,6)

}

else if(squres[7]==squres[8] &&  squres[8]==squres[9] && squres[7]!=''){

    whoWin(7,8,9)

}
else if(squres[1]==squres[4] &&  squres[4]==squres[7] && squres[7]!=''){
    whoWin(1,4,7)


}
else if(squres[2]==squres[5] &&  squres[5]==squres[8] && squres[8]!=''){
    whoWin(2,5,8)


}
else if(squres[3]==squres[6] &&  squres[6]==squres[9] && squres[9]!=''){

    whoWin(3,6,9)

}
else if(squres[1]==squres[5] &&  squres[5]==squres[9] && squres[9]!=''){

    whoWin(1,5,9)

}
else if(squres[3]==squres[5] &&  squres[5]==squres[7] && squres[7]!=''){

    whoWin(3,5,7)

}
// else{
//     setInterval(function(){
//         title.innerHTML+='.'
//     },1000)
//     setTimeout(function(){location.reload()},4000)
// }
}





function game(id){
let element=document.getElementById(id)
if(turn ==='x' && element.innerHTML=='')
{

    element.innerHTML='X'
    turn='o'
    title.innerHTML='O'
}
else if(turn=='o' && element.innerHTML==''){
element.innerHTML='O'
turn='x'
title.innerHTML='X'
}
winner()
}


