// const square = function(x){
//     return x*x;
// }

//Arrow function

// const square = (x)=>{
//     return x*x;
// }


//Incase function has single line
// const square = (x) => x*x;

// console.log(square(3))



const event = {
    name : 'Birthday Party',
    printGuestList : function(){
        console.log('Guest list for '+ this.name)
    }
}


event.printGuestList()