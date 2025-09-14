


 interface MenuData {
  title: string;
  about: string;
  info: string;
  social: string;
}


export interface IMenu {
  menu:MenuData;
  onclose?:() => void,
}