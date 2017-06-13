/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
*/


function handValue (hand) {
  let value = 0;
  let aceCount = 0;

  let cardValue = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 10,
    "Q": 10,
    "K": 10,
    "A": 11
  }

  for (var i = 0; i < hand.length; i++) {
    if(hand[i] === "A"){
      aceCount++;
    }
    value+=cardValue[hand[i]];
  }
  
  while(aceCount && value > 21){
    value-=10;
    aceCount--;
  }
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
