let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 4)
})
basic.forever(function () {
    if (number == 1) {
        basic.showString("a")
    }
    if (number == 2) {
        basic.showString("b")
    }
    if (number == 3) {
        basic.showString("c")
    }
    if (number == 4) {
        basic.showString("ur mum ")
    }
})
