function toggle(item) {
  items = document.querySelectorAll('.tab-content');
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('hidden', true);
  }
  item.removeAttribute('hidden');
}
