'use strict';
let visitorName =prompt('Hello, What is your name?');
//console.log(visitorName);
alert ('You are welcome '+visitorName+ '. Let us start the game! Your are allowed to answer by Yes/No or Y/N only.');
let myAge =prompt(visitorName+' Do you think that I am old?');
//console.log('myAge');
while (myAge.toLocaleLowerCase() !=='yes' && myAge.toLocaleLowerCase() !=='y'&& myAge.toLocaleLowerCase()!=='no'&& myAge.toLocaleLowerCase()!=='n') {
    myAge =prompt(visitorName+' Do you think that I am old?');
   // console.log('myAge');
}

if (myAge.toLocaleLowerCase()=='yes'){
   //console.log('Hahaha, Whatever my age is I will always be young. Wrong answer :p'); 
   alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');
} else if (myAge.toLocaleLowerCase()=='no'){
    //console.log('You are right, I am young. Great!');
    alert ('You are right, I am young. Great!');
} else if (myAge.toLocaleLowerCase()=='y') {
   //console.log('Hahaha, Whatever my age is I will always be young. Wrong answer :p'); 
   alert ('Hahaha, Whatever my age is I will always be young. Wrong answer :p');  
} else if (myAge.toLowerCase()=='n') {
    //console.log('You are right, I am young. Great!');
    alert ('You are right, I am young. Great!');
}
let place =prompt('So, do think that I like nature more than urban places?');
while (place.toLocaleLowerCase() !=='yes' && place.toLocaleLowerCase() !=='y'&& place.toLocaleLowerCase()!=='no'&& place.toLocaleLowerCase()!=='n') {
    place =prompt('So, do think that I like nature more than urban places?')
    // console.log('place');      
}  
if (place.toLocaleLowerCase()=='yes'){
    //console.log('Right! I really love nature and animals.'); 
    alert ('Right! I really love nature and animals.');
 } else if (place.toLocaleLowerCase()=='no'){
     //console.log('Why??! I don't brefer urban cities I like the calming power of Nature.');
     alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
 } else if (place.toLocaleLowerCase()=='y') {
    //console.log('Right! I really love nature and animals.'); 
    alert ('Right! I really love nature and animals.');  
 } else if (place.toLowerCase()=='n') {
     //console.log('Why??! I don't brefer urban cities I like the calming power of Nature.');
     alert ('Why??! I dont brefer urban cities, I like the calming power of Nature.');
 }
 
 let social =prompt('Am I a social person?');
while (social.toLocaleLowerCase() !=='yes' && social.toLocaleLowerCase() !=='y'&& social.toLocaleLowerCase()!=='no'&& social.toLocaleLowerCase()!=='n') {
    social =prompt('Am I a social person?')
    // console.log('social');      
}  
if (social.toLocaleLowerCase()=='yes'){
    //console.log('Actually yessss I am .'); 
    alert ('Actually yessss I am .');
 } else if (social.toLocaleLowerCase()=='no'){
     //console.log('Wrong answer, I like being with people.');
     alert ('Wrong answer, I like being with people.');
 } else if (social.toLocaleLowerCase()=='y') {
    //console.log('Actually yessss I am .'); 
    alert ('Actually yessss I am .');  
 } else if (social.toLowerCase()=='n') {
     //console.log('Wrong answer, I like being with people.');
     alert ('Wrong answer, I like being with people.');
 }

 let swim =prompt('Can I swim?');
 while (swim.toLocaleLowerCase() !=='yes' && swim.toLocaleLowerCase() !=='y'&& swim.toLocaleLowerCase()!=='no'&& swim.toLocaleLowerCase()!=='n') {
     swim =prompt('Can I swim?')
     // console.log('swim');      
 }  
 if (swim.toLocaleLowerCase()=='yes'){
     //console.log('Unfortunutly I cant.'); 
     alert ('Unfortunutly I cant.');
  } else if (swim.toLocaleLowerCase()=='no'){
      //console.log('Tahts right, but I will learn how to swim someday.');
      alert ('Tahts right, but I will learn how to swim someday.');
  } else if (swim.toLocaleLowerCase()=='y') {
     //console.log('Unfortunutly I cant.'); 
     alert ('Unfortunutly I cant.');  
  } else if (swim.toLowerCase()=='n') {
      //console.log('Tahts right, but I will learn how to swim someday.');
      alert ('Tahts right, but I will learn how to swim someday.');
  }

  let arts =prompt('Do I like arts?');
while (arts.toLocaleLowerCase() !=='yes' && arts.toLocaleLowerCase() !=='y'&& arts.toLocaleLowerCase()!=='no'&& arts.toLocaleLowerCase()!=='n') {
    arts =prompt('Do I like arts?')
    // console.log('arts');      
}  
if (arts.toLocaleLowerCase()=='yes'){
    //console.log('Yes Yes Yes! I like all types of arts'); 
    alert ('Yes Yes Yes! I like all types of arts');
 } else if (arts.toLocaleLowerCase()=='no'){
     //console.log('Is there anyone in this world hates arts! Think about it :(');
     alert (visitorName+'!!! Is there anyone in this world hates arts? Think about it :(');
 } else if (arts.toLocaleLowerCase()=='y') {
    //console.log('Yes Yes Yes! I like all types of arts'); 
    alert ('Yes Yes Yes! I like all types of arts');  
 } else if (arts.toLowerCase()=='n') {
     //console.log('Is there anyone in this world hates arts! Think about it :(');
     alert (visitorName+'!! Is there anyone in this world hates arts? Think about it :(');
 }
 