let darkMode = true;
document.body.classList.add("dark");

const IMG_DARK_ASSET = "assets/outline_dark_mode_black_24dp.png";
const IMG_LIGHT_ASSET = "assets/outline_light_mode_white_24dp.png";
const IMG_DARK_PROFILE = "assets/avatar_profile_reverencia.png";
const IMG_LIGHT_PROFILE = "assets/avatar_profile.png";

function toggleDarkMode() {
  darkMode = !darkMode;
  const imgDarkButton = getById("dark_button_image");
  const imgProfile = getById("profile_image");
  imgProfile.classList.remove("visible");

  setTimeout(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      imgDarkButton.setAttribute("src", IMG_LIGHT_ASSET);
      imgProfile.setAttribute("src", IMG_LIGHT_PROFILE);
    } else {
      document.body.classList.remove("dark");
      imgDarkButton.setAttribute("src", IMG_DARK_ASSET);
      imgProfile.setAttribute("src", IMG_DARK_PROFILE);
    }
    imgProfile.classList.add("visible");
  }, 200);
}

function selectCategory(el) {
  el.classList.add("active");
  const categories = document.getElementsByClassName("categories_item");

  for (let index = 0; index < categories.length; index++) {
    const category = categories.item(index);

    if (el != category) {
      category.classList.remove("active");
    }
  }
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
      
      break;
      case "chevron_left":
        menu_btn.textContent = "chevron_right";
        profile_photo.style.top = 0;
        profile_photo.style.left = 0;
      break;
    case "menu":
      menu_btn.textContent = "menu";
      break;

    default:
      menu_btn.textContent = "menu";
      break;
  }
}
