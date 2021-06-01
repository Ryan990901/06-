let 溫度 = 0
basic.forever(function () {
    溫度 = input.temperature()
    basic.showNumber(溫度)
    basic.pause(2000)
    while (input.temperature() >= 35) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
