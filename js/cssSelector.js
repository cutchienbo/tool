// var list = [
//     basic,
//     descendant,
//     multiple,
//     combination,
//     sibling,
//     pseudo1,
//     pseudo2,
//     attribute
// ]
// var selector = [
//     '1. Basic CSS Selector',
//     '2. Descendant CSS Selector',
//     '3. Multiple CSS Selector',
//     '4. Combination CSS Selector',
//     '5. Sibling CSS Selector',
//     '6. Pesudo CSS Selector 1',
//     '7. Pesudo CSS Selector 2',
//     '8. Attribute CSS Selector'
// ]
// var title = document.querySelector('.title');
// var workSpace = document.querySelector('.workspace');
// var index = -1;
// var nextBtn = document.querySelector('.next');
// var backBtn = document.querySelector('.back');
// var style = document.querySelector('style')
// var writer = document.querySelector('.writer')
// var runBtn = document.querySelector('.run')
// var resetBtn = document.querySelector('.reset')
// var delBtn = document.querySelector('.del');
// runBtn.onclick = ()=>{
//     style.innerHTML ='.workspace'+' '+ writer.value + '{color:red}';
// }
// resetBtn.onclick = ()=>{
//     style.innerHTML = '';
// }
// delBtn.onclick = ()=>{
//     writer.value = '';
// }
// function btn (list,selector,index){
//     nextBtn.onclick = ()=>{
//         next(list,selector,index);
//     };
//     backBtn.onclick = ()=>{
//         back(list,selector,index);
//     };
// }
// function next (list,selector,index){
//     if(index+1==list.length){
//         index=-1;
//     }
//     index++;
//     title.innerHTML = selector[index];
//     workSpace.innerHTML = list[index]();
//     return btn(list,selector,index);
// }
// function back (list,selector,index){
//     if(index-1<0){
//         index=list.length;
//     }
//     index--;
//     title.innerHTML = selector[index];
//     workSpace.innerHTML = list[index]();
//     return btn(list,selector,index);
// }
// function basic(){
//     var msg = `
//         <div class="khoase">
//             div class = khoase
//         </div>
//         <a id="khoase">
//             a id = khoase
//         </a>
//         <p>
//             Tao là thẻ p
//         </p>
//     `;
//     return msg;
// }
// function descendant(){
//     var msg =`
//     <ul class="one">
//                 ul class = one
//                 <li class="one-one check">
//                     li class = one-one check
//                     <p class="one-one">
//                         p class = one-one
//                     </p>
//                 </li>
//                 <li class="one-two">
//                     li class = one-two
//                     <a href="" class="check">
//                         a class = check
//                     </a>
//                 </li>
//                 <p class="one-three">
//                     p class = one-three
//                 </p>
//                 <h1 class="one-four">
//                     h1 class = one-four
//                 </h1>
//             </ul>
//     `;
//     return msg;
// }
// function multiple(){
//     var msg = `
//     <ul class="one">
//     ul class = one
//     <li class="one-one check">
//         li class = one-one check
//         <p class="one-one">
//             p class = one-one
//         </p>
//     </li>
//     <li class="one-two">
//         li class = one-two
//         <a href="" class="check">
//             a class = check
//         </a>
//     </li>
//     <p class="one-three">
//         p class = one-three
//     </p>
//     <h1 class="one-four">
//         h1 class = one-four
//     </h1>
// </ul>
// <ul id="two">
//     ul id = one-two
//     <li class="se">
//         li class = se
//     </li>
//     <li id="one-two">
//         li id = one-two
//         <ul class="abc">
//             ul class = abc
//             <li id="hkt">
//                 li id = hkt
//             </li>
//             <li>
//                 li
//             </li>
//         </ul>
//     </li>
// </ul>
//     `;
//     return msg;
// }
// function combination(){
//     var msg = `
//     <ul class="one">
//     ul class = one
//     <li class="one-one check">
//         li class = one-one check
//         <p class="one-one">
//             p class = one-one
//         </p>
//     </li>
//     <li class="one-two">
//         li class = one-two
//         <a href="" class="check">
//             a class = check
//         </a>
//     </li>
//     <p class="one-three">
//         p class = one-three
//     </p>
//     <h1 class="one-four">
//         h1 class = one-four
//     </h1>
// </ul>
// <ul id="two">
//     ul id = one-two
//     <li class="se">
//         li class = se
//     </li>
//     <li id="one-two">
//         li id = one-two
//         <ul class="abc">
//             ul class = abc
//             <li id="hkt">
//                 li id = hkt
//             </li>
//             <li>
//                 li
//             </li>
//         </ul>
//     </li>
// </ul>
//     `;
//     return msg;
// }
// function sibling(){
//     var msg = `
//     <ul class="list">
//     ul class = list
//     <ul class="item">
//         ul class = item
//       <li id="hola" class="in-item">
//         li class = in-item id = hola
//       </li>
//       <li class="in-item">
//         li class = in-item
//       </li>
//       <li class="in-item">
//         li class = in-item
//       </li>
//     </ul>
//     <ul class="item-out">
//         ul class = item-out
//     </ul>
//   </ul>
//     `;
//     return msg;
// }
// function pseudo1(){
//     var msg = `
//     <ul class="list">
//     ul .list
//     <ul class="item1">
//         ul .item1
//       <li id="hola" class="item1-son1">
//         li #hola .item1-son1
//       </li>
//       <li class="item1-son2">
//         li .item1-son2
//       </li>
//       <li class="item1-son3">
//         li .item1-son3
//       </li>
//     </ul>
//     <ul class="item2">
//         ul .item2
//     </ul>
//     <ul id="halo" class="item3">
//         ul #halo .item3
//         <li id="hehe" class="item3-son1">
//             li #hehe .item3-son1
//           </li>
//           <li class="item3-son2">
//             li .item3-son2
//           </li>
//     </ul>
  
//     <ul class="item4">
//         ul .item4
//       <li class="item4-son1">
//         li item4-son1
//       </li>
//     </ul>
//   </ul>
//     `;
//     return msg;
// }
// function pseudo2(){
//     var msg = `
//     <ul id="box">
//     ul .box
//     <a class="link1" href="#">
//          a .link1
//     </a>
//     <a class="link2" href="#">
//         a .link2
//     </a>
//     <ul class="notthing">
//         ul .notthing
//     </ul>
//     <ul class="container">
//         ul .container
//       <form onsubmit="event.preventDefault()">
//        form
//         <input class="input"type="text" placeholder="input"/>
//         <input class="submit" type="submit" />
//       </form> 
//     </ul>
//   </ul>
//     `;
//     return msg;
// }
// function attribute(){
//     var msg = `
//     <ul for="chocolate" class="list1">
//     ul .list1 for = chocolate
//     <li class="item">
//         li .item
//     </li>
//     <li class="item" for="khoase">
//         li .item for = khoase
//     </li>
// </ul>
// <ul for="peanut" class="list2">
//     ul .list2 for = peanut
// </ul>

//     `;
//     return msg;
// }
// btn(list,selector,index);
//

var htmlCode = '';
var cssCode = '';
// var htmlBackUpCode = '';
// var cssBackUpCode = '';
var outputBoard = document.querySelector('.board');
var htmlBoard = document.querySelector('.html-board');
var cssBoard = document.querySelector('.css-board');
var outputCss = document.querySelector('style');
var runBtn = document.querySelector('.run-code');
var delBtn = document.querySelector('.del-code');
var showHtmlBtn = document.querySelector('.html-show');
var showCssBtn = document.querySelector('.css-show');
var alignCenterBtn = document.querySelector('.align-center')
var resetBtn = document.querySelector('.reset-code');

var backUpCheckFirst = true;
var backUpCheckSecond = false;
var resetCheck = true;

var backUpList = [
    
]
var backUpListIndex = 0;
runBtn.onclick = ()=>{
    // &&(backUpList[backUpListIndex].backUpHtml!=htmlBoard.value||backUpList[backUpListIndex].backUpCss!=cssBoard.value)
    if((htmlBoard.value!=''||cssBoard.value!='')){
        htmlCode = htmlBoard.value;
        cssCode = cssBoard.value;
        backUpList[backUpListIndex++] = {
            backUpHtml:htmlCode,
            backUpCss:cssCode,
        };
        renderHtml(htmlCode);
        renderCss(cssCode);
      
    }
   
}
delBtn.onclick = ()=>{
    renderHtml('');
    renderCss('');
}
resetBtn.onclick = ()=>{
   
    backUpListIndex--;
    renderHtml(backUpList[backUpListIndex].backUpHtml);
    renderCss(backUpList[backUpListIndex].backUpCss);
     console.log(backUpList[backUpListIndex].backUpHtml)
    backUpList[backUpListIndex+1]={};
}
alignCenterBtn.onclick = ()=>{
    outputBoard.classList.toggle('align-board');
}
showHtmlBtn.onclick = ()=>{
    if(resetCheck){
        htmlBoard.value = htmlCode;
    }
    else{
        htmlBoard.value = htmlBackUpCode;
    }
}
showCssBtn.onclick = ()=>{
    if(resetCheck){
        cssBoard.value = cssCode;
    }
    else{
        cssBoard.value = cssBackUpCode;
    }
}
// cssBoard.oninput = (e)=>{
//     if(e.data=='{'){
//         cssBoard.value+='}';
//     }
//     if(e.data=='('){
//         cssBoard.value+=')';
//     }
// }

function renderHtml (value){
    outputBoard.innerHTML = value;
}
function renderCss (value){
    value = trimAll(value);
    var msg='.board ';
    for(let index=0;index<value.length;index++){
        if(value[index]=='/'){
            index++;
            while(value[index]!='/'){
                msg+=value[index];
                index++;
            }
        }
        else if(value[index-1]=='}'){
            msg+='.board ';
            
        }
        else{
            msg+=value[index];
        }
    }
    outputCss.innerHTML = msg;
    console.log(msg);
}
function trimAll(str){
    let msg ='';
    for(var i=0;i<str.length;i++){
        if(str[i]=='}'){
            msg+='}';
            i++;
            while(true){
                i++;
                if(str[i]!=' '){
                    msg+=' ';
                    break;
                }
            }
        }
    msg+=str[i];
    }
 
    return msg;
}
