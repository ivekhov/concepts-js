// @ts-check

import { htmlEscape } from 'escape-goat';

// BEGIN (write your solution here)

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  formData.get();
  [...formData.values()];
  [...formData.entries()];
  Object.fromEntries(formData);
  
  const newHtml = document.createElement('div');
  
});

/*
const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const formElement = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
    
  };
  formElement.addEventListener('submit', handle);
};

 */
