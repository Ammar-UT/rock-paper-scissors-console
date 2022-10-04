function print(text){
    console.log(text);
}

const getUserInput  = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
        return userInput;
    }else{
        console.log("Error , Please type: rock , paper or scissors.");
    }

   
}

// console.log(getUserInput('roCk')) // user choice

const getComputerChoice= () =>  {
   const randomNumber = Math.floor(Math.random()* 3);
   switch(randomNumber){
    case 0 :
        return 'rock';
    case 1 : 
        return 'paper';
    case 2:
        return 'scissors';         
   }
}

print(getComputerChoice());