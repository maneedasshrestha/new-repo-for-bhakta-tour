const allBtns = document.querySelectorAll('.drawer-button');
    const homeBtn = document.getElementById('home-button');
    const chatbotBtn = document.getElementById('chatbot-button');
    const scanBtn = document.querySelector('.scan-button');
    const userBtn = document.querySelector('.user-button');
    const searchBtn = document.querySelector('.search-button');

    const homeBtnClass = document.querySelector('.home-button');
    const searchBtnClass = document.querySelector('.search-button');
    const chatbotBtnClass = document.querySelector('.chatbot-toggler');
    const scanBtnClass = document.querySelector('.scan-button');
    const userBtnClass = document.querySelector('.user-button');

    homeBtn.addEventListener('click', () => {
      removeActive();
      homeBtnClass.classList.toggle('active');
      window.location.href = 'homepage.html';
    });
    searchBtn.addEventListener('click', () => {
      removeActive();
      searchBtnClass.classList.toggle('active');
      window.location.href = 'attraction.html';
    });
    
    scanBtn.addEventListener('click', () => {
      removeActive();
      scanBtnClass.classList.toggle('active');
    });
    userBtn.addEventListener('click', () => {
      removeActive();
      userBtnClass.classList.toggle('active');
      window.location.href = 'login.html';
    });

    function removeActive() {
      allBtns.forEach(btn => {
        btn.classList.remove('active');
      });
    }

    function active_search_button(){
      removeActive();
      searchBtnClass.classList.toggle('active');
    }
    
    function active_home_button(){
      removeActive();
      homeBtnClass.classList.toggle('active');
    }
    function active_profile_icon(){
      removeActive();
      userBtnClass.classList.toggle('active');
    }