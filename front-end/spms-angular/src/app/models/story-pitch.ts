import { Genre } from "./genre";
import { StoryType } from "./story-type";

export class StoryPitch {
   constructor(
    public id: number,
    public authorId: number,
    public title: string,
    public genre: Genre,
    public tag: string,
    public description: string,
    public points: number,
    public dateCreated: Date,
    public lastUpdated: Date,
    public completionDate: Date,
    public approved: string,
    public onHold: string,
    public completed: string,
    public storyType: StoryType, 
   ) {} 
    
    // constructor(    
    //     public id: number,    
    //     public authorId: number,
    //     public title: string,    
    //     public completionDate: Date,    
    //     public wordCount: number,
    //     public completed: string,
    //     public genre: string,    
    //     public tag: string,
    //     public description: string,
    //     public approved: string,    
    //     public on_hold: string
    //   ) {}

}
