const array = [];

$('select').addEventListener('change', (e) => {
   e.preventDefault();
   $('.p').innerHTML = e.target.value;
})

$('.weight').addEventListener('click', (e) => {
   e.preventDefault();
   $('.hajmi').innerHTML = e.target.value
   $('.weight').style.background = 'green'
   $('.weight__second').style.background = 'transparent'
   $('.weight__third').style.background = 'transparent';
   array.push(e.target.innerHTML);
   console.log(array);
})

$('.weight__second').addEventListener('click', (e) => {
   e.preventDefault();
   $('.hajmi').innerHTML = e.target.value
   $('.weight__second').style.background = 'green'
   $('.weight').style.background = 'transparent'
   $('.weight__third').style.background = 'transparent';
   array.push(e.target.innerHTML);
   console.log(array);
})

$('.weight__third').addEventListener('click', (e) => {
   e.preventDefault();
   $('.hajmi').innerHTML = e.target.value
   $('.weight__third').style.background = 'green'
   $('.weight__second').style.background = 'transparent'
   $('.weight').style.background = 'transparent';
   array.push(e.target.innerHTML);
   console.log(array);
})

$('.pomidor').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.bodiring').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra_s').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra_s").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.kurka').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra_th').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra_th").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.qoziqorin').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra_f').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra_f").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.zaytun').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra_five').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra_five").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})


$('.qazi').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.extra_six').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".extra_six").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.achchiq').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.qoshimcha').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".qoshimcha").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})

$('.sosiska').addEventListener('change', (e) => {
   if (e.target.checked === true) {
      e.preventDefault();
      $('.qoshimcha_s').innerHTML = e.target.value;
      array.push(e.target.value);
      console.log(array);
   }
   else {
      $(".qoshimcha_s").innerHTML = "";
      array.pop(e.target.value);
      console.log(array);
   }
})


$(".button").addEventListener("click",()=> {
   if (array.length <= 1) {
      $("#check").setAttribute("class", "fa fa-x");
      $(".modal").setAttribute("class", "modal active");
      console.log("Ichi bosh")
    } else {
      $("#check").setAttribute("class", "fa fa-check");
      $(".modal").setAttribute("class", "modal active");
    }
});
 
 $(".modal__container_x").addEventListener("click", () => {
   $(".modal").classList.remove("active");
 });
 
 $(".modal").addEventListener("click", () => {
   if ($(".modal")) {
     $(".modal").classList.remove("active");
   }
 });
 
 this.addEventListener("keydown", (e) => {
   if (e.code == "Escape") {
     $(".modal").classList.remove("active");
   }
 });








