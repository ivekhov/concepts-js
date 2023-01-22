
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
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${htmlEscape(email)}</div>
      <div>Name: ${htmlEscape(name)}</div>
      <div>Comment: ${htmlEscape(comment)}</div>
    `;
  
    form.replaceWith(newDiv);
  
  });
  
};


/*
example:

// BEGIN
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
// END
 */
