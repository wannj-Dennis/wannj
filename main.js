    
// set timeout
document.getElementById('head-one').innerHTML = 'Wanj Dennis';


    
setTimeout(
    function () {        
        let val = document.getElementById('full-page');
        val.style.height = '0';
        let val_text = document.getElementById('head-one');
        val_text.opacity = 0;
        let vals = document.getElementById('home-page');
        vals.style.opacity = '1';
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

document.getElementById('three').onclick = () => {

    let fourth = document.getElementById('four');
    fourth.getElementsByTagName('div')[0].setAttribute('class', 'parallax');



    document.getElementById('three').getElementsByTagName('div')[0].removeAttribute('id', 'slider2');

    fourth.scrollIntoView({behavior: "smooth"});

}

document.getElementById('four').onclick = function () { 
    document.getElementById('one').scrollIntoView({behavior: "smooth"});

}


