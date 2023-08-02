let sign     = "X";
let button   = document.getElementById("btn");
let display  = document.getElementById("player");

function fill(number){
    let box = document.getElementById("div" + number);
    console.log(box);


if(box.innerText == ""){
    box.innerHTML = sign;
    check(); 
    display.innerHTML = "Now" + " " + sign + " Turn 🫵"
}
if (win()) {
    alert("WINNER");  
}
 
 else{
    if (draw()) {
        alert("match draw");
    }
 }

}

function check(){
    if (sign=="X"){
        sign = "O"
    }

    else {
        sign = "X";
    }
}

function win () {
   if (checkCondition('div1',"div2","div3")||checkCondition('div4',"div5","div6")||
       checkCondition('div7',"div8","div9")||checkCondition('div1',"div4","div7")||
       checkCondition('div2',"div5","div8")||checkCondition('div3',"div6","div9")||
       checkCondition('div1',"div5","div9")||checkCondition('div3',"div5","div7"))
    {
        return true;
    }
}
function getData(div){
   return document.getElementById(div).innerHTML;
}
function checkCondition(ex1,ex2,ex3) {   
    if(getData(ex1)!="" &&
       getData(ex2)!="" &&
       getData(ex3)!="" && 
       
       
       getData(ex1)==getData(ex2)&&
       getData(ex2)==getData(ex3)
        )
        {
            return true;
        }
}
function draw() {
   if(getData("div1")!=""&&
      getData("div2")!=""&&
      getData("div3")!=""&&
      getData("div4")!=""&&
      getData("div5")!=""&&
      getData("div6")!=""&&
      getData("div7")!=""&&
      getData("div8")!=""&&
      getData("div9")!="")
   {
    return true;
   }
}
function reset() {
    for(var i=1; i<=9;i++){
        document.getElementById('div' + i).innerHTML="";
    }
}