
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



