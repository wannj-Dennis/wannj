    
// set timeout
document.getElementById('head-one').innerHTML = 'Wanj Dennis';

// count 
let marker = 0; 
 const count = (projects) => {
     setInterval (() => {
         if (marker != projects){
             marker += 1;
             document.getElementById('projects').innerHTML = "<i class='fas fa-medal'></i> Projects " + '<span class="righter">' + marker + '</span>';
         }
     }, 500);
 }

 count(5);

setTimeout(
    function () {        

        let vals = document.getElementById('home-page');
        vals.style.opacity = '1';


        let val = document.getElementById('full-page');
        document.getElementById('head-one').style.display = 'none';
        val.style.height = '0';        
        }, 2000
    );

 //document.getElementById('one').onclick = clicker (); // this here calls the function on page load 


document.getElementById('one').onclick = function clicker ()  { 
    
    let twice = document.getElementById('two');

    twice.scrollIntoView({behavior: "smooth"});

    twice.getElementsByTagName('div')[0].setAttribute('id', 'slider2');
    console.log('test');


}

document.getElementById('two').onclick = () => {

    let thrice = document.getElementById('three');

    document.getElementById('two').getElementsByTagName('div')[0].removeAttribute('id', 'slider2');

    document.getElementById('three').scrollIntoView({behavior: "smooth"});
    thrice.getElementsByTagName('div')[0].setAttribute('id', 'slider2');
}

/*
const toggleDisplay = (id) => {
    if (document.getElementById('btn1').clicked == id){
        document.getElementById('three').style.display = 'none';
        document.getElementById('three-half').style.display = 'flex';
    }
    else if (document.getElementById('btn2').clicked == id)  {
        document.getElementById('three-half').style.display = 'none';
        document.getElementById('three').style.display = 'flex';      
    }
}

toggleDisplay(true);
*/

document.getElementById('btn1').onclick = function () {
    document.getElementById('three').style.display = 'none';
    document.getElementById('three-half').style.display = 'flex';

}

document.getElementById('btn2').onclick = function () {
    document.getElementById('three-half').style.display = 'none';
    document.getElementById('three').style.display = 'flex';

}

document.getElementById('threes').onclick = () => {

    let fourth = document.getElementById('four');
    fourth.getElementsByTagName('div')[0].setAttribute('class', 'parallax');



    document.getElementById('three').getElementsByTagName('div')[0].removeAttribute('id', 'slider2');

    fourth.scrollIntoView({behavior: "smooth"});

}


document.getElementById('four').onclick = function () { 
    document.getElementById('one').scrollIntoView({behavior: "smooth"});

}


