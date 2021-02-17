'use strict';
//Note: code in the comments is my old code and I kept it to compare my progress.
//Visitor greeting
let visitorName =prompt('Hello, What is your name?');
//console.log(visitorName);
//alert ('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
const userName= function (user) {
console.log('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.' );
return ('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
}
alert('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
//First question:
let myAge = prompt(visitorName+' Do you think that I am old?');
//console.log('myAge');
while (myAge.toLocaleLowerCase() !=='yes' && myAge.toLocaleLowerCase() !=='y'&& myAge.toLocaleLowerCase() !=='no'&& myAge.toLocaleLowerCase() !=='n') {
    myAge =prompt()(visitorName+' Do you think that I am old?');
   // console.log('myAge');
}
if (myAge.toLocaleLowerCase()=='yes'||myAge.toLocaleLowerCase()=='y') {
    alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');
}
else if (myAge.toLocaleLowerCase()=='no'||myAge.toLocaleLowerCase()=='n') {
    alert ('You are right, I am young. Great!');
}

//Second question:
let place =prompt('So, do think that I like nature more than urban places?');
while (place.toLocaleLowerCase() !=='yes' && place.toLocaleLowerCase() !=='y'&& place.toLocaleLowerCase()!=='no'&& place.toLocaleLowerCase()!=='n') {
    place =prompt('So, do think that I like nature more than urban places?')
    // console.log('place');      
}
if (place.toLocaleLowerCase()=='yes'||place.toLocaleLowerCase()=='y') {
    alert ('Right! I really love nature and animals.');
}  else if (place.toLocaleLowerCase()=='no'||place.toLocaleLowerCase()=='y') {
    alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
}

 //Third question:
 let social =prompt('Am I a social person?');
while (social.toLocaleLowerCase() !=='yes' && social.toLocaleLowerCase() !=='y'&& social.toLocaleLowerCase()!=='no'&& social.toLocaleLowerCase()!=='n') {
    social =prompt('Am I a social person?')
    // console.log('social');      
} 
if (social.toLocaleLowerCase()=='yes'||social.toLocaleLowerCase()=='y') {
    alert ('Actually yessss I am .');
} else if (social.toLocaleLowerCase()=='no'||social.toLocaleLowerCase()=='y') {
    alert ('Wrong answer, I like being with people.');
} 

//Fourth question:
 let swim =prompt('Can I swim?');
 while (swim.toLocaleLowerCase() !=='yes' && swim.toLocaleLowerCase() !=='y'&& swim.toLocaleLowerCase()!=='no'&& swim.toLocaleLowerCase()!=='n') {
     swim =prompt('Can I swim?')
     // console.log('swim');      
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
    // console.log('arts');      
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
    // console.log('Guess a number from 0 to 9?'); 
    if (GuessNum>7) {
        alert ('too high');
    } else if (GuessNum<7) {
        alert ('too low');
    }  
   GuessNum =Number(prompt('Guess a number from 0 to 9?'));
i++;
}
if (GuessNum==7) {
  // console.log('Great, it is the number!');
    alert('Great, it is the number!');
}  else { if(i===3){
    //console.log('Out of trials. The right answer is 7!');
    alert('Out of trials. The right answer is 7!');
}

}
//Seventh question, this is a 6 trials question.
let y=0;
let arrMe=['Saif','Salah','Khair','Ezz'];
 let GuessBro =prompt('Guess a name of one of my brothers . Note: start the name with a capital letter.');
//console.log(arrMe);
 while (GuessBro!==arrMe[0] &&GuessBro!==arrMe[1] &&GuessBro!==arrMe[2] &&GuessBro!==arrMe[3] && y<5) {
    // console.log('Guess a name of one of my brothers'); 
   alert ('No one of my brothers is called : '+ GuessBro+ ' Try again.'); 
   GuessBro =prompt('Guess a name of one of my brothers. Note: start the name with a capital letter.');
 y++;
}
if (GuessBro==arrMe[0] ||GuessBro==arrMe[1] ||GuessBro==arrMe[2] ||GuessBro==arrMe[3] ) {
    //console.log('OMG! this is absolutely right. My brothers names are : '+ arrMe);
    alert('OMG! this is absolutely right. My brothers names are : '+ arrMe);
}else { if (y===5) {
    //console.log('Out of trials. My brothers names are : '+ arrMe);
        alert('Out of trials. My brothers names are : '+ arrMe);
 }
}
//This is how to give the user a score for right answers out of 7  
let score=0;
if (myAge.toLocaleLowerCase()=='no'||myAge.toLocaleLowerCase()=='n') {
    score++;
    //console.log(score);
} 
if (place.toLocaleLowerCase()=='yes'||place.toLocaleLowerCase()=='y') {
    score++;
    //console.log(score);
}
if (social.toLocaleLowerCase()=='yes'||social.toLocaleLowerCase()=='y') {
   score++; 
   //console.log(score);
}
if (swim.toLocaleLowerCase()=='no'||swim.toLocaleLowerCase()=='n') {
    score++;
    //console.log(score);
}
if (arts.toLocaleLowerCase()=='yes'||arts.toLocaleLowerCase()=='y') {
    score++;
    //console.log(score);
}
if (GuessNum=='7') {
  score++;  
  //console.log(score);
}
if (GuessBro==arrMe[0] ||GuessBro==arrMe[1] ||GuessBro==arrMe[2] ||GuessBro==arrMe[3] ) {
  score++; 
  //console.log(score); 
}
//console.log('You have answered '+score+' correct answeres out of 7.');
alert('You have answered '+score+' correct answeres out of 7.');
alert('Thank you '+visitorName+' Hope you enjoed the game.');

// if (myAge.toLocaleLowerCase()=='yes'){
//    //console.log('Hahaha, Whatever my age is I will always be young. Wrong answer :p'); 
//    alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');
// } else if (myAge.toLocaleLowerCase()=='no'){
//     //console.log('You are right, I am young. Great!');
//     alert ('You are right, I am young. Great!');
// } else if (myAge.toLocaleLowerCase()=='y') {
//    //console.log('Hahaha, Whatever my age is I will always be young. Wrong answer :p'); 
//    alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');  
// } else if (myAge.toLowerCase()=='n') {
//     //console.log('You are right, I am young. Great!');
   // alert ('You are right, I am young. Great!');
//}
// if (place.toLocaleLowerCase()=='yes'){
//     //console.log('Right! I really love nature and animals.'); 
//     alert ('Right! I really love nature and animals.');
//  } else if (place.toLocaleLowerCase()=='no'){
//      //console.log('Why??! I don't brefer urban cities I like the calming power of Nature.');
//      alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
//  } else if (place.toLocaleLowerCase()=='y') {
//     //console.log('Right! I really love nature and animals.'); 
//     alert ('Right! I really love nature and animals.');  
//  } else if (place.toLowerCase()=='n') {
//      //console.log('Why??! I don't brefer urban cities I like the calming power of Nature.');
//      alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
//  }
// if (social.toLocaleLowerCase()=='yes'){
//     //console.log('Actually yessss I am .'); 
//     alert ('Actually yessss I am .');
//  } else if (social.toLocaleLowerCase()=='no'){
//      //console.log('Wrong answer, I like being with people.');
//      alert ('Wrong answer, I like being with people.');
//  } else if (social.toLocaleLowerCase()=='y') {
//     //console.log('Actually yessss I am .'); 
//     alert ('Actually yessss I am .');  
//  } else if (social.toLowerCase()=='n') {
//      //console.log('Wrong answer, I like being with people.');
//      alert ('Wrong answer, I like being with people.');
//  }
//  if (swim.toLocaleLowerCase()=='yes'){
//      //console.log('Unfortunutly I cant.'); 
//      alert ('Unfortunutly I cant.');
//   } else if (swim.toLocaleLowerCase()=='no'){
//       //console.log('Thats right, but I will learn how to swim someday.');
//       alert ('Thats right, but I will learn how to swim someday.');
//   } else if (swim.toLocaleLowerCase()=='y') {
//      //console.log('Unfortunutly I cant.'); 
//      alert ('Unfortunutly I cant.');  
//   } else if (swim.toLowerCase()=='n') {
//       //console.log('Thats right, but I will learn how to swim someday.');
//       alert ('Thats right, but I will learn how to swim someday.');
//   }
// if (arts.toLocaleLowerCase()=='yes'){
//     //console.log('Yes Yes Yes! I like all types of arts'); 
//     alert ('Yes Yes Yes! I like all types of arts');
//  } else if (arts.toLocaleLowerCase()=='no'){
//      //console.log('Is there anyone in this world hates arts! Think about it :(');
//      alert (visitorName+'!!! Is there anyone in this world hates arts? Think about it :(');
//  } else if (arts.toLocaleLowerCase()=='y') {
//     //console.log('Yes Yes Yes! I like all types of arts'); 
//     alert ('Yes Yes Yes! I like all types of arts');  
//  } else if (arts.toLowerCase()=='n') {
//      //console.log('Is there anyone in this world hates arts! Think about it :(');
//      alert (visitorName+'!! Is there anyone in this world hates arts? Think about it :(');
//  }