
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
