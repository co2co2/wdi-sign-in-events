document.addEventListener('DOMContentLoaded',function(){
  var buttons = document.querySelectorAll('button')
  var modal = document.querySelector(".modal")
  var inputs = document.querySelectorAll("input")

  buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if (e.target.classList.contains('signin')){
      modal.style.display ="block"
    } else if (e.target.classList.contains('close')){
      modal.style.display = "none"
    } else if (e.target.classList.contains('submit')){
      inputs.forEach(function(input){
        input.classList.add("error")
        input.addEventListener('click',function(){
          input.classList.remove("error");
        })
      })
    }
  });
});
});
