let textarea = document.getElementById('taxtarea')
function cleara() {
   textarea.innerHTML = "";
}
function fony_sise(size){
   let fontsiza = size.value
   textarea.style.fontSize =fontsiza + "px";
}
function colorch(change){
   let color = change.value;
   textarea.style.color=color;
}
function btnbold() {
   if (textarea.style.fontWeight == "bold") {
      textarea.style.fontWeight = "normal"
   }
   else {
      textarea.style.fontWeight = "bold"
   }
}
function btnitalic() {
   if (textarea.style.fontStyle == "italic") {
      textarea.style.fontStyle = "normal"
   }
   else {
      textarea.style.fontStyle = "italic"
   }
}
function btnunderline() {
   if (textarea.style.textDecoration == "underline") {
      textarea.style.textDecoration = "none"
   }
   else {
      textarea.style.textDecoration = "underline"
   }
}
function btnaA() {
   if (textarea.style.textTransform == "uppercase") {
      textarea.style.textTransform = "none"
   }
   else {
      textarea.style.textTransform = "uppercase"
   }
}
function left(){
   textarea.style.textAlign = "left"
}
function center(){
   textarea.style.textAlign = "center"
}
function right(){
   textarea.style.textAlign = "right"
}

let fontFamily = document.getElementById('font_Family')
fontFamily.addEventListener("input",function(){
   textarea.style.fontFamily=fontFamily.value
})
// function Clearall(){
//    document.getElementById('new-div').innerHTML="";
//  }
//  console.log(Clearall())