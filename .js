let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLink = document.querySelector('header nav a');


window.onscroll = () => {
    sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLink.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' +id + ' ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
src="https://cdn.emailjs.com/dist/email.min.js">

  
  (function(){
      emailjs.init("YOUR_USER_ID");  
  })();

  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset(); 
      }, function(error) {
          alert('Failed to send message. Error: ' + error.text);
      });
  });

