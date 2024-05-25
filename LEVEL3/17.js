let 마우스다운좌표 = 0;
let mousedown = false;
let slideBox = document.querySelectorAll('.slide-box');
let slideBg = document.querySelectorAll('.slide-bg')[0];

document.querySelectorAll('img').forEach(function (data, i) {
  data.setAttribute('draggable', false);
});

slideBox.forEach(function (data, i) {
  data.addEventListener('mousedown', function (e) {
    mousedown = true;
    마우스다운좌표 = e.clientX;
  });
});

slideBox[0].addEventListener('mousemove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.clientX - 마우스다운좌표;
    slideBgTransform(움직임);
    if (움직임 > 0) {
      slideBgTransform(0);
    }
  }
});

slideBox[1].addEventListener('mousemove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.clientX - 마우스다운좌표;
    slideBgTransform(-500 + 움직임);
  }
});

slideBox[2].addEventListener('mousemove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.clientX - 마우스다운좌표;
    slideBgTransform(-1000 + 움직임);
    if (-움직임 > 0) {
      slideBgTransform(-1000);
    }
  }
});

mouseUpEvent(0, -500, 1, 0);
mouseUpEvent(1, -1000, 1, 0);
mouseUpEvent(2, -500, -1, -1000);

slideBox.forEach(function (data, i) {
  data.addEventListener('touchstart', function (e) {
    mousedown = true;
    마우스다운좌표 = e.touches[0].clientX;
  });
});

slideBox[0].addEventListener('touchmove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.touches[0].clientX - 마우스다운좌표;
    slideBgTransform(움직임);
    if (움직임 > 0) {
      slideBgTransform(0);
    }
  }
});

slideBox[1].addEventListener('touchmove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.touches[0].clientX - 마우스다운좌표;
    slideBgTransform(-500 + 움직임);
  }
});

slideBox[2].addEventListener('touchmove', function (e) {
  if (mousedown === true) {
    let 움직임 = e.touches[0].clientX - 마우스다운좌표;
    slideBgTransform(-1000 + 움직임);
    if (-움직임 > 0) {
      slideBgTransform(-1000);
    }
  }
});

touchEndEvent(0, -500, 1, 0);
touchEndEvent(1, -1000, 1, 0);
touchEndEvent(2, -500, -1, -1000);

function slideBgTransform(num) {
  slideBg.style.transform = `translateX(${num}px)`;
}

function mouseUpEvent(index, ifNum, ifSignNum, elseNum) {
  slideBox[index].addEventListener('mouseup', function (e) {
    mousedown = false;
    if (ifSignNum * (e.clientX - 마우스다운좌표) < -100) {
      slideBgTransform(ifNum);
    } else {
      slideBgTransform(elseNum);
    }
  });
}

function touchEndEvent(index, ifNum, ifSignNum, elseNum) {
  slideBox[index].addEventListener('touchend', function (e) {
    mousedown = false;

    if (ifSignNum * (e.changedTouches[0].clientX - 마우스다운좌표) < -100) {
      slideBgTransform(ifNum);
    } else {
      slideBgTransform(elseNum);
    }
  });
}
