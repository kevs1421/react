var i=0, text;
text = "Kevin Punongbayan"
function typing(){
  if(i<text.length){
    document.getElementById(".text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 250);
  }
}
typing();

//Changing colors position
blinkingColors = () => {
  const colorClasses = ['text-danger', 'text-warning', 'text-success', 'text-primary'];
  const nameInstances = document.querySelectorAll('.position');
  nameInstances.forEach((nameInstance) => {
      nameInstance.removeAttribute('class');
      const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
      nameInstance.classList.toggle(randomColorClass);
  });
}

setInterval(blinkingColors, 1000);

 
 //Changing Background Colors
 let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('bodyAll').style.background = background;
    }));