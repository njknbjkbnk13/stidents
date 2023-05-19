function evaluateScore() {
    let score = document.getElementById("score").value;
    let result = document.getElementById("result");
    if (score >= 85 && score <= 100) {
      result.textContent = "ممتاز ربنا يبارك له ";
    }
     else if (score >= 75 && score <= 84) {
      result.textContent = "جيد جداً"; 
    }
    else if (score >= 65 && score <= 74) {
        result.textContent = "جيد جداً"; 
      }
      else if (score >= 65 && score <= 74) {
        result.textContent = "جيد "; 
      }
      else if (score >= 50 && score <= 64) {
        result.textContent = "متوسط  "; 
      }
       else {
      result.textContent = "ضعيف";
    }
  }
  let btn = document.getElementById('btn');
  let txt = document.getElementById('txt')
  function changeColor(color){
document.body.style.background = color;
btn.style.background = color;
txt.style.borderColor = color

document.querySelectorAll('span') .forEach(function (item) {
  item.classList.remove('active');
}) 
event.target.classList.add('active');
}

