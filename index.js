function starTime () {
   let today= new Date;
   let h = today.getHours();
   let m = today.getMinutes();
   let s = today.getSeconds();
   let time = h + ':'+ m +':'+s;
   document.querySelector('.container .clock').innerHTML=time;
   
}
setInterval (starTime,1000);
