// @ts-check

export default () => {
  // BEGIN (write your solution here)
  /*
  По клику на таб, код должен
    1 извлечь id,
    2 найти соответствующий элемент и
    3 сделать его активным, не забыв при этом
    4 снять класс active с таба и блока, которые были активными до клика.
    
    Подсказки
      В коде можно использовать глобальный объект document
      Селектор по data элементам [data-toggle], например: document.querySelectorAll('h1[data-key]');
      Получить необходимый data-атрибут можно через dataset
      Постарайтесь не завязываться на конкретные идентификаторы и элементы
      Если вы используете другой метод извлечения списка, например document.getElementsByClassName(), то обратите внимание, что он возвращает HTMLCollection, а не NodeList. HTMLCollection не поддерживает метод forEach(), однако вы можете привести такой список к массиву, например используя Array.from()
      Переключение должно работать на любой реализации: с использованием button и на div
   
   
        1 Сначала найти корневой элемент текущего меню, того, по элементу которого произошел клик.
        2 Найти активную ссылку внутри текущего меню и убрать с нее активность.
        links.forEach((link) => {
            link.addEventListener('click', () => {
              // closest находит ближайшего родителя по нужному селектору
              // Наше меню имеет класс .nav
              const nav = link.closest('.nav');
              
              // Находим активный элемент внутри меню
              const activeElement = nav.querySelector('.active');
              activeElement.classList.remove('active');
              link.classList.add('active');
        });
});

   */
  
  // выбрали все кнопки по значению атрибута
  const links = document.querySelectorAll('[data-bs-toggle="tab"]');
  // css - как выбрать элемент через поиск по селектору
  
  
  // links.forEach((link) => []
  // );
  
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      
      links.forEach((link) => {
        // active - затеретьу - потом решить
        
      });
      
      // document.querySelector(); // найти активную кнопку = там шде в кладссе актив
      const activeButton = document.querySelector('.active'); // запрос ?
      // выборку элементов - проверить - +
      
      activeButton.classList.remove('active');
      
      
      
      
      
      
      // прописать класс active в соотв div прописать
      //
      // e.target // элемент по которому прозошел клик - туду
      
      link.classList.add('active');
      
      
      // снести текущие active - у видимого блока убрать видимость
      // ? как определить сие?
      // link.classList.remove();
      
      
      const selectorTargetId = link.getAttribute('data-bs-target');
  
      // document.querySelector(); // найти активную кнопку = там шде в кладссе актив

      // ToDo: Fixed
      const activeTab = document.querySelector('#user-tabContent .active');
      // по css  проверить выборку
      // выборку элементов - проверить - +
      // правила выбборки элементов в CSS - синтаксис и символы комбинации
      
      // очистили текущий список от предыдущих активных классов
      activeTab.classList.remove('active');
      
      // определить и привязать соответствущий таб
      // link - целевой объект к которому нужно привязать соответствующий ему таб
      // data-bs-target  - i e selectorTargetId      и id
      const targetTab = document.querySelector(selectorTargetId);
      targetTab.classList.add('active');
      
      
    
  

      
    });
    
  });
  
  
  // END
};

/*
Questions
1 what is data-toggle ?

2 Uncaught TypeError: Failed to resolve module specifier "core-js/stable/index.js". Relative references must start with either "/", "./", or "../".


 */
