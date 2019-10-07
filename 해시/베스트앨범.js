function solution(genres, plays) {
    const
    mergeDatas = () => {
        const list = new Array();

        genres.forEach( (genre, index) => list.push({ index, play: plays[index], genre }) );

        return list;
    },
    getGenreList = songList => {
        const genreList = new Array();

        for (const song of songList) {
            const genre = genreList.find(sort => sort.genre === song.genre);

            if (genre) {
                genre.songs.push(song);
                genre.play += song.play;
            } else {
                genreList.push({ genre: song.genre, songs: [song], play: song.play });
            }
        }
        
        return genreList;
    }

    const genreList = getGenreList(mergeDatas(genres, plays));
    genreList.sort((a, b) =>  b.play - a.play);

    let songList = new Array();
    
    const sortBy = (a, b) => {
        switch (true) {
            case a.play < b.play:
                return +1;
            case b.play < a.play:
                return -1;
            default:
                return a.index - b.index;
        }
    }

    for (const genre of genreList) {
        const songs = genre.songs.sort(sortBy).slice(0, 2);
        
        songList = songList.concat(songs);
    }
    
    return songList.map(song => song.index);
}