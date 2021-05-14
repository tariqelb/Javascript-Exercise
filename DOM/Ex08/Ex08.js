// Write a JavaScript program to remove items from a dropdown list.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Remove items from a dropdown list</title>
// </head><body><form>
// <select id="colorSelect">
// <option>Red</option>
// <option>Green</option>
// <option>White</option>
// <option>Black</option>
// </select>
// <input type="button" onclick="removecolor()" value="Select and Remove">
// </form></body></html>


let removecolor = () =>
{
    let elem = document.getElementById("colorSelect")
    
    elem.remove(elem.selectedIndex);
}