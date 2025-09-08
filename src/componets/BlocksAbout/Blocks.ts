
interface IBlockInfo {
    name: string;
    description: string;
    image: string;
}

export interface IBlock {
   description: IBlockInfo[];
    width:number;
    height:number;
}

