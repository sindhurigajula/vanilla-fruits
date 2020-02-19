
let datadiv = document.createElement('div');
datadiv.id = 'datadiv';
document.body.appendChild(datadiv);

let list = document.createElement('ul');
list.id ='list';
document.getElementById('datadiv').appendChild(list);

document.body.onload = function(){
    fetch("http://localhost:4011/getFruit",{
        mode: 'no-cors' 
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        var fruits = [];
        for(fruit in data) {
            //console.log(fruit[name]);
            fruits.push(fruit[name]);
        };
        document.getElementById('datadiv').innerHTML=fruits;
    })
}