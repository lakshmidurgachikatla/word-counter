
function keypressed(){
    let textareacontent= document.querySelector('textarea')
    
    let charcount = document.querySelector('.charCounter')
    charcount.innerHTML = String(textareacontent.value).length;
    

    let wordcount=document.querySelector('.wordCounter')
    wordcount.innerHTML = String(textareacontent.value).split(' ').length;
    
    let charactercount = 500;
    let characterleft = document.querySelector('.charleft ');
    characterleft.innerHTML = charactercount - textareacontent.value.length;
    
    if ((textareacontent.value.length) > 500 ){
    
     textareacontent.value = String(textareacontent.value).substring(0,500);
    }


    document.querySelector('.Clearbutton').addEventListener('click',()=>{
    textareacontent.value=' ';
    charcount.innerHTML = 0;
    wordcount.innerHTML = 0;
    characterleft.innerHTML = 0;
    })

    }
