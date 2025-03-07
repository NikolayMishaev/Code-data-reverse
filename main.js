"use strict";

/* 

данные на входе: массив
данные на выходе: массив

псевдокод:
создать массив результата
создать массив группы
проходить циклом по входному массиву и в цикле:
на каждой итерации добавить в массив группы текущий элемент
проверить, если текущая итерация кратна 8, то добавить массив группы в массив результата
развернуть массив результата
    соединить в один массив

*/

const dataReverse = (data) => {
  const getGroups = (array) => {
    const result = [];
    let group = [];

    array.forEach((el, i) => {
      group.push(el);
      if ((i + 1) % 8 === 0) {
        result.push(group);
        group = [];
      }
    });

    return result;
  };

  const getArray = (arrayArrays) =>
    String(arrayArrays)
      .split(",")
      .map((el) => (el ? +el : null));

  return getArray(getGroups(data).reverse());
};

console.log(dataReverse([1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,1,
    1,0,1,0,1,0,1,0]))