//create the HTML tags

var newh1 = document.createElement('h1');
var newh2 = document.createElement('h2');
var newh3 = document.createElement('h3');
var newp = document.createElement('p');
var newlist = document.createElement('ul');//does this open and close? yes?
var newitem = document.createElement('li');
var newitem2 = document.createElement(li');
var newitem3 = document.createElement('li');
var newp2 = document.createElement('p');


//create the html that goes in the tag
var h1text = document.createTextNode('Title of my page'); 
var h2text = document.createTextNode('Subheading');
var h3text = document.createTextNode('tagline of my page');
var p1text = document.createTextNode('Introducing the page and adding a paragraph, stuff I like.');
var item1 = document.createTextNode('First thing I like: donuts');
var item2 = document.createTextNode('Second thing I like: dogs');
var item3 = document.createTextNode('third thing I like: hiking');
var p2text = document.createTextNode('its fun making lists of things I like');

//append the text nodes to the tags 
//put the child inside the parenthesis 
//variables don't go inside quotes
newh1.appendChild(h1text);
newh2.appendChild(h2text);
newh3.appendChild(h3text);
newp.appendChild(p1text);
newitem.appendChild(item1);
newitem2.appendChild(item2);
newitem3.appendChild(item3);
newp2.appendChild(p2text); 

// add them to the HTML page with the body tag

document.getElementsByTagName('body').appendChild(newh1);
document.getElementsByTagName('body').appendChild(newh2);
document.getElementsByTagName('body').appendChild(newh3);
document.getElementsByTagName('body').appendChild(newp);
document.getElementsByTagName('body').appendChild(newlist);
document.getElementsByTagName('body').appendChild(newitem);
document.getElementsByTagName('body').appendChild(newitem2);
document.getElementsByTagName('body').appendChild(newitem3);
document.getElementsByTagName('body').appendChild(newp2);

//insertbefore, get the second li from the li array <3 

var surpriseitem = document.createElement('li');
var surprisetext = document.createTextNode('this is the surprise list item'); 
surpriseitem.appendChild(surprisetext);

var seconditem = document.getElementsByTagName('li')[1];
surpriseitem.insertBefore(surpriseitem, seconditem); 

//semicolons go at the en of statements

//events

surpriseitem.setAttribute('id', 'coolitem');

var itemtoclick = document.getElementById('coolitem');
itemtoclick.onclick= function() { alert('hello'); }





















