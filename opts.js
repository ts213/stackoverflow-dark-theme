browser.storage.local.get('isHideBars').then(obj => {
  const isHideBarsBox = document.getElementById('isHideBars');
  isHideBarsBox.addEventListener('click', setHideBars);
  isHideBarsBox.checked = Boolean(obj.isHideBars);
});

async function setHideBars(ev) {
  if (ev.target.checked) {
    browser.storage.local.set({ 'isHideBars': true });
    toggleReminder();
  } else {
    browser.storage.local.remove('isHideBars');
    toggleReminder(true);
  }
}

function toggleReminder(isHide) {
  const reminder = document.getElementById('reminder');
  if (isHide) reminder.style.opacity = '0';
  else reminder.style.opacity = '1';
}
