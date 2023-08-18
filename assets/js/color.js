
const colorMain = localStorage.getItem('colorMain');
localStorage.setItem('colorMain:', '')

const colorSelect = document.querySelector('.color-select')
const colorModal = document.querySelector('.choose-color-modal')
const colorModalContainer = document.querySelector('.choose-color-modal .modal-container')
const colorName = document.querySelector('.choose-color-modal .modal-container .heading span')

if (colorSelect) {
    colorSelect.addEventListener('click', () => {
        colorModal.classList.add('open')
    })

    colorModal.addEventListener('click', () => {
        colorModal.classList.remove('open')
    })

    colorModalContainer.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    if (colorModal.classList.contains('open')) {
        document.body.style.overflow = 'hidden'
    }
}


const listItem = document.querySelector('.list-sub-color')
const colorItems = document.querySelectorAll('.list-sub-color .color-item')

colorItems.forEach(item => {
    item.addEventListener('click', () => {
        listItem.querySelector('.active').classList.remove('active')
        item.classList.add('active')
        colorModal.classList.remove('open')

        // get bg
        let colorMain = item.querySelector('.color-main')

        colorSelect.style.backgroundColor = window.getComputedStyle(colorMain).backgroundColor

        // get bg color
        let bgColor = window.getComputedStyle(colorMain).backgroundColor

        localStorage.setItem('colorMain', bgColor);
        colorMain = localStorage.getItem('colorMain');


        // green blue: 
        if (colorMain == 'rgb(66, 217, 144)') {
            colorName.innerHTML = 'Mint Green'
            document.body.removeAttribute('class')
            document.body.classList.add('green-blue')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // green yellow: 
        if (colorMain == 'rgb(162, 211, 73)') {
            colorName.innerHTML = 'Forest Green'
            document.body.removeAttribute('class')
            document.body.classList.add('green-yellow')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(235, 78, 78)') {
            colorName.innerHTML = 'Red'
            document.body.removeAttribute('class')
            document.body.classList.add('red')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(60, 96, 220)') {
            colorName.innerHTML = 'Blue'
            document.body.removeAttribute('class')
            document.body.classList.add('blue')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(232, 177, 36)') {
            colorName.innerHTML = 'Yellow'
            document.body.removeAttribute('class')
            document.body.classList.add('yellow')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(85, 214, 97)') {
            colorName.innerHTML = 'Green'
            document.body.removeAttribute('class')
            document.body.classList.add('green')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(235, 125, 64)') {
            colorName.innerHTML = 'Orange'
            document.body.removeAttribute('class')
            document.body.classList.add('orange')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(156, 65, 228)') {
            colorName.innerHTML = 'Purple'
            document.body.removeAttribute('class')
            document.body.classList.add('purple')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // red: 
        if (colorMain == 'rgb(237, 68, 159)') {
            colorName.innerHTML = 'Pink'
            document.body.removeAttribute('class')
            document.body.classList.add('pink')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }

        // blue purple: primary
        if (colorMain == 'rgb(102, 90, 240)') {
            colorName.innerHTML = 'Blue Violet'
            document.body.removeAttribute('class')
            if (localStorage.getItem('darkMode') == 'enabled') {
                document.body.classList.add('darkmode')
            }
        }
    })
})

if (colorMain == 'rgb(66, 217, 144)') {
    document.body.removeAttribute('class')
    document.body.classList.add('green-blue')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(66, 217, 144)'
    }
    if (colorName) {
        colorName.innerHTML = 'Mint Green'
    }
}
if (colorMain == 'rgb(162, 211, 73)') {
    document.body.removeAttribute('class')
    document.body.classList.add('green-yellow')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(162, 211, 73)'
    }
    if (colorName) {
        colorName.innerHTML = 'Forest Green'
    }
}
if (colorMain == 'rgb(235, 78, 78)') {
    document.body.removeAttribute('class')
    document.body.classList.add('red')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(235, 78, 78)'
    }
    if (colorName) {
        colorName.innerHTML = 'Red'
    }
}
if (colorMain == 'rgb(60, 96, 220)') {
    document.body.removeAttribute('class')
    document.body.classList.add('blue')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(60, 96, 220)'
    }
    if (colorName) {
        colorName.innerHTML = 'Blue'
    }
}
if (colorMain == 'rgb(232, 177, 36)') {
    document.body.removeAttribute('class')
    document.body.classList.add('yellow')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(232, 177, 36)'
    }
    if (colorName) {
        colorName.innerHTML = 'Yellow'
    }
}
if (colorMain == 'rgb(85, 214, 97)') {
    document.body.removeAttribute('class')
    document.body.classList.add('green')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(85, 214, 97)'
    }
    if (colorName) {
        colorName.innerHTML = 'Green'
    }
}
if (colorMain == 'rgb(235, 125, 64)') {
    document.body.removeAttribute('class')
    document.body.classList.add('orange')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(235, 125, 64)'
    }
    if (colorName) {
        colorName.innerHTML = 'Orange'
    }
}
if (colorMain == 'rgb(156, 65, 228)') {
    document.body.removeAttribute('class')
    document.body.classList.add('purple')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(156, 65, 228)'
    }
    if (colorName) {
        colorName.innerHTML = 'Purple'
    }
}
if (colorMain == 'rgb(237, 68, 159)') {
    document.body.removeAttribute('class')
    document.body.classList.add('pink')
    if (colorSelect) {
        colorSelect.style.backgroundColor = 'rgb(237, 68, 159)'
    }
    if (colorName) {
        colorName.innerHTML = 'Pink'
    }
}

if (colorMain == 'rgb(102, 90, 240)') {
    document.body.removeAttribute('class')
    if (colorName) {
        colorName.innerHTML = 'Blue Violet'
    }
}

if (colorSelect) {
    const currentColor = window.getComputedStyle(colorSelect).backgroundColor

    colorItems.forEach(item => {
        if (currentColor == window.getComputedStyle(item.querySelector('.color-main')).backgroundColor) {
            listItem.querySelector('.active').classList.remove('active')
            item.classList.add('active')
        }
    })
}


if (localStorage.getItem('darkMode') == 'enabled') {
    document.body.classList.add('darkmode')
}