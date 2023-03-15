let step = 1;
const lastStep = 6;
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        step++
        if (step > lastStep) step = lastStep
    }

    if (event.code === 'ArrowLeft') {
        step--
        if (step < 1) step = 1;
    }

    document.getElementById('slide').src =`../../../assets/images/slide-0${step}.png`

    if (step === lastStep) {
        window.electronAPI.hackIt()

    }
});
