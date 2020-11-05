


var a = prompt('введите число');
var b = prompt('введите степень');
var res = a;

if (isNaN(a) || a == 0) {
    alert('ошибка');
} else if(isNaN(b) || b == 0){
    alert(a * a);
} else if(!isNaN(a)){
    for(let i=1;i<b;i++){
        res=res*a;
    }
    alert(res);
    
}



