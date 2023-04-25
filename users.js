const accordion =document.getElementsByClassName('content-container')

for(i=0;accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })



}
    


