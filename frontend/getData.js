let btndiv = document.createElement('div');
btndiv.id = 'btndiv';
document.body.appendChild(btndiv);

let heading = document.createElement('h1');
heading.innerHTML = 'Fruit List';
btndiv.appendChild(heading);

let datadiv = document.createElement('div');
datadiv.id = 'datadiv';
document.body.appendChild(datadiv);

let list = document.createElement('ul');
list.id ='list';
document.getElementById('datadiv').appendChild(list);

var fruits = [];

document.body.onload = function(){
    fetch("http://localhost:4011/getFruit",{
        headers: {'Access-Control-Allow-Origin':'*'}
    })
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data);
        data.forEach(fruit => {
            //console.log(fruit);
            //console.log(fruit.name);
            fruits.push(fruit);
            var colors = fruit.colors;
            
            document.getElementById('list').innerHTML+='<li>'+fruit.name+'</li>';
            document.getElementById('list').innerHTML+='<ul>'+'<li>'+"colors: "+colors+'</li>'+'<li>'+"In Season? "+fruit.in_season+'</li>'+'</ul>';

        });
    })
}
let label = document.createElement('p');
label.id = 'label';
label.innerHTML = "In Season?"
btndiv.appendChild(label);

let seasondropdown = document.createElement('select');
seasondropdown.id = 'seasondropdown';
btndiv.appendChild(seasondropdown);

let option3 = document.createElement('option');
option3.innerHTML='select in_season';
option3.value="none";
seasondropdown.appendChild(option3);

let option1 = document.createElement('option');
//option1.id="option1";
//option1.selected="";
option1.innerHTML='TRUE';
option1.value=true;
seasondropdown.appendChild(option1);

let option2 = document.createElement('option');
//option2.id="option2";
option2.innerHTML='FALSE';
option2.value=false;
seasondropdown.appendChild(option2);

let colorlabel = document.createElement('p');
colorlabel.id = 'colorlabel'
colorlabel.innerHTML = 'color: ';
btndiv.appendChild(colorlabel);

let inputcolor = document.createElement('input');
inputcolor.id = 'inputcolor';
btndiv.appendChild(inputcolor);

var season = document.createElement('button');
season.id='seasonbtn';
season.innerHTML="Go";
season.addEventListener('click',function(){
    var in_season =true;
    console.log(document.querySelector('#seasondropdown').value);
    console.log(document.querySelector('#inputcolor').value);
    var inputval = (document.querySelector('#seasondropdown').value === 'true');
    var inputcolor = document.querySelector('#inputcolor').value;
    if(!inputval){
        in_season = false;
    }
    var filteredfruits = fruits;
    document.getElementById('list').innerHTML ='';
    if(document.querySelector('#seasondropdown').value!="none"){
        console.log("inside season loop");
        
        filteredfruits = fruits.filter((fruit) => fruit.in_season === in_season);
    }

    if(inputcolor!="" && inputcolor!=null){
        console.log("inside color loop"); 
        filteredfruits = filteredfruits.filter(function(fruit){
            return fruit.colors.includes(inputcolor);
        })
    }
    console.log(filteredfruits);
    filteredfruits.forEach(fruit => {
        var colors = fruit.colors;
        document.getElementById('list').innerHTML+='<li>'+fruit.name+'</li>';
        document.getElementById('list').innerHTML+='<ul>'+'<li>'+"colors: "+colors+'</li>'+'<li>'+"In Season? "+fruit.in_season+'</li>'+'</ul>';

    });
});
btndiv.appendChild(season);