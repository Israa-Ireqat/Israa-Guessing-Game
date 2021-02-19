'use strict';
//Visitor greeting
let visitorName =prompt('Hello, What is your name?');
const userName= function (user) {
console.log('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.' );
return ('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
}
alert('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
//First question:
let myAge = prompt(visitorName+' Do you think that I am old?');
while (myAge.toLocaleLowerCase() !=='yes' && myAge.toLocaleLowerCase() !=='y'&& myAge.toLocaleLowerCase() !=='no'&& myAge.toLocaleLowerCase() !=='n') {
    myAge =prompt(visitorName+' Do you think that I am old?');
}
if (myAge.toLocaleLowerCase()=='yes'||myAge.toLocaleLowerCase()=='y') {
    alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');
}
else if (myAge.toLocaleLowerCase()=='no'||myAge.toLocaleLowerCase()=='n') {
    alert ('You are right, I am young. Great!');
}

//Second question:
let place =prompt('So, do think that I like nature more than urban places?');
while (place.toLocaleLowerCase() !=='yes' && place.toLocaleLowerCase() !=='y'&& place.toLocaleLowerCase() !=='no'&& place.toLocaleLowerCase() !=='n') {
    place =prompt('So, do think that I like nature more than urban places?')      
}
if (place.toLocaleLowerCase()=='yes'||place.toLocaleLowerCase()=='y') {
    alert ('Right! I really love nature and animals.');
} 
 else if (place.toLocaleLowerCase()=='no'||place.toLocaleLowerCase()=='n') {
    alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
}

 //Third question:
 let social =prompt('Am I a social person?');
while (social.toLocaleLowerCase()!=='yes' && social.toLocaleLowerCase()!=='y'&& social.toLocaleLowerCase()!=='no'&& social.toLocaleLowerCase()!=='n') {
    social =prompt('Am I a social person?')      
} 
if (social.toLocaleLowerCase()=='yes'||social.toLocaleLowerCase()=='y') {
    alert ('Actually yessss I am .');
} else if (social.toLocaleLowerCase()=='no'||social.toLocaleLowerCase()=='n') {
    alert ('Wrong answer, I like being with people.');
} 

//Fourth question:
 let swim =prompt('Can I swim?');
 while (swim.toLocaleLowerCase() !=='yes' && swim.toLocaleLowerCase() !=='y'&& swim.toLocaleLowerCase()!=='no'&& swim.toLocaleLowerCase()!=='n') {
     swim =prompt('Can I swim?')     
 } 
 if (swim.toLocaleLowerCase()=='yes'||swim.toLocaleLowerCase()=='y') {
    alert ('Unfortunutly I cant.');
 } else if (swim.toLocaleLowerCase()=='no'||swim.toLowerCase()=='n') {
    alert ('Thats right, but I will learn how to swim someday.');
 }

//Fifth question:
  let arts =prompt('Do I like arts?');
while (arts.toLocaleLowerCase() !=='yes' && arts.toLocaleLowerCase() !=='y'&& arts.toLocaleLowerCase()!=='no'&& arts.toLocaleLowerCase()!=='n') {
    arts =prompt('Do I like arts?')   
}
if (arts.toLocaleLowerCase()=='yes'||arts.toLocaleLowerCase()=='y') {
    alert ('Yes Yes Yes! I like all types of arts');
} else if (arts.toLocaleLowerCase()=='no'||arts.toLowerCase()=='n') {
    alert (visitorName+'!!! Is there anyone in this world hates arts? Think about it :('); 
}
  
//Sixth question, this is 4 trials question.
 let i=0;
 let GuessNum =Number(prompt('Guess a number from 0 to 9?'));

 while (GuessNum!==7 && i<3) {
    if (GuessNum>7) {
        alert ('too high');
    } else if (GuessNum<7) {
        alert ('too low');
    }  
   GuessNum =Number(prompt('Guess a number from 0 to 9?'));
i++;
}
if (GuessNum==7) {
    alert('Great, it is the number!');
}  else { if(i===3){
    alert('Out of trials. The right answer is 7!');
}

}
//Seventh question, this is a 6 trials question.
let y=0;
let arrMe=['Saif','Salah','Khair','Ezz'];
 let GuessBro =prompt('Guess a name of one of my brothers . Note: start the name with a capital letter.');
 while (GuessBro!==arrMe[0] &&GuessBro!==arrMe[1] &&GuessBro!==arrMe[2] &&GuessBro!==arrMe[3] && y<5) {
   alert ('No one of my brothers is called : '+ GuessBro+ ' Try again.'); 
   GuessBro =prompt('Guess a name of one of my brothers. Note: start the name with a capital letter.');
 y++;
}
if (GuessBro==arrMe[0] ||GuessBro==arrMe[1] ||GuessBro==arrMe[2] ||GuessBro==arrMe[3] ) {
    alert('OMG! this is absolutely right. My brothers names are : '+ arrMe);
}else { if (y===5) {
        alert('Out of trials. My brothers names are : '+ arrMe);
 }
}
//This is how to give the user a score for right answers out of 7  
let score=0;
if (myAge.toLocaleLowerCase()=='no'||myAge.toLocaleLowerCase()=='n') {
    score++;
} 
if (place.toLocaleLowerCase()=='yes'||place.toLocaleLowerCase()=='y') {
    score++;
}
if (social.toLocaleLowerCase()=='yes'||social.toLocaleLowerCase()=='y') {
   score++; 
}
if (swim.toLocaleLowerCase()=='no'||swim.toLocaleLowerCase()=='n') {
    score++;
}
if (arts.toLocaleLowerCase()=='yes'||arts.toLocaleLowerCase()=='y') {
    score++;
}
if (GuessNum=='7') {
  score++;  
}
if (GuessBro==arrMe[0] ||GuessBro==arrMe[1] ||GuessBro==arrMe[2] ||GuessBro==arrMe[3] ) {
  score++; 
}
alert('You have answered '+score+' correct answeres out of 7.');
alert('Thank you '+visitorName+' Hope you enjoed the game.');