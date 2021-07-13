document.addEventListener('DOMContentLoaded', () => {

  /* Choose category logic start */
  let items = document.querySelectorAll('li[name]');

  for (let i of items) {
    i.addEventListener('click', (e) => {
      const li = i.children[3].children;
      let checkLi = false;
      for (let j = 0; j < li.length; j++) {
        if (e.target === li[j]) {
          checkLi = true;
        }
      }
      if (!checkLi) return;
      for (let j = 0; j < li.length; j++) {
        li[j].classList.remove('active');

      }

      e.target.classList.add('active');
      i.children[2].textContent = e.target.textContent;
      i.children[1].checked = false

    })
  }

  document.body.addEventListener('click', (e) => {
    const path = e.path || e.composedPath();
    // console.log('path = ', path)
    for (let i = 0; i < items.length; i++) {
      if (!path.includes(items[i])) {
        items[i].children[1].checked = false
      }
    }
  })

  /* Choose category logic end */

  /* Favourite vacancy logic start */

  const navigations = document.querySelectorAll('.header .header-menu');
  const offers = document.querySelectorAll('.offers-container .offer');
  const offers_like_input = document.querySelectorAll('.offer .like-data input');

  for (let i of navigations) {
    i.addEventListener('click', () => {
      for (let k of navigations) {
        k.classList.remove('active');
      }
      for (let offer of offers) {
        offer.style.display = 'flex';
      }
      i.classList.add('active');
      if (i.textContent === 'Избранные вакансии') {
        for (let like = 0; like < offers_like_input.length; like++) {
          if (!offers_like_input[like].checked) {
            offers[like].style.display = 'none';
          }
        }
        console.log(offers_like_input[0].checked)
      }
    })
  }

  /* Favourite vacancy logic end */

  /* display description on the tablet, hide offers start */

  const category_menu = document.querySelector('.container > .category-menu');
  const offer_description = document.querySelector('.main-content-container .description-container');
  const offers_container = document.querySelector('.main-content-container .offers-container');
  const close_description_button = document.querySelector('.description-container .close-description');

  for (let i of offers) {
    i.addEventListener('click', () => {
      if (window.outerWidth < 869) {
        category_menu.style.display = 'none';
        offer_description.style.display = 'block';
        offers_container.style.display = 'none';
      }
    })
  }

  close_description_button.addEventListener('click', () => {
    category_menu.style.display = 'flex';
    offer_description.style.display = 'none';
    offers_container.style.display = 'block';
  })

  /* display description on the tablet, hide offers end */

  /* prevent bubling like-offer start */

  const offers_like = document.querySelectorAll('.offer .like-data label');

  for (let i of offers_like) {
    i.addEventListener('click', (e) => {
      e.stopPropagation();
      // e.preventDefault();
    })
  }

  /* prevent bubling like-offer end */

  /* tablet filters start */

  const filter_li_input = document.querySelector('#FILTERS');
  const drop_down_list = document.querySelectorAll('.drop-down-list');
  const salary_category = document.querySelector('.category.salary-category');
  const category_overflow = document.querySelector('.filter-overflow');

  filter_li_input.addEventListener('click', () => {
    const flag = filter_li_input.children[0].checked;
    for (let i of drop_down_list) {
      i.style.display = flag ? 'block' : 'none';
    }
    if (window.outerWidth < 860) {
      salary_category.style.display = flag ? 'flex' : 'none';
    }
    category_overflow.style.display = flag ? 'block' : 'none';
  });

  /* tablet filters end */

  const burg = document.querySelector('.header .burger');
  const header_menu_items = document.querySelector('.header .header-menu-list');


  burg.addEventListener('click', () => {
    if (burg.children[0].checked) {
      header_menu_items.style.right = "0";
    } else {
      header_menu_items.style.right = "-100%";

    }
  })
});