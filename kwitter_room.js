
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA0hdhgZP9jrt-JR6X4UOsEm1kMA_Fl36g",
    authDomain: "project1-b050e.firebaseapp.com",
    databaseURL: "https://project1-b050e-default-rtdb.firebaseio.com",
    projectId: "project1-b050e",
    storageBucket: "project1-b050e.appspot.com",
    messagingSenderId: "191805466663",
    appId: "1:191805466663:web:0b9089f6a2da975b420602",
    measurementId: "G-TEWB5MKMML"
  };
    
    // Initialize Firebase
    firebase.intializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;
   
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";


}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row="<div class'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();



function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}



function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
     widows.location = "kwitter.html";

}