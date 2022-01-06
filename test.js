function hello(){
    console.log(this.name)//Niranjan
    setTimeout(function(){
        console.log(this.name)//undefined
    },100)
 }
 
 hello.call({name:'Niranjan'})