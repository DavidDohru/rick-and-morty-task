export const addToLocaleStorage = (item:any,name:string,list:any) => {
    return localStorage.setItem(name,JSON.stringify(
      [...list,item]
    ));
  }

export const removeCheckedfromLocaleStorage = (id:number,name:string,list:any) => {
    return localStorage.setItem(name,JSON.stringify(
      list.filter((item :any) => item !== id)
    ));
  }

export const removeListfromLocaleStorage = (id:number,name:string,list:any) => {
    return localStorage.setItem(name,JSON.stringify(
      list.filter((item :any) => item.id !== id)
    ));
  }