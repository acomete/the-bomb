const video = document.getElementById('video')

video.addEventListener('click', () => window.electronAPI.videoEnded());
video.addEventListener('ended', () => window.electronAPI.videoEnded());
