/*
hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00'

 */
import _ from 'lodash';

const hexToRgb = (color) => {
  // const code = {};
  // code['r'] = parseInt(color.slice(1, 3), 16);
  // code['g'] = parseInt(color.slice(3, 5), 16);
  // code['b'] = parseInt(color.slice(5, 7), 16);
  
  const res = [..._.chunk(color.slice(1), 2)];
  
  const temp = res
    .map((item) => item.join(''))
    .map((item) => parseInt(item, 16));
  
  const codes = ['r', 'g', 'b'];
  
  return codes.reduce((acc, index, item) => {
    return {
      ...acc, [index]: temp[item]
    }
  }, {});
};


const rgbToHex = (...color) => {
  const data = [...color]
    .map((item) => item.toString(16))
    .map((item) => item.padStart(2, '0'))
    .join('');
  
  return `#${data}`;
};

console.log(
  hexToRgb('#24ab00'), // { r: 36, g: 171, b: 0 }
  rgbToHex(247, 0, 222), // '#24ab00'
)

/*
// BEGIN
export const rgbToHex = (r, g, b) => {
  const hex = [r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
};

export const hexToRgb = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((channel) => channel.join(''))
    .map((channel) => parseInt(channel, 16));
  return { r, g, b };
};
// END
 */
