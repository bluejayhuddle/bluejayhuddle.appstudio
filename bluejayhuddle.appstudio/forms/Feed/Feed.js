//on show event
 Feed.onshow=function(){
  //get from DB by selecting it out and putting it in the DB
  // select * and use a loop to add them to the textarea using \n
      
      let y = inptNetId.value
      let z = inptTweet.value
      
      let queryFeedHistory = "SELECT (content, net_id) FROM MESSAGE"
        req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + queryFeedHistory)
      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the feed successfully displayed
            let results = JSON.parse(req1.responseText)
            for (i = 0; i <= results.length - 1; i++)
                  txtFeed.value = results[2] + ":" + " " + results[1] + "\n"
        } else
            NSB.MsgBox("There was a problem displaying the feed.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
  
}
 
 
 
 
btnProfile1.onclick=function(){
  ChangeForm(Profile)
}


btnDM.onclick=function(){
  ChangeForm(DM)
}


btnPostMessage.onclick=function(){
  let a = inptNetId.value
  let b = inptTweet.value
  
  let query = "INSERT INTO MESSAGE (content,net_id) VALUES ('" + b + "', '" + a + "')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=375groupb4&query=" + query)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the message!")
            txtFeed.value = a + ":" + " " + b + "\n"
        } else
            NSB.MsgBox("There was a problem sending your message.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}





btnLogout1.onclick=function(){
  ChangeForm(frmLogin)
  inptNetId.value = " "
  inptPassword.value = " "
}



