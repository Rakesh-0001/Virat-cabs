function sendmail(){
    let parms={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }
    emailjs.send("service_1mmuv8f","template_szfqfvq",parms).then(alert("Email sent !"))
}