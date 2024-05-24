document.querySelectorAll('img').forEach(function (data, i) {
  data.setAttribute('draggable', false);
});

//slide-box 마우스다운한 상태로 마우스무브하면
//드래그한 거리만큼 slide-bg움직임
//마우스업할떄 드래그한거리가 100이상이면 다음사진넘어감
let 마우스다운좌표 = 0;
let mousedown = false;

document
  .querySelectorAll('.slide-box')[0]
  .addEventListener('mousedown', function (e) {
    mousedown = true;
    마우스다운좌표 = e.clientX;
  });
document
  .querySelectorAll('.slide-box')[0]
  .addEventListener('mousemove', function (e) {
    if (mousedown === true) {
      let 움직임 = e.clientX - 마우스다운좌표;
      document.querySelectorAll(
        '.slide-bg'
      )[0].style.transform = `translateX(${움직임}px)`;
      if (움직임 > 0) {
        document.querySelectorAll('.slide-bg')[0].style.transform = `none`;
      }
    }
  });
document
  .querySelectorAll('.slide-box')[0]
  .addEventListener('mouseup', function (e) {
    mousedown = false;
    if (e.clientX - 마우스다운좌표 < -100) {
      document.querySelectorAll(
        '.slide-bg'
      )[0].style.transform = `translateX(-500px)`;
    } else {
      document.querySelectorAll(
        '.slide-bg'
      )[0].style.transform = `translateX(0)`;
    }
  });
