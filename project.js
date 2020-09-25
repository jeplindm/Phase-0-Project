const input = document.querySelector('.input');

var count = 0
var reset = 'Please Re-Type Your Name'

input.addEventListener('keydown', function () {
    
    var tombol = document.querySelector('.btn');
    console.log(tombol);
    
    var x = event.which || event.keyCode;

    if (x == 65) {
        count += x
    } else if (x == 69) {
        count += x;
    } else if (x == 73) {
        count += x;
    } else if (x == 79) {
        count += x;
    } else if (x == 85) {
        count += x;
    } else if (x == 8) {
        count = 0
    }
    console.log(count)

    tombol.addEventListener('click', function () {

        var img = document.getElementById('img');
        
        var doc = document.getElementsByClassName('show')[0];
        
        if (count == 0 || count < 99) {
            doc.innerHTML = reset;
        } 
        else if (count == 130 && count > 99) {
                        doc.innerHTML = `"Your lucky number is 1. One day you will have great a job, a large house and cool swimming pool in your house."`


        } else if (count == 138 && count > 99) {
       
            doc.innerHTML = "'Your lucky number is 3. One day you will have a good partner in your life, cool job and have a helicopter.'"
        }
        else if (count == 146 && count > 99){
            doc.innerHTML = "'Your lucky number is 7. One day you will have great house, cool basket ball court and have a job that you always dreamt.'"
        } else if (count == 158 && count > 99) {
            doc.innerHTML = "'Your lucky number is 8. One day you will have one son and one daughter, a lovely partner and cool swimming pool in your house. '"
        } else if (count == 170 && count > 99) {
            doc.innerHTML = "'Your lucky number is 9. One day you will have a large house, BMW-X6 and coolest job ever.'"
        } else if (count > 100 && count < 150) {
            doc.innerHTML = "'One day you will have a small house but lovely family and Mercedez Benz C-200.'"
            

        } else if (count > 150 && count < 200) {
            doc.innerHTML = "'One day you will have a mansion, you will be rich and have Aventador.'"
            
        } else if (count > 200 && count < 250) {
            doc.innerHTML = "'One day you will have a helicopter, Mercedez-Benz S-400 and a cool job.'"
            
        } else if (count > 250 && count < 300) {
            doc.innerHTML = "'One day you will have Toyota-86, not really big house and the collest job on earth.'"
            
        } else if (count > 350 && count < 400) {
            doc.innerHTML = "'One day you will have a job that you always dreamt, freakin cool house and a lot of money.'"
            
        } else if (count > 400 && count < 450) {
            doc.innerHTML = "'One day you will have a castle, the Dodge Viper, Kawasaki X-250 and job that you really wanted.'"
            
        } else {
            doc.innerHTML = 'Please re-type your name and only input your first name.'
        }
        console.log('Masuk')
     })
})


function changebackGround() {

    input.style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/71MqfUP7PYL._AC_SL1500_.jpg')"
};
input.onclick = changebackGround;

input.addEventListener('keydown', function(){
    input.style.backgroundColor = "black"
    input.style.color = 'goldenrod';
})

input.addEventListener('keyup',function(){
    input.style.backgroundColor = 'goldenrod'
    input.style.color = 'white'
})

const h1  = document.getElementById("opening");

h1.addEventListener('mouseenter', function(){

    h1.style.color = 'white';
    h1.style.fontFamily = 'cursive';
    h1.style.backgroundColor = 'goldenrod'
    h1.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg')"
    
})

h1.addEventListener('mouseleave',function () {
    h1.style.color = 'goldenrod'
    h1.style.backgroundColor = 'black'
    h1.style.fontFamily = 'cursive';
    h1.style.backgroundImage = "url('https://images.unsplash.com/photo-1509515837298-2c67a3933321?ixlib=rb-1.2.1&w=1000&q=80')"
})

const name = document.getElementById('label')







