const 咖啡介绍图容器 = document.getElementsByClassName("咖啡介绍图容器")[0];
const 咖啡介绍图组 = 咖啡介绍图容器.getElementsByClassName("咖啡介绍图");
const 箭头组 = document.getElementsByClassName("箭头");
const 左箭头 = 箭头组[0];
const 右箭头 = 箭头组[1];
const 指示器组 = document.getElementsByClassName("指示器");
指示器组[0].style.backgroundColor = "#fff";
咖啡介绍图组[0].style.opacity = "1";

let 当前索引 = 0;
let 临时索引 = 当前索引;

const 自动刷图间隔时间 = 3000;
let 自动向后刷图 = setInterval(向后刷图, 自动刷图间隔时间);

右箭头.addEventListener("click", () => {
  向后刷图();
  重置自动向后刷图();
});
左箭头.addEventListener("click", () => {
  向前刷图();
  重置自动向后刷图();
});

function 向后刷图() {
  if (当前索引 < 咖啡介绍图组.length - 1) {
    当前索引++;
  } else {
    当前索引 = 0;
  }

  咖啡介绍图组[当前索引].style.opacity = "1";
  咖啡介绍图组[临时索引].style.opacity = "0";
  指示器组[当前索引].style.backgroundColor = "#fff";
  指示器组[临时索引].style.backgroundColor = "#fff5";
  临时索引 = 当前索引;
}

function 向前刷图() {
  if (当前索引 > 0) {
    当前索引--;
  } else {
    当前索引 = 咖啡介绍图组.length - 1;
  }

  咖啡介绍图组[当前索引].style.opacity = "1";
  咖啡介绍图组[临时索引].style.opacity = "0";
  指示器组[当前索引].style.backgroundColor = "#fff";
  指示器组[临时索引].style.backgroundColor = "#fff5";
  临时索引 = 当前索引;
}

function 重置自动向后刷图() {
  clearInterval(自动向后刷图);
  自动向后刷图 = setInterval(向后刷图, 自动刷图间隔时间);
}
