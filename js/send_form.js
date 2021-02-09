const submit_button = document.getElementById("submit-button");
const submit_status_box = document.getElementById("message");
const text_success = document.getElementById("insert-text-success");
const text_fail = document.getElementById("insert-text-fail");
submit_button.addEventListener('click', function() {
    // Get form info
    var nameValue = document.getElementById("Name").value;
    var emailValue = document.getElementById("Email").value;
    var messageValue = document.getElementById("Message").value;  
    // HTTP API Call to get quotes from Lambda Function
    const url = "https://h1bncnlw12.execute-api.ap-southeast-2.amazonaws.com/sendformdata";
    var data = JSON.stringify({"email": emailValue, "name": nameValue, "message": messageValue});
    let request = new XMLHttpRequest();
    request.open("POST", url)
    request.send(data);
    request.onload = () => {
        console.log(request);
        // Error handling
        if (!request.status || request.status != 200) {
            text_success.innerHTML = "Message wasn't able to be sent :(. Please email us directly at littlecare99@gmail.com.";
            setTimeout(() => { submit_status_box.style.display = "block"; }, 1000);
        } else {
            text_success.innerHTML = "Message successfully sent. You will be contacted within 2-5 business days :)";
            setTimeout(() => { submit_status_box.style.display = "block"; }, 1000);
        }
    }
})