
  let burger = document.querySelector('#mobil');
  let menu = document.querySelector('#menu');
  let menu2 = document.getElementById('menu2');
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
    if (!menu2.contains(e.target)){
      menu.style.display = 'none';}
  });

  window.addEventListener('resize', (e) =>{
    if(window.innerWidth > 780){
      menu.style.display='flex';
    }
    else{
      menu.style.display='none';
    }
});
