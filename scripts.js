let darkMode = true;
document.body.classList.add("dark");

const IMG_DARK_ASSET = 'assets/outline_dark_mode_black_24dp.png'; 
const IMG_LIGHT_ASSET = 'assets/outline_light_mode_white_24dp.png'; 

function toggleDarkMode() {
  darkMode = !darkMode;
  const imgDarkButton = getById('dark_button_image');

  if (darkMode) {
    document.body.classList.add("dark");
    imgDarkButton.setAttribute('src',IMG_LIGHT_ASSET);
} else {
    document.body.classList.remove("dark");
    imgDarkButton.setAttribute('src',IMG_DARK_ASSET);
  }
}

function selectCategory(el){

  // console.log(el)
  // const categorySelected = el.getAttribute('category');
  el.classList.add('active')
  const categories = document.getElementsByClassName('categories_item');

  
  for (let index = 0; index < categories.length; index++) {
    const category = categories.item(index);
    
    if (el != category) {
      category.classList.remove('active')
    }
  }
  

}

function getById(id) {
return document.getElementById(id);
}
