//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {
    name: 'Paige Willey',
    age: '26'
  }

  alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band: 'The Killers',
    food: 'Sweet Potato',
    person: 'Ship',
    book: 'Jane Eyre',
    movie: 'Afterlife',
    holiday: 'Easter'
  }


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

 favoriteThings.car = 'Aston Martin';
 favoriteThings.brand = 'Buffer';


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

 favoriteThings.food = 'Lettuce';
 favoriteThings.book = '50 Shades of Gray';





//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = 'firstPocket';
backPack[item] = 'chapstick';
backPack.color = 'blue';



//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

 var alsoMe = {
    name: 'Paige',
    age: 26,
    height: '5\'1\"',
    gender: 'female',
    married: true,
    eyeColor: 'hazel',
    hairColor: 'brown'

  } 

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  for (var p in alsoMe) {
    alert(alsoMe[p]);
  }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    pillsburyDoughBoy: '3\:21',
    helicopterPilot: '2\:45',
    tallGrass: '0\:45',
    sweater: '4\:12',
    doubleTrouble: '3\:02'
  }

//Now, loop through your album object alerting every song title individually.

  for(var propName in album) {
    alert(propName);
  }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

 var states = {
  alabama: 300,
  alaska: 200,
  arizona: 100,
  arkansas: 50,
  california: 320000
 }

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  for(var propName in states) {
    if (states[propName] > 30000) {
      alert(propName);
    }
  }




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
  for(var p in user1) {
    if (!user1[p]) {
      delete user1[p];
    }
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user1.name = 'Paige Willey';
  user1.username = 'paigecwilley';
  user1.pwHash = 'Usioefeoid';




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

 user2.name = 'Tyler S. McGinnis';
 user2.email = 'tyler.mcginnis@devmounta.in';


//Now call the sayName method that's on the user object which will alert the users email

user2.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection.alertHello = function() {
    alert('hello');
  }

  methodCollection.logHello = function() {
    console.log('hello');
  }

//Now call your alertHello and logHello methods.

  methodCollection.alertHello();
  methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

 function MakePerson(name, birthday, ssn) {
  var obj = {};
  obj.name = name;
  obj.birthday = birthday;
  obj.ssn = ssn;
  return obj;
 }


//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  function MakeCard(number, expiryDate) {
    var creditCard = {};
    credit.number = number;
    credit.expiryDate = expiryDate;
    return credit;
  }
  // returning object within a function
  // creating object within a function
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

 function bindCard(person, creditcard){
   for(var prop in creditcard) { 
    if (person.hasOwnProperty(prop) !== true) {
        person[prop] = creditcard[prop];
     }
   }
   return person;
 }

var x = MakePerson('Ship', 'Jan', '1234');
var y = MakeCard('123456789', '0202');
var z = bindCard(x, y);


//merging two objects into a new object
//take properties of one object and a second object and add to another object
// to get properties from one object and add to another, need a for-in loop

