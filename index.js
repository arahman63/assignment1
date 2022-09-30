window.onload=function(){
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function onClick(event) {
      // 👇️ Change text color globally
      if(document.body.style.color == 'black'){
        document.body.style.color = 'darkgreen';
      }
      else if (document.body.style.color =='darkgreen') {
        document.body.style.color = 'purple';
      } else {
        document.body.style.color = 'black';
      }
      // 👇️ Change text color for clicked element only
      // event.target.style.color = 'salmon';
    });
}
