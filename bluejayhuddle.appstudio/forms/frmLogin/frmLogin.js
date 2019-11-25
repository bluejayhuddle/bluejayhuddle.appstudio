let req1

btnLogin.onclick=function(){
    // little program on radlab server: authLDAP.php that authenicates 
    // the CU login you send and responds with a 1 (passed) or a 0 (failed)
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetId.value + "&j_password=" + inptPassword.value)
    if (req1.status == 200) {  //AJAX call worked.
        //1 good 0 bad
       ChangeForm(Profile)
    } else {  //had a problem with the AJAX request. 
        NSB.MsgBox(`Error: if you are off-campus you must be using CU VPN. The error code returned was: ${req1.status}.` ) 
    }
  //new code to populate profile info
  let check = inptNetId.value
    let query = "SELECT * FROM user WHERE net_id = " + '"' + check + '"'  

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + query)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        lblName.value = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no users of that type.")
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
    
    

frmLogin.onshow=function(){
    // set the cursor in the inputNetID field to start
    inptNetId.focus()   // put cursor in first input control when form loads
}

