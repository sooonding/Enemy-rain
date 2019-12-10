// class Hero {
//     constructor(aaaa) {
//     }
// }


//전역으로...
//key code = left = 37, right = '39', back = '38';
const bg = document.querySelector('#bg');
const hero = document.querySelector('.hero');

//css 속성 값을 가져오기 위한 getComputedStyle
let heroStyles = getComputedStyle(hero);

function move (e) {
    /*css 값이 string 타입으로 되어 있으니 number값으로
    바꿔주자!!!
    */
    let leftValue = parseInt(heroStyles.getPropertyValue('left'));

    if(e.keyCode === 37){

    hero.style.backgroundPosition = '-75px 0px';
    hero.style.left = leftValue - 10 + 'px';

        if(leftValue ===  Math.min(leftValue)){
        hero.style.left = Math.min(leftValue);
        }

    }else if(e.keyCode === 39){

    hero.style.backgroundPosition = '-99px 0px';
    hero.style.left = leftValue + 10 + 'px';

        if(leftValue === 760){
            hero.style.left = 760 + 'px';
        }

    }else if(e.keyCode === 38){

    hero.style.backgroundPosition = '-35px 0px';
    }else {

    hero.style.backgroundPosition = '0px 0px';
    }
}

window.addEventListener('keydown',move);


