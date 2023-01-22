// @ts-check

import { htmlEscape } from 'escape-goat';

// BEGIN (write your solution here)

export default () => {
  // 1 при отправке формы получает из неё данные
  const form = document.querySelector('.feedback-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const email = formData.get('email');
    const name = formData.get('name');
    const comment = formData.get('comment');
    
    // 2 экранирует полученные данные
    // Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется документ
    /*
    <div>
      <p>Feedback has been sent</p>
      <div>Email: test@email.com</div>
      <div>Name: Matz</div>
      <div>Comment: My Comment</div>
    </div>
     */
    
    const newDiv = document.createElement('div');
    
    const newPar = document.createElement('p');
    const parText = document.createTextNode('Feedback has been sent');
    newPar.appendChild(parText);
    
    
    const userEmail = document.createElement('div');
    userEmail.appendChild(document.createTextNode(`Email: ${htmlEscape(email)}`));
    
    const userName = document.createElement('div');
    userName.appendChild(document.createTextNode(`Name: ${htmlEscape(name)}`));
    
    const userComment = document.createElement('div');
    userComment.appendChild(document.createTextNode(`Comment: ${htmlEscape(comment)}`));
    
    newDiv.append(newPar);
    newDiv.append(userEmail);
    newDiv.append(userName);
    newDiv.append(userComment);
    
    // document.body.appendChild(newDiv);
    form.replaceWith(newDiv);
    
  });
  
};

/*Q
1 в браузере часто вижу ошибку : Uncaught SyntaxError: The requested module '/src/application.js' does not provide an export named 'default' (at index.js:6:8)
что с ней нужно делать?

 */




/*

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  formData.get();
  [...formData.values()];
  [...formData.entries()];
  Object.fromEntries(formData);
  
  const newHtml = document.createElement('div');

-----

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
