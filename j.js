document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('question-page')) {
    hideBars();
  }
});
function hideBars() {
  browser.storage.local.get('isHideBars').then(obj => {
    if (!obj.isHideBars) return;

    document.getElementById('mainbar').style.width = '70vw';
    document.getElementById('left-sidebar').style.display = 'none';
    document.getElementById('sidebar').style.display = 'none';
  });
}
