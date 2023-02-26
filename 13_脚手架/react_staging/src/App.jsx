// 创建外壳组件
import React,{Component} from "react";
import Hello from "./component/hello";
import Welcome from "./component/welcome";
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}


// 暴露App组件
// export default App