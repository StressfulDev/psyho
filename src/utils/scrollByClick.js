export const scrollByClick = (id, setIsBurgerMenuOpen, e) => {
  e.preventDefault();

  const element = document.getElementById(id);

  element?.scrollIntoView({behavior: 'smooth'});
  setIsBurgerMenuOpen?.(false);
};
