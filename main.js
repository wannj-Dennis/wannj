    
 //document.getElementById('one').onclick = clicker (); // this here calls the function on page load 

document.getElementById('one').onclick = function clicker ()  { // thid here does what its intended
    document.getElementById('two').scrollIntoView({behavior: "smooth"});
}

document.getElementById('two').onclick = () => {
    document.getElementById('three').scrollIntoView({behavior: "smooth"});
}

document.getElementById('three').onclick = () => {
    document.getElementById('four').scrollIntoView({behavior: "smooth"});
}