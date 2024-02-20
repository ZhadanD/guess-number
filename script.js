function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}

if(!localStorage.getItem('random_num')) localStorage.setItem('random_num', getRandom(1, 10))

function begin() {
    localStorage.setItem('random_num', getRandom(1, 10))

    document.getElementById('num').value = ''

    alert('Начинаем сначала!')
}

function guess() {
    let num = Number(document.getElementById('num').value)
    let randomNum = Number(localStorage.getItem('random_num'))

    if(num === randomNum) {
        document.getElementById('num').value = ''

        alert('Ты угадал число, поздравляю!')

        localStorage.setItem('random_num', getRandom(1, 10))
    } else if(num > randomNum) {
        alert('Твое число больше загаданного!')
    } else if(num < randomNum) {
        alert('Твое число меньше загаданного!')
    }
}
