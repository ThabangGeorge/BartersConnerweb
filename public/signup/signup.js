// // Initialize Firebase
var config = {
    apiKey: "AIzaSyBMuFikfQJQXn3TrcgtTPZ2s6HCYlnGxYE",
    authDomain: "bartersconnerwebapp.firebaseapp.com",
    databaseURL: "https://bartersconnerwebapp.firebaseio.com",
    projectId: "bartersconnerwebapp",
    storageBucket: "bartersconnerwebapp.appspot.com",
    messagingSenderId: "866165379228"
  };
firebase.initializeApp(config);
// // reference
// var db = firebase.database().ref('users');
// // inster data into db
// db.push(
// {
//     id: 1,
//     name: "meee",
//     email: "something@gmail.com",
// });

// signup
function SignUp(){
    // Get values from UI
    var email = $("#emailSignup").val(); 
    var password = $("#passwordSignup").val(); 
    // Validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');//TODO
        return;
    }
    else if(password.length < 4)
    {
        alert('Please enter a password with a minimum of 5 characters');//TODO
        return;
    }
    else
    {
        console.log(email + password);
        // Sign up
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
            // Success
            alert("Successfully signed up")//TODO
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             console.log(errorMessage);//TODO
             alert(errorMessage);
         });
    }
}

// signin
function SignIn(){
    // Get values from UI
    var email = $("#emailSignin").val(); 
    var password = $("#passwordSignin").val(); 
    // Validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');//TODO
        return;
    }
    else if(password.length < 4)
    {
        alert('Please enter a password with a minimum of 5 characters');//TODO
        return;
    }
    else
    {
        console.log(email + password);
        // Sign up
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
            // Success
            alert("Successfully signed in")//TODO
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             console.log(errorMessage);//TODO
             alert(errorMessage);
         });
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
