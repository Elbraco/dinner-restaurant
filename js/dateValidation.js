function validateForm() {
    let date = new Date();

    let dateFormat = date.getDate()+'-'+ (date.getMonth()+1) +'-'+date.getFullYear();

    var d = document.forms["myForm"]["date"].value;
    var m = document.forms["myForm"]["month"].value;
    var y = document.forms["myForm"]["year"].value;

    let selectDate = d+'-'+m+'-'+y

    if(date.getDate() > d ){

        
        console.log("Le jour doit etre égale ou plus grand pour prendre un rdv");
       
        return false
    } 
     if( (date.getMonth()+1) > m ){
         
        console.log("le mois doit etre égale ou plus grand pour prendre une table");
        return false

        

    } 
    if (date.getFullYear() > y ){
        console.log(" l'année pas bonne");
    }
    
    if(d == null || d == ""){
        alert("Please select date.");
        return false;
    }
    if(m == null || m == ""){
        alert("Please select date.");
        return false;
    }
    if(y == null || y == ""){
        alert("Please select date.");
        return false;
    }
    if((m == 4 || m == 6 || m == 9 || m == 11) && d == 31) {
        alert("Selected month contains only 30 days.");
        return false;
    }
    if(m == 2 && d > 29 && (y%4 == 0)) {
        alert("Selected month contains only 29 days.");
        return false;
    }

    if((m == 2) && d > 28) {
        alert("Selected month contains only 28 days.");
        return false;
    }
    return true;
}

