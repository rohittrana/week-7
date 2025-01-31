function calculate(a:number,b:number ,type:string):number{
   if(type === "sum"){
     return a+b;
   }
  else if(type ==="sub"){
    return a-b;
  }
  else if(type === "multi"){
    return a*b;
  }
  else if(type === "div"){
    return a/b;
  }
  
}


console.log(calculate(2,45,"multi"));
