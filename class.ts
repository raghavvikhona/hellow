
class student{
 
private age:number ;
private name:string ;
 
constuctor(){
 

   }
public setemp(age:number,name:string){
this.age = age;
this.name = name;
 
}
public getit():String {
return this.name +' ' +this.age;
 
   }
}
 
var s:student = new student();
s.setemp(90,'abc');
console.log(s.getit());
 
var x:string = 'test';
console.log(x);

export {student};//for exporting student to other class so it can be used there