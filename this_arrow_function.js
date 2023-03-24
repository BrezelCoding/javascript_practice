// 1. 간단한 메소드 만들기
let 사람 = {
  name: '손흥민',
  sayHi: () => console.log(`안녕 나는 ${사람.name}`),
};

사람.sayHi(); //안녕 나는 손흥민

// 2. 오브젝트 내의 데이터를 전부 더해주는 메소드만들기
let 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = () => {
  let sum = 0;
  자료.data.forEach(function (a) {
    sum += a;
  });
  console.log(sum);
};

자료.전부더하기();
