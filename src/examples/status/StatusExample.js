import * as React from 'react';
import { useState } from "react";


function StatusExample(){
  //声明一个叫"name"的state变量,声明setName函数来更新"name"的值。
  const [name,setName] = useState('Yang');
  //多个state变量，需要调用多次useState
  const [age,setAge] = useState(18);

  return(
    <div>
      {/*通过花括号直接获取state变量的值*/}
      <div>Name is {name},Age is {age}</div>
      {/*此处定义了一个内联函数，使用箭头函数的写法，用户更新state变量的值。*/}
        <button onClick={()=>{setName('xiaohua');setAge(30)}}>点击</button>

      <FatherState/>
    </div>
  )
}

/**
 * State传递
 */
class FatherState extends React.Component{
  constructor(props) {
    super(props);
    this.state={name:'wang'};
  }
  render() {
    return(
        <div>
          <ChildState data ={this.state}></ChildState>
        </div>
    )
  }
}

function ChildState(props){
   return <h2>{props.data.name}</h2>
}

export default StatusExample;