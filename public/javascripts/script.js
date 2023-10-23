function toggle(item) {
  items = document.querySelectorAll('.tab-content');

  for (let i = 0; i < items.length; i++) {
    if (item.hasAttribute('hidden')) {
        items[i].setAttribute('hidden', false);
    }
    else {
          items[i].setAttribute('hidden', true);
    }
  }
  item.removeAttribute('hidden');
}
