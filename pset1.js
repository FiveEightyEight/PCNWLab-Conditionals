function genRndmNumRange( min, max ) {
    const random = min + Math.floor( Math.random() * (max-min+1) );
    return random;
}

console.log(genRndmNumRange(0, 9));

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'
*/

const generateTrafficLight = () => { 
    let rndm = (Math.floor(Math.random()*3))+1;
    if (rndm === 1){
        return 'red';
    } else if (rndm === 2){
        return 'green';
    } else if (rndm === 3){
        return 'blue';
    }
};

console.log(generateTrafficLight());

/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

const generateRandomPhoneNumber = (areaCode = 'none') => {
    let pNum = `1-`;
    if (typeof areaCode === 'number'){
        pNum += areaCode;
        for(let i = 4; i < 11; i++){
            if(i == 4 || i == 7) {
                pNum += `-`;
            }
            pNum += Math.floor( Math.random() * 10 );
        }
        return pNum;
    } else {
        for(let i = 1; i < 11; i++){
            if(i == 4 || i == 7) {
                pNum += `-`;
            }
            pNum += Math.floor( Math.random() * 10 );
        }
        return pNum;
    }
}

console.log(generateRandomPhoneNumber());

/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/

const generateRandomRGB = () => {
    let set1 = Math.floor(Math.random()*256)
    let set2 = Math.floor(Math.random()*256)
    let set3 = Math.floor(Math.random()*256)
    return `rgb(${set1}, ${set2}, ${set3})`;
}

console.log(generateRandomRGB());

const generateRandomRGB$ = () => `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

console.log(generateRandomRGB$());

/*
    @func generateLottoTicket
    @returns {string}
    @desc - generates a random lotto ticket with:
            A random number 0-9
            A random number 0-15
            A random number 0-30
            
            Present it as such: L [0-9] [0-15]-[0-30]
    
    @example generateLottoTicket(); // L 9 11-28
*/

const generateLottoTicket = () => `L ${Math.floor(Math.random()*10)} ${Math.floor(Math.random()*16)}-${Math.floor(Math.random()*31)}`;

console.log(generateLottoTicket());

/*
    @func generatePhoneNumberWithAreaCode
    @param {number} areaCode
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
            IF `areaCode` is provided, it will use that area code
            and NOT generate one
            
    @example generatePhoneNumberWithAreaCode(); // "1-718-786-2825"
    @example generatePhoneNumberWithAreaCode( 646 ); // "1-646-786-2825"
*/


const generatePhoneNumberWithAreaCode = (areaCode) => {
    if(typeof areaCode === 'number'){
        return generateRandomPhoneNumber(areaCode);
    } else {
        return generateRandomPhoneNumber();
    }
}

console.log( generatePhoneNumberWithAreaCode() );
console.log( generatePhoneNumberWithAreaCode( 718 ) );
console.log( generatePhoneNumberWithAreaCode( 646 ) );
console.log('***************************')
console.log(generateRandomPhoneNumber( 718 ) );
console.log(generateRandomPhoneNumber( 646 ) );




/*
    @func generateTicketWithLetters
    @returns {string}
    @desc - geneartes a random lotto ticket with:
            A random number 0-9
            A random LOWERCASED LETTER a-z
            A random UPPERCASED LETTER A-Z
            A random number 0-30
            
            Present it as such: L [a-z] [A-Z]-[0-30]
            HINT: look up `String.fromCharCode()` on the Google
            
        @example generateLottoTicket(); // L g M-28
*/
// A: 65 | Z: 90

const generateTicketWithLetters = () => `L ${genRndmNumRange(0, 10)} ${(String.fromCharCode(genRndmNumRange(65, 90))).toLowerCase()} ${String.fromCharCode(genRndmNumRange(65, 90))}-${genRndmNumRange(0, 30)}`

console.log(generateTicketWithLetters());
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/

/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above

    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/

/*
    @func calculateGrade
    @param {number} grade
    @returns {string}
    @desc - given a numerical grade,
            determine the letter grade

    @example calculateGrade( 90 ); // A
    @example calculateGrade( 80 ); // B
    @example calculateGrade( 70 ); // C
    @example calculateGrade( 60 ); // D
    @example calculateGrade( 54 ); // F
    @example calculateGrade( -10 ); // Error
    @example calculateGrade( 10000 ); // Error
    @example calculateGrade( "lol skool sucks" ); // Error
    
*/

function calculateGrade( grade ) {
    // Write your codes below here
    /*
        assume that grade is the value the user input
        IF grade is between [100, 95]
            UPDATE grade = A (question: what kind of variable should A be?)
        if grade is between [95, 85]
            UPDATE grade = B
        if grade is between [85, 75]
            UPDATE grade = C
        if grade is between [75, 65]
            UPDATE grade = D
        if grade is between [65, 0]
            UPDATE grade = F
    */
    
    if ( grade > 90 ) {
        return "A";
    }
   return "F"; // you may choose not to use this
} 
