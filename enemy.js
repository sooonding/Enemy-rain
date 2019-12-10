// class Enemy {
//     constructor(){};
// }

//--------------class 아래----------------------------

function all() {
  let enemy = document.createElement("div");
  let bgSize = 700;
  enemy.className = "enemy";
  bg.appendChild(enemy); //고스트 생성

  // 얜 필요가 없어. 왜냐면 랜덤한 값을 뽑아 내야 하는것이기 때문에.
  //let enemyX = parseInt(enemyDown.getPropertyValue("right"));

  let bgMaxMin = Math.floor(Math.random() * bgSize); //배경화면의 랜덤값에서 고스트가 나오게 하자.

  enemy.style.left = bgMaxMin + "px";

  setInterval(function(){
      ghost(enemy);
  }, 100);

}
setInterval(all, 3000);

function ghost(thisEnemy) {
    let enemyStyle = getComputedStyle(thisEnemy);
    let enemyTop = parseInt(enemyStyle.getPropertyValue('top'));
    let heroTop = parseInt(heroStyles.getPropertyValue('top'));
    let enemyLeft = parseInt(enemyStyle.getPropertyValue('left'));
    let heroLeft = parseInt(heroStyles.getPropertyValue('left'));
    thisEnemy.style.top = enemyTop + 10 + 'px';

    if(enemyTop >= 560) {
        thisEnemy.style.top = 560 + 'px';
        thisEnemy.style.display = "none";
        // thisEnemy.style.backgroundPosition = '-45px -4px';
        bg.removeChild(thisEnemy);
    }else if(enemyTop + 30 > heroTop && (heroLeft-enemyLeft)**2 < 35**2){
        console.log(enemyTop)
        console.log(heroTop)
        thisEnemy.style.backgroundPosition = '-45px -4px';
    }






  //얘넨 다른 함수에 변수가 선언 되어있으니까 쿼리 셀렉터로 뽑아다가 쓰자!
//   let enemySelect = document.querySelectorAll(".enemy");

//   for (let i = 0; i < enemySelect.length; i++) {
//     let enemyDown = getComputedStyle(enemySelect[i]);
//     let enemyValue = parseInt(enemyDown.getPropertyValue("top"));
//     let heroHeight = parseInt(heroStyles.getPropertyValue('top'));
//     console.log(heroHeight);
//     let heroLeft = parseInt(heroStyles.getPropertyValue('left'));

//     // console.log(enemyValue)
//     enemySelect[i].style.top = enemyValue + 1 + "px";
//     //540
//     if (enemyValue === 550) {
//         enemySelect[i].style.top = 550 + "px";
//         enemySelect[i].style.display = "none";
//         bg.removeChild(enemySelect[i]);
//     }else if(enemyValue + heroLeft === 37 * 2) {
//         //enemySelect[i].style.bottom = heroHeight + 'px';
//         enemySelect[i].style.backgroundPosition = '-45px -4px';
//     }
//   }
}

// function match() {
//     let enemySelect1 = document.querySelectorAll(".enemy");
//     for(let i = 0; i < enemySelect1.length; i++){
//         let enemyMatch = getComputedStyle(enemySelect1[i]);
//         let heroHeight = parseInt(heroStyles.getPropertyValue('height'));
//         let enemyBottomValue = parseInt(enemyMatch.getPropertyValue("bottom"));
//         console.log(heroHeight);
//         console.log(enemyBottomValue);

//         if(enemyBottomValue === heroHeight) {
//             enemySelect[i].style.backgroundPosition = "-45px -4px";
//         }
//     }
// }
