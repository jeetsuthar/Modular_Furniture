const form = document.querySelector('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const massage = document.getElementById('massage');

function sendEmail(){
    const BodyMassage = `Name : ${name.value}<br>Email : ${email.value}<br>Mobile Number : ${phone.value}<br>Subject : ${subject.value}<br>Massage : ${massage.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "modularfurniture52@gmail.com",
        Password : "22E9C80BBF45E34548F224A83FBF5DC9C72C",
        To : 'modularfurniture52@gmail.com',
        From : "modularfurniture52@gmail.com",
        Subject : subject.value,
        Body : BodyMassage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})