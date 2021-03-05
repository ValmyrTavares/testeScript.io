export default class Slide{
    constructor(){
        this.img = document.querySelectorAll('[data-img] img')
        this.index = 0
    }
    addEvent(){
        this.changeImg()       
    }    
    changeImg(){
        setInterval(()=>{
            this.index++;
            this.img.forEach((item) => {
                item.classList.add('hide')            
               
                
                if(this.index>3)this.index=0
            })
            this.img[this.index].classList.remove('hide') 
            console.log(this.index)
        },3000)      
    }

    init(){
       this.addEvent()
    }
}
console.log('sou o slide')