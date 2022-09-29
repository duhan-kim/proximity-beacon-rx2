radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
    if (0 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Breve))
    } else if (0 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 1 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Double))
    } else if (1 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 2 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Whole))
    } else if (2 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 3 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Half))
    } else if (3 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 4 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Quarter))
    } else if (4 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 5 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Eighth))
    } else if (6 < radio.receivedPacket(RadioPacketProperty.SignalStrength) && 7 <= radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
    }
})
let signal = 0
radio.setGroup(1)
