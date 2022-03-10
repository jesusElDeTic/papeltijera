let mostrar = 0
input.onGesture(Gesture.Shake, function () {
    mostrar = randint(1, 3)
    if (mostrar == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (mostrar == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
