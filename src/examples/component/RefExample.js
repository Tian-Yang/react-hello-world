import * as React from 'react';
import {createRef, forwardRef, useImperativeHandle, useRef} from "react";

const RefExample =(props)=>{
    /**createRef形式**/
    const inputRef = React.createRef();
    /**Hook useRef形式**/
    const input2=useRef();
    const childRef = useRef();
    const xiaotouRef = useRef();
    function getRefs(){
        console.log(inputRef.current.value)
        console.log(input2.current.value);
        console.log(childRef.current.value);
        console.log(xiaotouRef.current.name);
        console.log(xiaotouRef.current.helloDad())
    }
    return(
      <div>
        <h1>函数组件中获取ref</h1>
        <input ref={inputRef} type = "text"/>
          <br/><br/>
        <input ref={input2} type="text"/>
          <br/><br/>
        <button onClick={getRefs}>点击获取Ref</button>
        <RefClassExample/>
        <ChildRef ref={childRef}></ChildRef>
         <Xiaotou ref={xiaotouRef}></Xiaotou>
      </div>
    )
}

class RefClassExample extends React.Component{
    constructor(props) {
        super(props);
        this.state={input3:''}
    }

    setRef=(c)=>{
       this.input1=c;
    }

    //此处的c为调用函数的DOM对象本身
    setInput3=(c)=>{
        this.setState({input3:c})
    }

   showRef=()=>{
       console.log(this.input1.value)
       console.log(this.input2.value)
       console.log(this.state.input3.value)
   }

    render() {
        return(
            <div>
                <h1>类组件中获取ref</h1>
                {
                    //外联函数形式
                }
                <input ref={this.setRef} type="text"/>
                <br/><br/>
                <input ref={this.setInput3} type="text"/>
                <br/><br/>
                {/*内联函数形式*/}
                <input ref={(c)=>this.input2=c} type="text"/>
                <br/><br/>
                <button onClick={this.showRef}>点击获取Ref</button>
            </div>
        )
    }
}

const ChildRef =forwardRef((props,childRef)=>{
    return (
        <div>
            <input ref={childRef} value="666"/>
        </div>
    );
})

const Xiaotou = forwardRef((props,childRef)=>{
    const name="小头儿子";
    const inputRef = createRef();
    useImperativeHandle(childRef,()=>{
        return {
            //useImperativeHandle的第二个参数是一个回调函数，将子组件的属性和函数赋值给ref
            helloDad :helloDad,
            name:name
        }
    })
    const helloDad=()=>{
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input ref={inputRef} value="777"/>
        </div>
    );
})



export default RefExample;