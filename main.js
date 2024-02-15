let links=document.getElementsByClassName("links");
let contents=document.getElementsByClassName("contents");

function display(tablink){
    for(link of links ){
        link.classList.remove("active-links");
    }
    for(content of contents ){
        content.classList.remove("active-content");
        event.currentTarget.classList.add("active-links");
        document.getElementById(tablink).classList.add("active-content");
    }}




  const scriptURL = 'https://script.google.com/macros/s/AKfycbzN-xUz0hLsNwjSKy2K4xfiZFz4JjTwWzvvWYMUI8he_nNXA7TBWvLE2mCuT1gajoE4kA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
