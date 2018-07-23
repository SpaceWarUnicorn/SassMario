
  let burger = document.querySelector('#mobil');
  let menu = document.querySelector('#menu');

  menu.addEventListener('click',() => {
    menu.style.display = 'none';
  });

  burger.addEventListener('click',() => {
    if(menu.style.display == 'none')
    {
    menu.style.display = 'block';
    }else{
      menu.style.display='none'
    }
  });

  window.addEventListener('click',(e)=>{
    if (!document.getElementById('menu2').contains(e.target)){
      menu.style.display = 'none';}
  });
