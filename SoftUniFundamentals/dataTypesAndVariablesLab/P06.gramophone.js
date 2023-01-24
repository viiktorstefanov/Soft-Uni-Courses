function gramophone(bandName,albumName,songName) {
let formula = (albumName.length * bandName.length) * songName.length / 2
console.log(`The plate was rotated ${Math.ceil(formula/2.5)} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')