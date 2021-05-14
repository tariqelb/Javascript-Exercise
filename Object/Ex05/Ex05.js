// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = π(r^2)h
// where r is the radius and h is the height of the cylinder

function Cylinder (height, radius)
{
    this.height = height;
    this.radius = radius;
}

Cylinder.prototype.volume = function()
{
    return Math.PI * Math.pow(this.radius , 2) * this.height;
} 

let cyl = new Cylinder(7,5)
console.log(cyl.volume().toFixed(4))