var btn = document.querySelector('button')
var main = document.querySelector('main')



var arr = ['love is not in the air','i am living in a hell','who are you ?','say my name ','i am hope of this universe ','wake up to reality','i am not a pervert,i am a big one','know pain,accept pain','i am king of the hell']

btn.addEventListener('click',function(){
    var h1=document.createElement('h1')
    var a=Math.floor(Math.random()*arr.length)
   h1.innerHTML=arr[a]
   var x =Math.random()*70
   var y =Math.random()*70

   var rotate = Math.random()*367

   var c1=Math.floor(Math.random()*256)
   var c2=Math.floor(Math.random()*256)
   var c3=Math.floor(Math.random()*256)

   var scl=Math.random()*3
   
   h1.style.position='absolute'
   h1.style.left=x+'%'
   h1.style.top=y+'%'

   h1.style.rotate=rotate+'deg'

   h1.style.color=`rgb(${c1},${c2},${c3})`
   h1.style.scale=scl

   h1



   main.appendChild(h1)


  
})