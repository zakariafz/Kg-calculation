var body = document.querySelector("body")
var v1 = document.querySelector('.v1');
var v2 = document.querySelector('.v2');
var mince = document.querySelector('.mince');
var moyen = document.querySelector('.moyen');
var large = document.querySelector('.large')
var btn = document.querySelector('.btn')
var poisideal = document.createElement('h2')
var json = JSON.parse(localStorage.getItem('hestory'))||[];
var hestory = document.querySelector('.display');
var display = document.createElement('div')
display.classList.add('a')
btn.addEventListener('click',function(){
    if(mince.checked && !moyen.checked && !large.checked){
    if(v1.value !== "" & v2.value !== ''){
    var poisI = +(v1.value-100) + +(v2.value/10)* 0.9
    poisideal.innerHTML = ""
    poisideal.innerHTML = `Votre pois Ideal is :${poisI}`
    body.appendChild(poisideal)
    save(poisI.toFixed(2))
    
    }}else if(moyen.checked && !mince.checked && !large.checked){
        if(v1.value !== "" & v2.value !== ''){
        var poisI = +(v1.value-100) + +(v2.value/10)* 0.9 * 0.9
        poisideal.innerHTML = ""
        poisideal.innerHTML = `Votre pois Ideal is :${poisI}`
        body.appendChild(poisideal)
        save(poisI.toFixed(2))
    }}else if(large.checked && !moyen.checked && !mince.checked){
    if(v1.value !== "" & v2.value !== ''){
    var poisI = +(v1.value-100) + +(v2.value/10)* 0.9 * 1.1
    poisideal.innerHTML = ""
    poisideal.innerHTML = `Votre pois Ideal is :${poisI}`
            body.appendChild(poisideal)
            save(poisI.toFixed(2))

    }}else{
        alert('you check more then one box')
    }
    
})
function save(result){
    var obj = {
        poisideal:result
    }
    json.push(obj);
    localStorage.setItem('hestory',JSON.stringify(json))
    if(json.length !== 0){
        var display = document.createElement('div');
        display.innerHTML = " ";
}

}
 function disp(){
    hestory.addEventListener('click',function(){
        display.innerHTML = ''
        json.forEach(function(obj){
            if(obj !== ''){
            var dis = document.createElement('div')
            dis.innerHTML +=  "pois ideal : "+ obj.poisideal +"<br>"
            display.appendChild(dis)
        }else{alert('hestory is empty')}}
        )
    body.appendChild(display)})
 }
 disp()
localStorage.clear()

