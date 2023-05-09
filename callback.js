
// //콜백지옥
setTimeout(function (name) {
      var coffeeList = name
      console.log(coffeeList)
  
      setTimeout(function (name) {
          coffeeList += ', ' + name
          console.log(coffeeList)
  
          setTimeout(function (name) {
              coffeeList += ', ' + name
              console.log(coffeeList)

              setTimeout(function (name) {
                  coffeeList += ', ' + name
                  console.log(coffeeList)
                },
                500,
                '에스프레소',
              )
            },
            500,
            '카페라떼',
          )
        },
        500,
        '카페모카',
      )
    },
    500,
    '아메리카노',
  )

//   //콘솔창

//  아메리카노
//  아메리카노, 카페모카
//  아메리카노, 카페모카, 카페라떼
//  아메리카노, 카페모카, 카페라떼, 에스프레소

//   //기명함수로 변환하는 방법
//   var coffeeList = "";

//   var addEspresso = function (name) {
//     coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(addAmericano, 500, "아메리카노");
//   };
  
//   var addAmericano = function (name) {
//     coffeeList += ", " + name;
//     console.log(coffeeList);
//     setTimeout(addMocha, 500, "카페모카");
//   };
  
//   var addMocha = function (name) {
//     coffeeList += ", " + name;
//     console.log(coffeeList);
//     setTimeout(addLatte, 500, "카페라떼");
//   };
  
//   var addLatte = function (name) {
//     coffeeList += ", " + name;
//     console.log(coffeeList);
//   };
  
//   setTimeout(addEspresso, 500, "에스프레소");

// //콘솔창
// 에스프레소
// 에스프레소, 아메리카노
// 에스프레소, 아메리카노, 카페모카
// 에스프레소, 아메리카노, 카페모카, 카페라떼
  
//   //promise 문법
//   new Promise(function(resolve) {
//   setTimeout(function() {
//     var name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// }).then(function(prevName) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       var name = prevName + ', 아메리카노';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// })


// //Promise 사용
// new Promise(function (resolve) {
//   setTimeout(function () {
//     const name = '에스프레소';
//     console.log(name);
//     resolve(name);
//   }, 500);
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const name = prevName + ', 아메리카노';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const name = prevName + ', 카페모카';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// }).then(function (prevName) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       const name = prevName + ', 카페라떼';
//       console.log(name);
//       resolve(name);
//     }, 500);
//   });
// })


// const addCoffee = function (name) {
//   return function (prevName) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         const newName = prevName ? (prevName + ', ' + name) : name;
//         console.log(newName);
//         resolve(newName);
//       }, 500);
//     });
//   }
// };

// addCoffee('에스프레소')()
//   .then(addCoffee('아메리카노'))
//   .then(addCoffee('카페모카'))
//   .then(addCoffee('카페라떼'));



//   //generator
//  //기본개념 예시
//  function* fn(){
//   console.log(1);
//   yield 1;
//   console.log(2);
//   yield 2;
//   console.log(3);
//   console.log(4);
//   yield 3;
//   return "finish";
//  }

//  const a = fn();
//  a.next();

//  //콘솔창
//   1
//  {"value": 1,"done": false}
//  a.next();
//  2
//  {"value": 2,"done": false}
//  a.next();
//  3
//  4  
//  {"value": 3,"done": false}
//  a.next();
//  {"value": "finish","done": true}

//   //코어 자스 예시 
//   var addCoffee = function (prevName , name) {
//     setTimeout(function () {
//       coffeMaker.next(prevName ? prevName + ', ' + name : name );
//     }, 500);
//   };

  var coffeGenerator = function* () {
    var espresso = yield addCoffee('', '에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso, '아메리카노');
    console.log(americano);
    var mocha = yield addCoffee(americano, '카페모카');
    console.log(mocha);
    var latte = yield addCoffee(mocha, '카페라떼');
    console.log(latte);
  };
  var coffeMaker = coffeGenerator();
  coffeMaker.next();

  // //콘솔창
  // coffeMaker.next();
  // {value: undefined, done: false}
  // 에스프레소
  // 에스프레소, 아메리카노
  // 에스프레소, 아메리카노, 카페모카
  // 에스프레소, 아메리카노, 카페모카, 카페라떼
  // coffeMaker.next();
  // {value: undefined, done: true}

  