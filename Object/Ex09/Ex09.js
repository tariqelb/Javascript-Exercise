// rite a JavaScript program to calculate the area and perimeter of a circle. 
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


function circle_calcule(raduis)
{
    this.pi = Math.PI;
    this.radius = raduis
}

circle_calcule.prototype.area = function (){
    return (this.pi * Math.pow(this.radius, 2)).toFixed(4);
}
circle_calcule.prototype.perimeter = function (){
    return (this.pi * 2 * this.radius).toFixed(4);
}


circle = new circle_calcule(6);

console.log(circle.area());
console.log(circle.perimeter());
