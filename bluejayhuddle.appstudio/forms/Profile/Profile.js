
btnPost.onclick=function(){
  ChangeForm(Feed)
}

Profile.onshow=function(){
  lblName.value = inptNetId.value

// get the data to populate the dropdown with names from database
    let queryProfile = "SELECT * FROM user WHERE net_id = '" + inptNetId.value + "'"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + queryProfile)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the labels
                lblFirstName.clear()
                lblLastName.clear() 
                lblMajorAnswer.clear() 
                lblGradClassAnswer.clear()
                lblEmailAnswer.clear() 
                lblPhoneAnswer.clear()
            // replace i with index in array
                lblFirstName.value = results[1]
                lblLastName.value = results[2]
                lblMajorAnswer.value = results[3]
                lblClassAnswer.value = results[6]
                lblEmailAnswer.value = results[4]
                lblPhoneAnswer.value = results[5]
                
}

}

btnDM1.onclick=function(){
  ChangeForm(DM)
}


btnEditProfile.onclick=function(){
  ChangeForm(EditProfile)
}


btnLogout.onclick=function(){
  ChangeForm(frmLogin)
  inptNetId.value = " "
  inptPassword.value = " "
}
