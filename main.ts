input.onButtonPressed(Button.A, function () {
    Keefe += 1
    basic.showString("Keefe Score")
    basic.showString("" + (Keefe))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("Tie Total")
    basic.showString("" + (Tie))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Fitz += 1
    basic.showString("Fitz Score")
    basic.showString("" + (Fitz))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Keefe Score")
    basic.showString("" + (Keefe))
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Fitz Score")
    basic.showString("" + (Fitz))
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Tie Total")
    basic.showString("" + (Tie))
    basic.clearScreen()
    basic.pause(500)
})
let Tie = 0
let Fitz = 0
let Keefe = 0
Keefe = 0
Fitz = 0
Tie = 0
