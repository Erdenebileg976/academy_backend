
export const dice = () => {

    let isWin
    
    let onoo 
    const shoo1=  Math.floor(Math.random() * 6) + 1;
    const shoo2 = Math.floor(Math.random() * 6) + 1;

    const sum =shoo1 +shoo2
        console.log(sum,'sum')

    if(sum === 7 || sum === 11){
        console.log(("win"))

    

    }else{
        console.log("lose")
    
    }


  return {
    isWin,
    name: "dice",
    metadata: {
     dice:1
    },
  };

//   return {

  //  const userinput =  numer window.prompt("shoo hayah bol 3 gej bichne uu(3)");


  //  if( userinput === 3){

  //  } else{
        
 //   }
//   const shoo = () => Math.floor(Math.random() * 6) + 1;



//   const shoo1 = shoo();
//   const shoo2 = shoo();

    

//   let isWin = false;
//   if (
//     (shoo2 === "3" && shoo1 === "4") 
//     (shoo2 === "6" && shoo1 === "6")
//     (shoo1 === "4" && shoo2 === "3") 
//     (shoo1 === "6" && shoo2 === "6")
//   ) {
//     isWin = true;
//   }

 
// console.log(shoo1 ,shoo2,)

//   if (shoo1=== shoo2) {
//   } else if (isWin) {
//     alert("Та хожлоо! ");
//   } else {
//     alert("Та хожигдлоо ");
//   }
//     isWin: true,
//     name: "dice",
//     metadata: {
//       shoo1: 3,
//       shoo2: 4
//     },
//   };
};
