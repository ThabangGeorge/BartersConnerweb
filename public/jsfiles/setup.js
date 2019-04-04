// Step1 Initialize Firebase
var config = {
    apiKey: "AIzaSyBMuFikfQJQXn3TrcgtTPZ2s6HCYlnGxYE",
    authDomain: "bartersconnerwebapp.firebaseapp.com",
    databaseURL: "https://bartersconnerwebapp.firebaseio.com",
    projectId: "bartersconnerwebapp",
    storageBucket: "bartersconnerwebapp.appspot.com",
    messagingSenderId: "866165379228"
  };
  firebase.initializeApp(config);
 
  //TEST CODE
 //console.log(firebase);


 //Global Declaration for the user id generated from the Register
 var d = new Date();
 var t = d.getTime();
 var counter = t;

 //event listerner
 document.getElementById("form").addEventListener("submit",(e)=>{
     var email = document.getElementById ("Email").value;
     var pass = document.getElementById ("Pass").value;
    
     e.preventDefault();
  
   //createtask(email,pass);
    form.reset();
  
    });

//Saving Data into the data base
    

    function createtask(emailname,passn){
        counter+=1;
        var email = document.getElementById ("Email").value;
        var pass = document.getElementById ("Pass").value;
           
        //console.log(counter);
     // Assigning the extracted variable to the data base variables
        var usertextbook ={
            email :emailname,
            id :counter,
            pass :passn
        
       
        };
   console.log(email+pass);
         
    //registration need if statement
    
    const auth =firebase.auth();
    auth.createUserWithEmailAndPassword(email,pass).catch(function(error){
        console.log('registration error',error);
        alert(error.message);
        console.log(emailname+passn);
    
        

        if (error.code ==='auth/email-already-in-use'){
            var credential =firebase.auth.emailAuthProvider.credential(email,pass);


            app.signInwithGoogle().than(function(){
          
                firebase.auth().currentUser.link(credential)
                .than(function(user){
                    console.log('Account linking success',user);
                    alert('registed')
                    window.location.href = "M.html";
                }, function (error){
                    console.log('Account linking error',error);

                });
                
            })
        }
    })
   
    
   /*
    //my short code
        console.log(emailname+passn);

        const auth =firebase.auth();
        auth.createUserWithEmailAndPassword(email,pass);
   */
  
   


 }





function loguserGoogle(){

    var provider = new firebase.auth.GoogleAuthProvider();
     /*provider.addscope('profile');
     provider.addscope('email');
     provider.addscope('profile');
     return firebase.auth().signInWithPopup(provider)
    
    
    
     */firebase.auth().signInWithPopup(provider).then( function(result){
        const user= result.user;
        window.location.href = "M.html";
       console.log("success.. Google Account linked")
        // alert("hello ${user.displayName}")
        document.write( "hello ${user.displayName}");
        console.log(user);
        console.log(result);
    })
    
    .catch(function(err){
        console.log(err)
        console.log("faild to do")
    });  
}




function loginp(){
    var nemail = document.getElementById ("Email").value;
    var npass = document.getElementById ("Pass").value;
    
    if (nemail && npass !="")
            {
            
            if (nemail && npass !="")
                {
                    
                    /* //my code
                    const auth =firebase.auth();
                    auth.signInWithEmailAndPassword(nemail,npass);
                    alert("login Successful" + nemail +npass);
                      window.location.href = "M.html";

                 */
                    
                    //signin user with email and pass
                    firebase.auth().signInWithEmailAndPassword(nemail,npass).catch(function(error){
                    var errorcode=error.code;
                    var errorMessage =error.message;
                
                 
            
                    if( error ){
                    alert(errorMessage);
                    console.log("sign in error",error+nemail+npass);
            
                    window.location.href = "M.html";
                    

                }else if(error === null)
                {
                    window.location.href = "M.html";
                    if( isSuccessful){

                        alert(success.message);
                        
                        
                      window.location.href = "M.html";
                    }
                }
            
            
                    })
                     
                }
   





/*
               //listern to auth with google
                if( firebase.auth().onAuthStateChange(function(user){ app.user =user;console.log(
                    'user',user)  })  ){
                    
                     alert("login Successful" + nemail +npass);
                    window.location.href = "M.html";

                }else
                     {
                     alert("You dont have a valid user account please signup");
                    form.reset();
        }
        

 */

}else
{
    alert("please fill in your complite information");
    form.reset();
}}




function signup (){
    var nemail = document.getElementById ("Email").value;
    var npass = document.getElementById ("Pass").value;
    
  if (nemail && npass !="")
        {
            alert("Signed Successful" + nemail +npass);
            
}else
{
    alert("please fill in your complite information");
    form.reset();
}

}






function AddTextbook(){
   /* var ArrayInfo = [ 
    username = document.getElementById ("username").value,
    ContNum = document.getElementById ("Number").value,
    
];*/
    
var arrayAddOnHand =[
    TextbookTitleH = document.getElementById ("TextbookTitle1").value,
    TextbookAuthorH = document.getElementById ("TextbookAuthor2").value,

    YearPublishedH = document.getElementById ("YearPublished3").value,
    TextbookEditionH = document.getElementById ("TextbookEdition4").value,
    TextbookPublisherH = document.getElementById ("TextbookPublisher5").value,

    TextbookuniversityH = document.getElementById ("Textbookuniversity6").value,
    ];

    var arrayRequired =[
        TextbookTitleR = document.getElementById ("TextbookTitle").value,
        TextbookAuthorR = document.getElementById ("TextbookAuthor").value,
    
        YearPublishedR = document.getElementById ("YearPublished").value,
        TextbookEditionR = document.getElementById ("TextbookEdition").value,
        TextbookPublisherR = document.getElementById ("TextbookPublisher").value,
    
        TextbookuniversityR = document.getElementById ("Textbookuniversity").value,
    
 
       
    
    ];
console.log( arrayAddOnHand.values()+ arrayRequired.values() );


    let usertextbookdb =firebase.database().ref("Usertextbooks/"+counter );
    
    usertextbookdb.set({
       // UserDetails:{ 
         //   'username': ArrayInfo.username,
        //    'username': ArrayInfo.ContNum,
       // },

        userTextbookOnHand: {
    //    'email': emailname,
      //  'password': passn,

       " TextbookTitle" :arrayAddOnHand.TextbookTitleH, 
        "TextbookAuthor" :arrayAddOnHand.TextbookAuthorH,             
        "YearPublished ": arrayAddOnHand.TextbookPublisherH,
        "TextbookEdition" : arrayAddOnHand.TextbookEditionH,
        
        "TextbookPublisher" : arrayAddOnHand.TextbookPublisherH, 
        "Textbookuniversity":arrayAddOnHand.TextbookuniversityH,
        },
        userTextbookRequired: {
       " TextbookTitle" : arrayRequired.TextbookTitleR ,
        "TextbookAuthor" : arrayRequired.TextbookAuthorR ,              
        "YearPublished" : arrayRequired.TextbookPublisherR , 
        "TextbookEdition" : arrayRequired.TextbookEditionR ,
        
        "TextbookPublisher" : TextbookPublisherR, 
       " Textbookuniversity":TextbookuniversityR,


        }
    });





/* 
function AddTextbook(emailname,passn,TextbookTitle1n,TextbookAuthor2n,YearPublished3n,TextbookEdition4n,TextbookEdition4){
  //  counter+=1;
    // console.log(counter);
     
    var usertextbook ={
         email :emailname,
         id :counter,
         pass :passn,

         TextbookTitle1 :TextbookTitle1n, 
         TextbookAuthor2 :TextbookAuthor2n,             
         YearPublished3 : YearPublished3n,
         TextbookEdition4 : TextbookEdition4n,
         
         TextbookPublisher5 : TextbookPublisher5n, 
         Textbookuniversity6:Textbookuniversity6n,

         
         TextbookTitle : TextbookTitlen ,
         TextbookAuthor : TextbookAuthorn,              
         YearPublished : YearPublishedn, 
         TextbookEdition : TextbookEditionn,
         
         TextbookPublisher : TextbookPublishern, 
         Textbookuniversity:Textbookuniversityn,


     }
     console.log(emailname+passn+TextbookTitle1n+TextbookAuthor2n+YearPublished3n);
    
     function AddTextbook(){

     let usertextbookdb =firebase.database().ref("Usertextbooks/"+counter );
     
     usertextbookdb.set({
         userTextbookOnHand: {
         'email': emailname,
         'password': passn,
 
        " TextbookTitle" :TextbookTitlen, 
         "TextbookAuthor" :TextbookAuthorn,             
         "YearPublished ": YearPublishedn,
         "TextbookEdition" : TextbookEditionn,
         
         "TextbookPublisher" : TextbookPublishern, 
         "Textbookuniversity":Textbookuniversityn,
         },
         userTextbookRequired: {
        " TextbookTitle" : TextbookTitlen ,
         "TextbookAuthor" : TextbookAuthorn,              
         "YearPublished" : YearPublishedn, 
         "TextbookEdition" : TextbookEditionn,
         
         "TextbookPublisher" : TextbookPublishern, 
        " Textbookuniversity":Textbookuniversityn,


         }
 }

 
         //usertextbookdb.set(pass);

         } );}}*/     
        }