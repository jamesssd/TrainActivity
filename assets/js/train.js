
let tFrequency = 3;
let firstTime = "04:00";


let firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

let currentTime = moment();
console.log('CURRENT TIME: ' + moment(currentTime).format("HH:mm"));

let diffTime = currentTime.diff(moment(firstTimeConverted), 'minutes');
console.log("DIFFERENCE IN TIME: " + diffTime);

let tRemainder = diffTime % tFrequency;
console.log(tRemainder);

let tETA = tFrequency - tRemainder;
console.log('MINUTES TILL TRAIN: ' + tETA);

let nextTrain = moment().add(tETA, 'minutes');
console.log("Arrival Time: " + moment(nextTrain).format('hh:mm'));

let config = {
    apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
    authDomain: "time-sheet-55009.firebaseapp.com",
    databaseURL: "https://time-sheet-55009.firebaseio.com",
    storageBucket: "time-sheet-55009.appspot.com"
};
  
firebase.initializeApp(config);

var database = firebase.database();

$("#add-employee-btn").click(function(event){
    event.preventDefault();

    let tName = $('#train-name-input').val().trim();
    let tDestination = $('#destination-input').val().trim();
    let tFirst = moment($('#start-input').val().trim(), "HH:mm").format("X");
    let tArrival = $('arrival-input').val().trim();

    let newTrain = {
        name: tName,
        destination: tDestination,
        firstTrainTime: tFirst,
        frequency: tArrival
    };
    
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);
  

})