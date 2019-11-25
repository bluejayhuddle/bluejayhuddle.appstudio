EditProfile.onshow=function(){
  lblName1.value = inptNetId.value
  
  
    let newMajor = selEditMajor.value
    let student = inptNetId.value 
   
    // get the data to populate the dropdown with names from database
    let query = "SELECT DISTINCT major FROM user"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            selEditMajor.clear()
            for (i = 0; i <= results.length - 1; i++)
                selEditMajor.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
  
}



btnLogout3.onclick=function(){
  ChangeForm(frmLogin)
  inptNetId.value = " "
  inptPassword.value = " "
}


btnReturnToProfile.onclick=function(){
  ChangeForm(Profile)
}



btnCommitChanges.onclick=function(){

  //code that changes the user's phone number
    let newPhone = inptEditPhone.value
    let student2 = inptNetId.value 
   
    let query2 = "UPDATE user SET phone = " + '"' + newPhone + '"' + " WHERE net_id = " + '"' + student2 + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + query2)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed your phone number!")
            lblPhoneAnswer.value = inptEditPhone.value
        } else
            NSB.MsgBox("There was a problem changing your phone number.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}


btnCommitChangesMajor.onclick=function(){
  //code changes the user's major
  
    let newMajor = selEditMajor.value
    let student1 = inptNetId.value 
    
    let query1 = "UPDATE user SET major = " + '"' + newMajor + '"' + " WHERE net_id = " + '"' + student1 + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + query1)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed your major!")
            lblMajorAnswer.value = selEditMajor.value
        } else
            NSB.MsgBox("There was a problem changing your major.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}
