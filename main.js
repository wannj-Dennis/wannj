    
// set timeout
document.getElementById('head-one').innerHTML = 'DENNI WANJ';


    
setTimeout(
    function () {        
        let val = document.getElementById('full-page');
        val.style.height = '0';
        let vals = document.getElementById('home-page');
        vals.style.opacity = '1';
        }, 2000
    );
    


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

