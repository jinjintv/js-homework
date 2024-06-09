
const user = {
  id:'asd@naver.com',
  pw:'iloveyou123!@'
}

function getValueAtObject(obj,key){
  if(obj.hasOwnProperty(key)){
    return obj[key]
  } else { throw new Error('입력값이 올바르지 않음')}
}
console.log(getValueAtObject(user,'id'))
console.log(getValueAtObject(user,'pw'))
console.log(getValueAtObject(user,'email'))

function getNumberAtArray(arr,index){
  if(!Array.isArray(arr)){
    throw new Error('배열이 아님')
  }
  if(index < 0 || index >= arr.length){
    throw new Error('존재하지 않는 인덱스임')
  }
  return arr[index]
}

const numbers = [10, 20, 30, 40, 50]

console.log(getNumberAtArray(numbers, 1))
console.log(getNumberAtArray(numbers, 7))

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











