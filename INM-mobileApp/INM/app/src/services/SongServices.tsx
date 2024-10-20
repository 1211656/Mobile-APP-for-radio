import { Song } from "../domain/Song";
import { IServiceGraph } from "./IServiceGraph";
import { IServiceMap } from "./IServiceMap";

export class SongServices implements IServiceMap<Song> {
    

    private songs: Map<Song,number>;

    constructor(){
        this.songs = new Map<Song,number>();
        this.createSongs(this.songs);
    }

    private createSongs(map: Map<Song,number>){
        return null;
    }

    public addElement(element: Song, map: Map<Song,number>){}
   public  getElement(number: number){
        return new Map<Song,number>;
    };
    public getSize(){
        return 0;
    }
    public getKeys(){
        return [];
    };
    public getValues(){
        return [];
    };
    

}