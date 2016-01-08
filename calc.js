'use strict';
var temp = 0;
var sign = '';
document.addEventListener('DOMContentLoaded',function(){
  alert('I only lack chain operations. Just get your *ss to use the = operator, we have suffered enough! :)')
ac();
document.onclick=function(event){
  if(event.target.classList.contains('num')){
    numClicked(event);
  }
  //I know that a switch is better here but I'd written this when I thought of it so..
  else if (event.target.getAttribute("id")==='dot') {dot();}
  else if (event.target.getAttribute("id")==='+') {plus();}
  else if (event.target.getAttribute("id")==='-') {minus();}
  else if (event.target.getAttribute("id")==='x') {x();}
  else if (event.target.getAttribute("id")==='/') {divide();}
  else if (event.target.getAttribute("id")==='ac') {ac();}
  else if (event.target.getAttribute("id")==='+-') {negate();}
  else if (event.target.getAttribute("id")==='%') {percent();}
  else if (event.target.getAttribute("id")==='=') {equals();}
}

});

function numClicked(e){
  var num = e.target.textContent;
  document.getElementsByClassName('result')[0].textContent += num;

}

function dot(){
  if(document.getElementsByClassName('result')[0].textContent%1===0){
  document.getElementsByClassName('result')[0].textContent += '.';
}
else{alert('THOU SHALT NOT TRICK ME!');
ac();}
}
function plus(){
  temp = parseFloat(document.getElementsByClassName('result')[0].textContent) ;
  document.getElementsByClassName('result')[0].textContent = '';
  sign = 'plus';
}
function minus(){
  if(document.getElementsByClassName('result')[0].textContent===''){
    document.getElementsByClassName('result')[0].textContent='-';
  }
  else{
  temp = parseFloat(document.getElementsByClassName('result')[0].textContent) ;
  document.getElementsByClassName('result')[0].textContent = '';
  sign = 'minus';
}
}
function x(){
  temp = parseFloat(document.getElementsByClassName('result')[0].textContent) ;
  document.getElementsByClassName('result')[0].textContent = '';
  sign = 'x';
}
function divide(){
  temp = parseFloat(document.getElementsByClassName('result')[0].textContent) ;
  document.getElementsByClassName('result')[0].textContent = '';
  sign = '/';
}
function ac(){
  temp = 0 ;
  document.getElementsByClassName('result')[0].textContent = '';
  sign = '';
}
function negate(){
  console.log('sdfsd');
  var negation = parseFloat(document.getElementsByClassName('result')[0].textContent);
   document.getElementsByClassName('result')[0].textContent= negation*(-1);
}
function percent(){
  document.getElementsByClassName('result')[0].textContent = parseFloat(document.getElementsByClassName('result')[0].textContent)/100;
}
function equals(){
  var result = parseFloat(document.getElementsByClassName('result')[0].textContent);
  switch(sign) {
    case 'plus':
        document.getElementsByClassName('result')[0].textContent=result + temp;
        break;
    case 'minus':
        document.getElementsByClassName('result')[0].textContent = temp - result;
        break;
    case '/':
        document.getElementsByClassName('result')[0].textContent = temp/result
            break;
    case 'x':
        document.getElementsByClassName('result')[0].textContent = result*temp;
                break;
    default:
        ac();
}
}
