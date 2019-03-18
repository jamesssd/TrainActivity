
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
    apiKey: "AIzaSyD68BR2kGbbAISPGwTxEl0PbCUswOPMTfs",
    authDomain: "trainschedule-9abdd.firebaseapp.com",
    databaseURL: "https://trainschedule-9abdd.firebaseio.com",
    projectId: "trainschedule-9abdd",
    storageBucket: "trainschedule-9abdd.appspot.com",
    messagingSenderId: "463843877657"
  };
  firebase.initializeApp(config);

let database = firebase.database();

$("#add-train-btn").click(function(event){
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

    $('#train-name-input').val('');
    $('#destination-input').val('');
    $('#tFirst').val('');
    $('#tArrival').val('');

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);
  
    $("#train-table > tbody").append("<tr><td>" + train-name-input + "</tr><td>" + destination-input + "</td><td>" + frequency-input + "</td><td>" + arrival-input + "</td><td>");

})