var arr = [{
    team :'KKR',
    captain:'cap:Ajinkya rahane',
    primary:'purple',
    secondary:'gold',
    trophy:'tophy :3'
},{
    team :'MI',
    captain: 'cap:Hardik pandya',
    primary:'blue',
    secondary:'rgba(46, 47, 13, 0.59)',
    trophy:'trophy:5'
},{
    team :'CSK',
    captain:'cap:Rituraj Gayakwad',
    primary:'yellow',
    secondary:'rgb(33, 33, 88)',
    trophy:'trophy:5'
},{
    team :'RCB',
    captain: 'cap:Rajat Patidar',
    primary:'red',
    secondary:'black',
    trophy:"trophy:1"
},{
    team :'SRH',
    captain :'cap:patt cummins',
    primary:'orange',
    secondary:'black',
    trophy:'trophy:1'

},{
    team :'DC',
    captain:'cap:akshar patel',
    primary:'blue',
    secondary:'red',
    trophy:'trophy:0'
},{
    team :'RR',
    captain:'cap:ravindra jadeja',
    primary:'crimson',
    secondary:'rgb(77, 198, 85)',
    trophy:'trophy:1'
},{
    team :'PBKS',
    captain:'cap:shreyas ayyar',
    primary:'red',
    secondary:'green',
    trophy:'trophy:0'

},{
    team :'GT',
    captain:'cap:shubhman gill',
    primary:'blue',
    secondary:'silver',
    trophy:'trophy:1'
},{
    team :'LSG',
    captain:'cap:Rishabh Pant',
    primary:'pale blue',
    secondary:'rgb(74, 208, 190)',
    trophy:'trophy:0'
},
]

var btn=document.querySelector('#btn')
var h1=document.querySelector('h1')
var body=document.querySelector('body')
var cap=document.querySelector('h2')
var trophy=document.querySelector('h4')

btn.addEventListener('click',function(){
    
    var winner =arr[Math.floor(Math.random()*arr.length)]
    h1.innerText=winner.team
    h1.style.backgroundColor=winner.primary
    body.style.backgroundColor=winner.secondary
    cap.innerText=winner.captain
    cap.style.color=winner.primary
    trophy.innerText=winner.trophy
    trophy.textContent.color=winner.secondary
    

})