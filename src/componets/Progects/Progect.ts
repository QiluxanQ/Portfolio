
interface Progect {
    id: number;
    name: string;
    images: string;
    screenshots:string[];
}

export interface IProgects {
    topic: string;
    progects: Progect[];
    width:number;
}