/*
Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают представление IP-адреса
из десятичного формата с точками в 32-битное число в десятичной форме и обратно.

Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp() наоборот: принимает на вход число, а возвращает строку.

Примеры
ipToInt('128.32.10.1'); // 2149583361 '128032100001'
ipToInt('0.0.0.0'); // 0
ipToInt('255.255.255.255'); // 4294967295

intToIp(2149583361); // '128.32.10.1'
intToIp(0); // '0.0.0.0'
intToIp(4294967295); // '255.255.255.255'

 */

import _ from "lodash";

const ipToInt = (ip) => {
  const res = ip
    .split('.')
    .map((item) => parseInt(item, 10))
    .map((item) => item.toString(16))
    .map((item) => item.padStart(2, '0'));
  
  const temp = `0x${res.join('')}`;
  
  return parseInt(temp);
};

const intToIp = (number) => {
  const temp = number.toString(16);
  const res = [..._.chunk(temp, 2)];
  return res
    .map((item) => item.join(''))
    .map((item) => parseInt(item, 16))
    .map((item) => item.toString())
    // .map((item) => item.padStart('0'))
    .join('.')
};

export { ipToInt, intToIp };

console.log(
  
  // ToDo
  intToIp(167801600), // '10.0.115.0'
  intToIp(0), // '0.0.0.0'
  intToIp(32), // '0.0.0.32'
  
  
  // ipToInt('10.0.115.0'), // 167801600
  // ipToInt('128.32.10.1'), //214 958 33 61
  // ipToInt('255.255.255.255'), // 4294967295


);
