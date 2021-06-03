var inputtext= document.getElementById('inputid');
var btn=document.getElementById('btn');
var arr=[];
var itemlist=document.getElementById('list');
btn.addEventListener('click',insertelement)


inputtext.addEventListener('keyup',function(event){
    if(event.keyCode===13)
    {
        btn.click();
    }
});
function insertelement(){
    // console.log("clicked");
    // console.log(inputtext.value);
    // console.log(typeof inputtext.value);
    // arr.push(inputtext.value);
    // console.log(arr.length+"");
    var divchild= document.createElement('div');
    divchild.classList.add('item');
    divchild.innerHTML=`<p>${inputtext.value}</p><a href="#" class="btnitem">Remove</a>`;
    itemlist.appendChild(divchild);
    inputtext.value="";
    // console.log(divchild.children[1]);
    divchild.children[0].addEventListener('click',function(){
        divchild.children[0].style.textDecoration='line-through';
        divchild.style.background='rgb(33, 22, 17)';
        divchild.children[1].style.background='red';
        divchild.children[1].style.color='white';
    })
    divchild.children[1].addEventListener('click',function(){
        itemlist.removeChild(divchild);
    })

}