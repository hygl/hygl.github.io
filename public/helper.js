export function getDateString(x){
   return new Date(x.substring(0,10)).valueOf(); 
}

export function getDate(x){
  return new Date(x.substring(0,10)); 
}


export function getTitle(x){
  return  x.replaceAll("-"," ").substring(11,x.lastIndexOf("."));
}

