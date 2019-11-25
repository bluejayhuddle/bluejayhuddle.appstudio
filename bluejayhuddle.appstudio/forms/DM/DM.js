

btnPost2.onclick=function(){
  ChangeForm(Feed)
}

btnProfile2.onclick=function(){
  ChangeForm(Profile)
}



btnSendDM.onclick=function(){
  let a = inptNetId.value
  let b = inptSendDM.value
  let c = inptTo.value 
  
  let queryDM = "INSERT INTO DM (content,net_id,recipient_id) VALUES ('" + b + "', '" + a + "','" + c + "' )"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + queryDM)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the message!")
            txtMessageFeed.value = a + ":" + " " + b + "\n"
        } else
            NSB.MsgBox("There was a problem sending your message.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
    
    //link up the recipient to the DB
    
    let queryDM1 = "INSERT INTO RECIPIENT (recipient_id,content) VALUES ('" + c + "', '" + b + "')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + queryDM1)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the message!")
            txtMessageFeed.value = a + ":" + " " + b + "\n"
        } else
            NSB.MsgBox("There was a problem sending your message.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
    
}


btnLogout2.onclick=function(){
  ChangeForm(frmLogin)
  inptNetId.value = " "
  inptPassword.value = " "
}

