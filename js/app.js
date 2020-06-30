let circle = document.querySelectorAll('.circle');
let arrCircle = Array.from(circle);
arrCircle.forEach(key => key.addEventListener('transitionend', removeTransition));
let element_capture;
let key = document.querySelectorAll('.key');
let arrKey = Array.from(key);
let list = document.querySelectorAll(`li`);
let arrList = Array.from(list);
let obj_turn = {
    white_key : [65, 83, 68, 70, 71, 72, 74],
    black_key: [87, 69, 84, 89, 85]
};
let last_class_used;

function contain(element, arr){
    for(value of arr){
        if(element == value) return true;
    }
    return false;
}


function playing(e){


    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let element = e.target;
    let keyCode;

    audio.currentTime = 0; 
    audio.play();
    if(element.classList.contains('black-keyboard')){
        console.log('Contêm...');
    }
    arrList.forEach(cur =>{
        if(e.keyCode == cur.getAttribute("data-key")){

            if(contain(cur.getAttribute("data-key"),obj_turn.white_key)){
                cur.classList.add('active-white');
                console.log('Encontrei!');
                console.log(cur);
                element_capture = cur;
                last_class_used = 'active-white';
            }else{
                cur.classList.add('active-black');
                console.log('Encontrei!');
                console.log(cur);
                element_capture = cur;
                last_class_used = 'active-black';
            } 
        }
    });


    arrCircle.forEach(circ => circ.classList.add('playing'));
}


function playing_clicked(e){
    let element = e.target;
    if(element.nodeName == 'LI'){
        let audio = document.querySelector(`audio[data-key="${element.getAttribute('data-key')}"]`);
        audio.currentTime = 0; 
        audio.play();
        arrCircle.forEach(circ => circ.classList.add('playing'));
    }
    if(element.parentNode.nodeName == 'LI'){
        let audio = document.querySelector(`audio[data-key="${element.parentNode.getAttribute('data-key')}"]`);
        audio.currentTime = 0; 
        audio.play();
        arrCircle.forEach(circ => circ.classList.add('playing'));
    }
}

function removeTransition(e){
    e.target.classList.remove('playing');

}

document.addEventListener('mousedown', playing_clicked);
document.addEventListener('keydown', playing);
document.addEventListener('keyup', function(){
    arrList.forEach(cur => cur.classList.remove(last_class_used));
});