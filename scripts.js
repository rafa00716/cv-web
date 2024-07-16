
const IMG_DARK_ASSET = "assets/images/outline_dark_mode_black_24dp.png";
const IMG_LIGHT_ASSET = "assets/images/outline_light_mode_white_24dp.png";
const IMG_DARK_PROFILE = "assets/images/avatar_profile_reverencia.png";
const IMG_LIGHT_PROFILE = "assets/images/avatar_profile.png";

let darkMode = getDarkMode();

init();

function init(){
  setDarkMode(darkMode);
  refreshContent();

  const body = document.body;
  setTimeout(() => {
    body.classList.add("show");
  }, 200);
}

function getDarkMode(){
  const theme = localStorage.getItem('theme');
  return (theme && theme === 'dark');
}


function setDarkMode(dark) {
    const imgDarkButton = getById("dark_button_image");
    const imgProfile = getById("profile_image");
    imgProfile.classList.remove("visible");

    if (dark) {
      localStorage.setItem('theme','dark');
      document.body.classList.add("dark");
      imgDarkButton.setAttribute("src", IMG_LIGHT_ASSET);
      imgProfile.setAttribute("src", IMG_LIGHT_PROFILE);
    } else {
      localStorage.setItem('theme','light');
      document.body.classList.remove("dark");
      imgDarkButton.setAttribute("src", IMG_DARK_ASSET);
      imgProfile.setAttribute("src", IMG_DARK_PROFILE);
    }

    imgProfile.classList.add("visible");
}

function toggleDarkMode() {
  darkMode = !darkMode;
  setTimeout(() => {
    setDarkMode(darkMode)
  }, 200);
}

function getById(id) {
  return document.getElementById(id);
}

function toggleSidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  const profile_photo = document.getElementsByClassName("profile_photo")[0];

  sidebar.classList.toggle("close");
  const menu_btn = getById("menu_btn");
  switch (menu_btn.textContent.trim()) {
    case "chevron_right":
      menu_btn.textContent = "chevron_left";
      profile_photo.style.top = 'var(--profile-photo-top)';
      profile_photo.style.left = 'var(--profile-photo-left)';
      // --sidebar-width: calc(var(--icon-size) + (var(--sidebar-padding-x) * 2));
      setRootStyleProperty("--sidebar-width", "var(--sidebar-width-open)")
      break;
      case "chevron_left":
        menu_btn.textContent = "chevron_right";
        profile_photo.style.top = 0;
        profile_photo.style.left = 0;
        setRootStyleProperty("--sidebar-width", "var(--sidebar-width-close)")
      break;
    case "menu":
      menu_btn.textContent = "menu";
      break;

    default:
      menu_btn.textContent = "menu";
      break;
  }
}

function setRootStyleProperty(property, value){
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty(property, value);

}

function selectSubCategory(el) {
  console.log(el.attributes.subcategory.nodeValue)
  el.classList.add("active");
  const subcategories = document.getElementsByClassName("side_item");

  for (let index = 0; index < subcategories.length; index++) {
    const subcategory = subcategories.item(index);

    if (el != subcategory) {
      subcategory.classList.remove("active");
    }
  }

  refreshContent()
}


function selectCategory(el) {
  el.classList.add("active");
  const categories = document.getElementsByClassName("category_item");

  for (let index = 0; index < categories.length; index++) {
    const category = categories.item(index);

    if (el != category) {
      category.classList.remove("active");
    }
  }

  refreshContent()
}

function categorySelected() {
  const el = document.querySelector('[category].active');
  const value = el.attributes.category.nodeValue;
  return value
}

function subcategorySelected() {
  const el = document.querySelector('[subcategory].active');
  const value = el.attributes.subcategory.nodeValue;
  return value
}

function refreshContent(){
  const subCategory = subcategorySelected();
  const category = categorySelected();

  let sectionToActive;
  if (subCategory === 'work') {
    sectionToActive = category;
  } else {
    sectionToActive = subCategory;
  }
  
  const sectionSelected = document.querySelector(`section.${sectionToActive}`);

  sectionSelected.classList.add('active');

  const categories = document.getElementsByClassName("category_content");

  for (const category of categories) {
    if (sectionSelected != category) {
      category.classList.remove("active");
    }
  }

}

function toggleJobDescription(el) {
  
  el.classList.toggle('opened')
  
}