function songs(input) {
class Song {
    constructor(typeList,songName,time) {
        this.type = typeList;
        this.name = songName;
        this.time = time;
    }
}
let songs = [];
let numSongs = Number(input.shift());
let LastTypeList = input.pop();

for(let i = 0; i < numSongs ; i++) {
let currEl = input[i].split('_');
let typeList = currEl[0];
let songName = currEl[1];
let songTime = Number(currEl[2]);
let song = new Song(typeList,songName,songTime);
songs.push(song)
}
if(LastTypeList === "all") {
    songs.forEach((i) => console.log(i.name));
}
else {
    let filtered = songs.filter((i) => i.type === LastTypeList);
    filtered.forEach((i) => console.log(i.name));
}



}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )