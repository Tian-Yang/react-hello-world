import * as React from 'react';
import {useEffect, useState} from "react";

class LifeCycleExample extends React.Component{
    constructor(props) {
        super(props);
        this.state={showClassComponent:true,showFunctionComponent:true}
        //需要bind this，确保this指向组件实例，否则在deleteClassComponent的时候将会报错
        this.deleteClassComponent= this.deleteClassComponent.bind(this);
        this.deleteFunctionComponent = this.deleteFunctionComponent.bind(this);
    }

    deleteClassComponent(){
       this.setState({showClassComponent:false});
    }

    deleteFunctionComponent(){
        this.setState({showFunctionComponent:false});
    }

    render() {
        let classComponent;
        let functionComponent;
        if(this.state.showClassComponent){
            classComponent= <ClassComponentLifeCycle />;
        }
        if(this.state.showFunctionComponent){
            functionComponent = <FunctionComponentLifeCycle/>
        }

        return (
            <div>
                <h2>组件生命周期示例</h2>
                {classComponent}
                {functionComponent}
                <button onClick={this.deleteClassComponent}>点击删除类组件</button>
                <br/><br/>
                <button onClick={this.deleteFunctionComponent}>点击删除函数组件</button>
            </div>
        );
    }
}

class ClassComponentLifeCycle extends React.Component{
    //生命周期开始,组件渲染完成之后会调用
    componentDidMount() {
        console.log("class component life start...")
    }

    //生命周期结束，组件删除的时候调用
    componentWillUnmount() {
        console.log("class component life end...")
    }
    render() {
        return(
            <div>
                <h2>类组件生命周期</h2>
            </div>
        )
    }
}

//函数组件声明周期需要借助Hooks
function FunctionComponentLifeCycle(){

    useEffect(()=>{
        console.log("function component life start...");

        //需要返回一个函数作为生命周期清除执行函数
        return function clean(){
            console.log("function component life end...");
        }
    })

    return (
        <div>
            <h2>函数组件声明周期示例</h2>
        </div>
    )
}

export default LifeCycleExample;