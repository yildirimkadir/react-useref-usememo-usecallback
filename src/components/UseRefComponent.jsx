import React, { useEffect, useRef } from 'react'


const UseRefComponent = () => {
const inputRef = useRef(null)

 //1. Yol DOM kullanarak element e ulasabilirim.
    // useEffect(() => {
    //     document.querySelector("input").focus();
    // }, [])


//2.Yol useRef kullanarak hangi elementi reference alacaksak ona ref={inputRef} ekliyoruz ve current ile onu element olarak DOM da yakaliyoruz. (yoksa obj olarak yakaliyor malum).DOM elementlerine ulaşmamızı sağlar kisaca. 

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    

    
  return (
    <div className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} placeholder="Enter text..." />
      <button>ChangeBGColor</button>
      <button>increase Value</button>
    </div>
  )
}

export default UseRefComponent