import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Link, Route} from "react-router-dom";
import StatusExample from "./examples/status/StatusExample";
import RefExample from "./examples/component/RefExample";
import {Routes} from "react-router";
import LifeCycleExample from "./examples/component/LifeCycleExample";


class App1 extends React.Component{
  render() {
    return(
      <div>
        <h1>React代码演示</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/StatusExample">React Status示例</Link></li>
          <li><Link to="/RefExample">React ref示例</Link></li>
          <li><Link to="/LifeCycleExample">组件生命周期示例</Link></li>
        </ul>

        {/*
            接着用 `this.props.children` 替换 `<Child>`
            router 会帮我们找到这个 children
          */}
        {this.props.children}
     </div>
    );
  }

}

function Dashbord(){
  return(
    <div>
      Hello React Router!
    </div>
  )
}

const routeConfig =[
  {
    path:'/',
    component: App1,
    indexRoute:{component:Dashbord},
    childRoutes:[
      {path:'StatusExample',component:StatusExample},
      {path: 'RefExample',component:RefExample},
      {path: 'LifeCycleExample',component: LifeCycleExample}
    ]
  }

]


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1/>}/>
                <Route path="StatusExample" element={<StatusExample/>}/>
                <Route path="RefExample" element={<RefExample/>}/>
                <Route path="LifeCycleExample" element={<LifeCycleExample/>}/>

            </Routes>
    </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals2
