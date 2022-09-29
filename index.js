
console.log(h1.children); //children returns an emptty list 

let ul = document.querySelector("ul");
console.log(ul.childNodes);// gives everything: text or another element
console.log(ul.lastElementChild); // 
console.log(ul.lastElementChild.childNodes[0].nodeType);

//se;ect the slection with an id of contianer wihtout uisng query selector
console.log(document.getElementById("con"));