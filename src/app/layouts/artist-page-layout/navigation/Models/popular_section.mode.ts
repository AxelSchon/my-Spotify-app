export class popular_sectionModel{

    img: string;
    songName: string;
    monthlyListeners: string;
    playTime: string;
    rowIndex: string;
    
        constructor(img: string, songName: string, monthlyListeners: string, playTime: string , rowIndex: string) { 
            this.img = img;
            this.songName = songName;
            this.monthlyListeners = monthlyListeners;
            this.playTime = playTime;
            this.rowIndex = rowIndex;
          }
    }