document.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    window.electronAPI.quit()
  }
});
