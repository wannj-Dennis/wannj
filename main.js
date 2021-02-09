    
// set timeout
document.getElementById('head-one').innerHTML = 'Wanj Dennis';



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
    document.getElementById('profile-img').style.width = '30vw';

    document.getElementById('two').getElementsByTagName('div')[0].removeAttribute('id', 'slider2');

    document.getElementById('three').scrollIntoView({behavior: "smooth"});
    thrice.getElementsByTagName('div')[0].setAttribute('id', 'slider2');
}


let third_page = document.querySelector('#profile-img');
let righty = document.getElementById('right-half');


righty.addEventListener('scroll', function (){
    //console.log(righty.scrollHeight);

    let vals = righty.scrollTop;   

    if (vals >= 1000 && vals <= 2500){
        
        document.getElementById('profile-img').style.width = '30vw';
        document.getElementById('profile-img').style.transition = 'width, .5s ease-out';
    }

    else {
        document.getElementById('profile-img').style.width = '50vw'; 
        document.getElementById('profile-img').style.transition = 'width, .5s ease-in';
    }

    //console.log(vals);

        
});

document.getElementById('btn1').onclick = function (e) {
    e.stopPropagation();
    document.getElementById('three-half').style.display = 'flex';
    document.getElementById('three').style.display = 'none';
    //document.getElementsByClassName('rights')[2].style.display = 'none';
    //document.getElementsByClassName('rights')[3].style.display = 'flex';
}

document.getElementById('btn2').onclick = function (e) {
    e.stopPropagation();
    document.getElementById('three-half').style.display = 'none';
    document.getElementById('three').style.display = 'flex';

}


document.getElementById('three').onclick = () => {

    var fourth = document.getElementById('four');

    document.getElementById('three').getElementsByTagName('div')[0].removeAttribute('id', 'slider2');
    fourth.scrollIntoView({ behavior: "smooth" });   
    //    fourth.getElementsByTagName('div')[0].setAttribute('class', 'parallax');
}


document.getElementById('backs').onclick = function (e) {
    e.stopPropagation();

    let x = document.getElementById('first-project');
    x.classList.add('move-left');

}


document.getElementById('backs').onmouseup = function () {
    let x = document.getElementById('first-project');

    x.classList.remove('move-right');
    console.log(x.classList);
}




document.getElementById('forwards').onclick = function (e) {
    e.stopPropagation();

    let x = document.getElementById('first-project');

    x.classList.add('move-right');
}




document.getElementById('forwards').onmouseup = function () {
    let x = document.getElementById('first-project');

    x.classList.remove('move-right');
    console.log(x.classList);
}




document.getElementById('four').onclick = function () { 
    document.getElementById('one').scrollIntoView({behavior: "smooth"});
    document.getElementById('profile-img').style.width = '50vw';

}


