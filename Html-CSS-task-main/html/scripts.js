const inputName = document.getElementById('name')
const inputemail = document.getElementById('email')
const thumbnails = gallaryContainer.children;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btnCon = document.getElementById("conection");
var span = document.getElementsByClassName("close")[0];
for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        fullPhoto.src = thumbnails[i].src;
    });
}
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
btnCon.onclick = function(){
    if(inputName.value =='' | inputPhone.value =='')
    alert('Поля "Имя" и "Номер телефона" не должны быть пустым');
    else   modal.style.display = "none"
    return false;
  
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

	
  inputName.oninput = function() {
    this.value = this.value.replace(/[^a-zA-ZА-Яа-яЁё]/g,'');
}
