
//
const solution = (href) => {
  window.location.href = href;
  const { userAgent } = window.navigator;
  const [agentName] = userAgent.split(' ');
  return `${agentName} ${window.location.href}`;
};

//
const data = document.body.innerHTML.trim().split('\n');
const result = data.map((item) => `<p>${item}</p>`);
document.body.innerHTML = result.join('\n');

// 
element.tagName === 'P'

document.documentElement;

document.documentElement.childNodes;

const list = Array.from(nodes);


// DOM SELECTING 
export default (document) => {
  // BEGIN (write your solution here)
  const result = {
    'title': undefined,
    'description': undefined,
    'items': [],
  };
  const data = document.body.getElementsByClassName('content');


  // get h1
  result['title'] = document.querySelector('h1').textContent;
  // or: document.querySelector('h1').textContent;

  // get class description
  result['description'] = document.getElementsByClassName('description')[0].textContent;


  // get elems of class links 
  const links = document.getElementsByClassName('links')[0]; //.querySelectorAll('h2');

  const titles = links.querySelectorAll('a');
  const descriptions = links.querySelectorAll('p');

  const articles = [
    {
      'title': titles[0].textContent, 
      'description': descriptions[0].textContent
    }, 
    {
      'title': titles[1].textContent,
      'description': descriptions[1].textContent
    },
  ];

  result['items'] = articles;

  // getElementsByTagName('a')[0].textContent

  // document.getElementsByTagName('div')

  // document.getElementsByClassName('links')[0].getElementsByTagName('a')[0].textContent
  return result;
}

/*
  // BEGIN
  const root = document.querySelector('.content');

  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;
  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;

  const itemElements = root.querySelectorAll('.links div');
  const items = Array.from(itemElements).map((element) => {
    const titleElement = element.querySelector('a');
    const descriptionElement = element.querySelector('p');

    return {
      title: titleElement.innerHTML,
      description: descriptionElement.innerHTML,
    };
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
  // END

 * */


const prettify =  (document) => {
  const items = document.querySelectorAll('div');
  const elems = Array.from(items);
  
  elems.map((elem) => {
    Array.from(elem.childNodes).map((child) => {
      
      if (child instanceof Text) {
        const input = child.textContent.trim();
        if(input !== '') {
            const p = document.createElement('p');
            p.textContent = child.textContent.trim();
            child.replaceWith(p); 
          }
        }
      });
  });
};

/*
export default (document) => {
  const divs = [...document.getElementsByTagName('div')];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
 * */

// classNames to camelCase
const converToCamelCase = (document) => {
  const selectorsArr = [...document.body.querySelectorAll('*')];
  selectorsArr.map((item) => {
    item.className = item
      .className.toString().split(' ').map(i => camelCase(i)).join(' ');
  });
};
/* ATTEMPTS: 


get elems in doc - all tags?

get arr of tags:
const tagsArr = [...document.body.getElementsByTagName('*')];
tagsArr[1]
?


const selectorsRaw = document.body.querySelectorAll('*');
selectors.forEach()
not works:
selectorsRaw.replace('a', 'AAAAAA')

getClassList ?

?
document.body.classList

?
document.body.querySelector("div");

not work
[...document.querySelectorAll('*')].map(i => [...i.classList]);
document.querySelectorAll('*').map(i => [...i.classList]);

selectorsArr.map)()
selectorsArr.map(i => [...i.classList])

selectorsArr[2].classList.value


[...new Set([...document.querySelectorAll('*')].map(i=>[...i.classList]).flat(Infinity).sort())];

const span = document.querySelector("span");
const classes = span.classList;
const result = classes.replace("c", "z"); 

QUESTIONS: 
1 разница между  getElementsByTagName и  getElementsByTagName ?
2 почему document.body.classList не отдает список классов в теле ?
*/

/*
TEACHERS VERSION:
export default (document) => {
  const allNodes = [...document.body.getElementsByTagName('*')];
  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};
*/

/*
- обращаться через document.body.
- getElementsByTagName('*') - все объекты и их передавать в массив для последующего обхода.
- обход коллекции (Массива) через метод forEach и изменении объекта
- элемент при обходе коллекции может отдавать classList,
- в свою очередь: у каждого такого списка классов может вызываться метод forEach

*/

// button and click and it - add class 
export default () => {
  // BEGIN (write your solution here)
  const button = document.getElementById('alert-generator');
  let cnt = 0;
  button.addEventListener('click', 
    () =>  {  
      // add  class:  document.add class with value
      const item = document.body.getElementsByClassName('alerts m-5');

      const newDiv = document.createElement("div");
      newDiv.className = 'alert alert-primary'
      cnt += 1;
      const newContent = document.createTextNode(`Alert ${cnt}`);
      newDiv.appendChild(newContent);

      item[0].prepend(newDiv);
    }
  );
  // END
};

/*
ToDo:
1) использовать document.querySelector('.PART OF CLASS NAME') для поиска элементов
2) для добавления тега document.createElement('NAME')
3) для добавления класса .classList.add()
4) для добавления внутри контейнера - метод .prepend
5) для текстового блока - .textContent = 'CONTENT SOME'

 */

/*
// BEGIN
  const button = document.getElementById('alert-generator');
  const alertsBox = document.querySelector('.alerts');
  let i = 1;
  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.textContent = `Alert ${i}`;

    alertsBox.prepend(alert);

    i += 1;
  });
  // END
 */



