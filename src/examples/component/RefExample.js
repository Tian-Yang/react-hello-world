import * as React from 'react';

const RefExample =(props)=>{
    const inputRef = React.createRef();
    function getRefs(){
        console.log(inputRef.current.value)
    }
    return(
      <div>
        <input ref={inputRef} type = "text"/>
        <button onClick={getRefs}>点击获取Ref</button>
      </div>
    )
}

export default RefExample;