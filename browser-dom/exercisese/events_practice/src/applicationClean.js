// @ts-check

export default () => {
  
  const links = document.querySelectorAll('[data-bs-toggle="tab"]');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      
      const activeButton = document.querySelector('#user-tab .active');
      activeButton.classList.remove('active');
      link.classList.add('active');
      const selectorTargetId = link.getAttribute('data-bs-target');
      
      const activeTab = document.querySelector('#user-tabContent .active');
      activeTab.classList.remove('active');
      
      const targetTab = document.querySelector(selectorTargetId);
      targetTab.classList.add('active');
    });
  });
  
  
  const messageLinks = document.querySelectorAll('[data-bs-toggle="pill"]');
  
  messageLinks.forEach((messLink) => {
    messLink.addEventListener('click', (e) => {
      const activeButton = document.querySelector('#appTab .active');
      activeButton.classList.remove('active');
      
      messLink.classList.add('active');
      
      // грязный хак, фуу
      // const activeTab = document.getElementsByClassName("tab-pane active")[1];
      
      // Better
      const activeTab = document.querySelector(".mt-5 > .tab-content > .active");
      activeTab.classList.remove('active');
      
      
      const selectorTargetId = messLink.getAttribute('data-bs-target');
      const targetTab = document.querySelector(selectorTargetId);
      targetTab.classList.add('active');
    });
  });
  
};
