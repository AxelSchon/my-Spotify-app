export class ArtistCardModel{

    img: string;
    artistName: string;
    title: string;
    
        constructor(img: string, artistName: string, title: string ) { 
            this.img = img;
            this.artistName = artistName;
            this.title = title;
          }
    }