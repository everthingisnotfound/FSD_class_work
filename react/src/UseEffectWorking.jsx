 import React from 'react'
 
 function UseEffectWorking() {
    const[count,setCount]=useState(10);
    function changes(){
        setCount(count+10)
    }

    useEffect((I)=>{
        console.log("component render");
    })
   return (
    <div>
     <div>UseEffectWorking</div>
     <button onClick={changes}>do chnages</button>
     </div>
   )
 }
 
 export default UseEffectWorking