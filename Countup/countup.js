function countingType1(num){
  const element = document.querySelector('#number1')
  if(num == 0){
    element.innerHTML = '0';
  } else {
    /* 입력한 숫자를 33번에 걸쳐 0부터 올림. */
    const each = Math.ceil(num/33);
    let time = 0
    for(let i=0; i<=num; i+=each){
      setTimeout(() => {
        element.innerHTML = i;
      }, 20*time);
      /* 딱 떨어지지 않는 숫자를 마지막에 그 숫자로 만들어주기 위함 */
      if(i+each>this.maxNum1){
        setTimeout(() => {
          element.innerHTML = num;
        }, 20*(time+1));
      }
      time++;
    }
  }
}