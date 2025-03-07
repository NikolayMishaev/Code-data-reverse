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
  const DividerIntoGroupsOfEightElements = (data) => {
    const result = [];
    let groupOfEight = [];

    data.forEach((el, i) => {
      groupOfEight.push(el);
      if ((i + 1) % 8 === 0) {
        result.push(groupOfEight);
        groupOfEight = [];
      }
    });

    return result;
  };

  const combineGroupsIntoArray = (arrayArrays) =>
    String(arrayArrays)
      .split(",")
      .map((el) => (el ? +el : null));

  const groupedData = DividerIntoGroupsOfEightElements(data);
  const reversedGroupedData = groupedData.reverse();
  return combineGroupsIntoArray(reversedGroupedData);
};

console.log(dataReverse([1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,1,
    1,0,1,0,1,0,1,0]))