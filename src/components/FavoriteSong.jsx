function FavoriteSong(){
    const song = {
        title: "anicesong",
        artist: "aniceartist",
        duration: 200,
        plays: 222200000000
    };

    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;

    const playsinmillions = song.plays / 1000000;

    return(
        <div>
 <h2> {song.title} - {song.artist}</h2>
 <p>Duration: {minutes}:{seconds}</p>
 <p> {playsinmillions} plays in millions </p>
        </div>
    );
}

export default FavoriteSong;