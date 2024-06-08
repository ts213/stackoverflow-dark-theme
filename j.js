document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('question-page')) {
    browser.storage.local.get(['isHideBars', 'isRemoveHeader']).then(obj => {
      if (obj.isHideBars) hideBars();
      if (obj.isRemoveHeader) removeHeader();
    });
  }
});

function hideBars() {
  document.getElementById('mainbar').style.width = '70vw';
  document.getElementById('left-sidebar').style.display = 'none';
  document.getElementById('sidebar').style.display = 'none';
}

function removeHeader() {
  document.getElementsByTagName('header')[0].remove();
  document.body.style.paddingTop = '0';
}
