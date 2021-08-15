export interface  locationsTypes{
  id: number;
  name: string;
  dimension: string;
  type: string;
}

export interface locationsFormTypes  {
    name:string,
    setName:(param:string) => void,
    setType:(param:string) => void,
    dimension:string,
    setDimension:(param:string) => void,
    type:string,
  }