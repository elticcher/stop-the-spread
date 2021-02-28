let Posición_1: number[] = []
let Silencio = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        Posición_1 = []
        for (let index = 0; index <= 10; index++) {
            Posición_1.push(input.acceleration(Dimension.Y) + index)
            Posición_1.push(input.acceleration(Dimension.Y) - index)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (Silencio == 0) {
            Silencio = 1
        } else {
            Silencio = 0
        }
    }
    for (let value of Posición_1) {
        if (value == input.acceleration(Dimension.Y)) {
            if (Silencio == 0) {
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(500)
            } else {
                basic.showIcon(IconNames.Angry)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.clearScreen()
        }
    }
})
