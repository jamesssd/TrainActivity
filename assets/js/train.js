// API Key
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
//===========================

//Global Variables
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
// button listner 
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
    
    $('#train-name-input').val('');
    $('#destination-input').val('');
    $('#tFirst').val('');
    $('#tArrival').val('');

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);
  
    let trainObj = {
        name, destination, frequency, nextTrain, minutesRemaining,
    };

    database.ref().push(trainObj);
});

database.ref().on('value', function(snapshot){
    let train = snapshot.val();

    for(const key in train){
        let {name, dest, frequency, nextTrain, minutesRemaining} = train[i];
        let tableRow = $('<tr>');

        let tdName = $("<tb>").text(name);
        let tdDest = $("<tb>").text(rate);
        let tdFreq = $("<tb>").text(date);
        let tdNextTrain = $("<tb>").text(role);
        let minutesRemaining = moment(date).diff(moment)
        tableRow.append(tdName, tdDest, tdFreq, tdNextTrain, tdminutesRemaining);

        $('tdbody.').append(tableRow);

    }
})
    