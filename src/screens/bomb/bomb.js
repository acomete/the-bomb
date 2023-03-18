const minute = 60*1000;
const second = 1000;
let time = 5*minute;
const speed = 100;

timer = setInterval(() => {
    if (time < 1.25*minute) {
        time -= speed * 0.5;
    } else if (time < 2.5*minute) {
        time -= speed * 0.7;
    } else {
        time -= speed;
    }

    if (time <= 0) {
        time = 0;
        clearInterval(timer)
    }

    const minutes = Math.floor(time / minute).toString().padStart(2, '0');
    const seconds = ((time % minute) / second).toFixed(0).padStart(2, '0');
    const milliseconds = ((time % second) / 10).toFixed(0).padStart(2, '0');

    document.getElementById('minutes-1').innerHTML = minutes.substring(0, 1)
    document.getElementById('minutes-2').innerHTML = minutes.substring(1)
    document.getElementById('seconds-1').innerHTML = seconds.substring(0, 1)
    document.getElementById('seconds-2').innerHTML = seconds.substring(1)
    document.getElementById('milliseconds-1').innerHTML = milliseconds.substring(0, 1)
    document.getElementById('milliseconds-2').innerHTML = milliseconds.substring(1)
}, speed);

input = document.getElementById('password')
defuse = document.getElementById('defuse')
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        document.getElementById('password-prompt').style.visibility = 'visible'
        input.focus()
    }
});

passwords = [
    'vesuve', // obsédé par les volcans
    'cesar', // sa motivation, la personne qu'il déteste
    'rex', // securité google : le nom de votre premier animal de compagnie
]

let step = 0
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        if (input.value === passwords[step]) {
            step++
            document.getElementById(`success-${step}`)
                .setAttribute('class', 'fa-solid fa-lock-open')
            document.getElementById(`success-${step}`).style.color = '#a7ffb6'

            if (step === 3) {
                input.style.display = 'none'
                defuse.style.display = 'block'
                defuse.focus()
            }
        } else {
            document.getElementById(`success-${step + 1}`).style.color = '#ff5757'
        }

        input.value = ''
    }
})

defuse.addEventListener('click', () => {
    window.electronAPI.defused()
})
