function person (name, age)
{
    this.name=name
    this.age=age
    
    // if(this instanceof Person)
    // {
    //     console.log("you are in abstract class")
    //     throw "can not create object of this type"
    // }
   

}

function emp (name,age,address,salary)
{

    emp.displayHr=function()
    {
        console.log ("taeatasrtars")
    }
    Emp.count=++Emp.count||1;
    Emp.getCount=function()
    {
        return Emp.count;
    }
    if(emp.count = 5)
    {
        var error=new Error("can not add more five emp");
        throw error

    }
    person.call(this,name,age)
    this.address=address
    this.salary=salary

}


emp.prototype=Object.create( Person.prototype)
emp.prototype.constructor=emp; 

function std (name,age,grade,category) 
{
    var as
    function getname(){
        return this.as;
    }
    function setname(ss){
        this.as=ss
    }
    person.call(this,name,age)
    this.grade=grade
    this.category=category
//  course [2] ta= new course [2];
    function has(course){
        
    }

}
std.prototype=Object.create( Person.prototype)
std.prototype.constructor=emp;
std.prototype=Object.create( course.prototype)

function course (id,name){
    this.id=id
    this.name=name
}


function ScientificDepartment (name, Location, City, Street, zip_code )
{
this.City=City
this.name=name
this.Location=Location
this.Street=Street
this.zip_code=zip_code

}

ScientificDepartment.prototype.display=function()
{
    console.log(this.name+"  "+this.City+"  "+this.Location+"  "+this.Street+"  "+this.zip_code)
}
