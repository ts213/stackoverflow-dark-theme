browser.storage.local.get(['isHideBars', 'isRemoveHeader']).then(obj => {
  const isHideBarsBox = document.getElementById('isHideBars');
  const isRemoveHeaderBox = document.getElementById('isRemoveHeader');
  isHideBarsBox.checked = Boolean(obj.isHideBars);
  isRemoveHeaderBox.checked = Boolean(obj.isRemoveHeader);

  const optsWrap = document.getElementById('optsWrap');
  optsWrap.addEventListener('click', (ev) => {
    if (['isHideBars', 'isRemoveHeader'].includes(ev.target.id)) {
      togglePersistentOption(ev.target.checked, ev.target.id);
    }
  });
});

async function togglePersistentOption(isChecked, id) {
  if (isChecked) {
    browser.storage.local.set({ [id]: true });
    toggleReminder();
  } else {
    browser.storage.local.remove(id);
    toggleReminder(true);
  }
}

function toggleReminder(isHide) {
  const reminder = document.getElementById('reminder');
  if (isHide) reminder.style.opacity = '0';
  else reminder.style.opacity = '1';
}
