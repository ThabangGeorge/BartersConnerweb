//profile picture
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#wizardPicturePreview')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    //cover page
    function CoverreadURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#CoverPic')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }



//textbook Required picture 1
    function TextRreadURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#TextbookRequired')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }



    //textbook on hand 1 picture
    function TextHreadURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#TextbookOnHand')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }


    //textbook Required picture 2
    function TextR2readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#TextbookRequiredB2IMG')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }



    //textbook on hand 2 picture
    function TextH2readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#TextbookOnHandB2IMG')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }




//textbook Required picture 3
function TextR3readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#TextbookRequiredB3IMG')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}



//textbook on hand 3 picture
function TextH3readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#TextbookOnHandB3IMG')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}






//add textbook required 1 array check
    function TextbookRequired(){
        var RequiredArray =[ "Title:"+document.getElementById ("TextbookTitle1").value,
        "Author:"+document.getElementById ("TextbookAuthor2").value,"YearPublished:"+ document.getElementById ("YearPublished3").value,
        "Edition:"+document.getElementById ("TextbookEdition4").value,"Publisher:"+ document.getElementById ("TextbookPublisher5").value,
        "university:"+document.getElementById ("Textbookuniversity6").value];

        
console.log("Required Info"+RequiredArray );

    }
    //add textbook on hand 1 array check
    function TextbookOnHand(){

        var OnHandArray =["Title:"+document.getElementById ("TextbookTitle").value,
        "Title:"+document.getElementById ("TextbookAuthor").value, "YearPublished:"+document.getElementById ("YearPublished").value,
        "Edition:"+document.getElementById ("TextbookEdition").value,"Publisher:"+ document.getElementById ("TextbookPublisher").value,
        "university:"+document.getElementById ("Textbookuniversity").value];
    
        console.log("On hand Info"+OnHandArray);
    }



    //Branch 1
    function DisplayBranch1(){
        var OnHandArray =["Title:"+document.getElementById ("TextbookTitle").value,
        "Title:"+document.getElementById ("TextbookAuthor").value, "YearPublished:"+document.getElementById ("YearPublished").value,
        "Edition:"+document.getElementById ("TextbookEdition").value,"Publisher:"+ document.getElementById ("TextbookPublisher").value,
        "university:"+document.getElementById ("Textbookuniversity").value];

        var RequiredArray =[ "Title:"+document.getElementById ("TextbookTitle1").value,
        "Author:"+document.getElementById ("TextbookAuthor2").value,"YearPublished:"+ document.getElementById ("YearPublished3").value,
        "Edition:"+document.getElementById ("TextbookEdition4").value,"Publisher:"+ document.getElementById ("TextbookPublisher5").value,
        "university:"+document.getElementById ("Textbookuniversity6").value];

        document.getElementById("TxBookOnHand").innerHTML = OnHandArray;
        document.getElementById("TxBookRequired").innerHTML = RequiredArray;

  
    }
                                                                                                                                              
//Branch 2
    function DisplayBranch2(){
        var OnHandArray =["Title:"+document.getElementById ("TextbookTitle").value,
        "Title:"+document.getElementById ("TextbookAuthor").value, "YearPublished:"+document.getElementById ("YearPublished").value,
        "Edition:"+document.getElementById ("TextbookEdition").value,"Publisher:"+ document.getElementById ("TextbookPublisher").value,
        "university:"+document.getElementById ("Textbookuniversity").value];

        var RequiredArray =[ "Title:"+document.getElementById ("TextbookTitle1").value,
        "Author:"+document.getElementById ("TextbookAuthor2").value,"YearPublished:"+ document.getElementById ("YearPublished3").value,
        "Edition:"+document.getElementById ("TextbookEdition4").value,"Publisher:"+ document.getElementById ("TextbookPublisher5").value,
        "university:"+document.getElementById ("Textbookuniversity6").value];

        document.getElementById("TxBookOnHandB2").innerHTML = OnHandArray;
        document.getElementById("TxBookRequiredB2").innerHTML = RequiredArray;

  
    }
    

//Branch 3
function DisplayBranch3(){
    var OnHandArray =["Title:"+document.getElementById ("TextbookTitle").value,
    "Author:"+document.getElementById ("TextbookAuthor").value, "YearPublished:"+document.getElementById ("YearPublished").value,
    "Edition:"+document.getElementById ("TextbookEdition").value,"Publisher:"+ document.getElementById ("TextbookPublisher").value,
    "university:"+document.getElementById ("Textbookuniversity").value];

    var RequiredArray =[ "Title:"+document.getElementById ("TextbookTitle1").value,
    "Author:"+document.getElementById ("TextbookAuthor2").value,"YearPublished:"+ document.getElementById ("YearPublished3").value,
    "Edition:"+document.getElementById ("TextbookEdition4").value,"Publisher:"+ document.getElementById ("TextbookPublisher5").value,
    "university:"+document.getElementById ("Textbookuniversity6").value];

    document.getElementById("TxBookOnHandB3").innerHTML = OnHandArray;
    document.getElementById("TxBookRequiredB3").innerHTML = RequiredArray;


}

function MyInfomation(){
    var MyInforArray=[  "User Name:"+document.getElementById ("Unsername").value,
                        "Campus Location:"+document.getElementById ("Location").value,
                        "Email:"+document.getElementById ("UnserEmail").value,
                        "Contact number:"+document.getElementById ("UnserNumbers").value,
    
    ]
}

