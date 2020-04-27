import React, {Component} from "react";
// import {BrowserRouter as Router,Route} from "react-router-dom"
// import todoList from "./todoList"

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            cityMap:[{
                id:1,
                name:'北京'
            },{
                id:2,
                name:'上海'
            },{
                id:3,
                name:'广州'
            },{
                id:4,
                name:'成都'
            }],
            hobby:[{
                'title':'睡觉',
                'checked':true
            },{
                'title':'吃饭',
                'checked':false
            },{
                'title':'打豆豆',
                'checked':false
            }],
            formData:{
                name:"",
                sex:"1",
            }
        }
    }
    changeHandle(e) {
        let data = Object.assign({}, this.state.formData, { name: e.target.value })
        this.setState({
            formData:data
        })
    }
    sexHandle(e){
        let data = Object.assign({}, this.state.formData, { sex: e.target.value })
        this.setState({
            formData:data
        })
    }
    cityHandle(e){
        let data = Object.assign({}, this.state.formData, { city: e.target.value })
        this.setState({
            formData:data
        })
    }
    hobbyHandle(index){
        const list = [...this.state.hobby]
        this.setState({
            hobby: list.map((item,idx) =>idx===index?{...item,checked:!item.checked}:item)
        })
    }
    descHandle(e){
        let data = Object.assign({}, this.state.formData, { desc: e.target.value })
        this.setState({
            formData:data
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let hobby =[]
        this.state.hobby.forEach( i=>{
            if(i.checked) hobby.push(i.title)
        })
        let data = Object.assign({}, this.state.formData, { hobby: hobby})
        console.log(data)
    }

    render() {
        return (
            <div>
                {/*<Router>*/}
                {/*    <Route Path="/todoList" Children={todoList}>todoList</Route>*/}
                {/*</Router>*/}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor='name'>姓名</label>
                    <input value={this.state.formData.name}
                           onChange={this.changeHandle.bind(this)}
                           id='name'
                    />
                    <div>input数据：{this.state.formData.name}</div>

                    <label htmlFor='sex'>男</label>
                    <input type="radio"
                           value="1"
                           checked={this.state.formData.sex==="1"}
                           onChange={this.sexHandle.bind(this)}
                           id='sex'
                    />
                    <label htmlFor='sex'>女</label>
                    <input type="radio"
                           value="2"
                           checked={this.state.formData.sex==="2"}
                           onChange={this.sexHandle.bind(this)}
                           id='sex'
                    />

                    居住城市：
                    <select
                        value={this.state.formData.city}
                        onChange={this.cityHandle.bind(this)}
                    >
                        {
                            this.state.cityMap.map(function (value) {
                                return <option key={value.id}>{value.name}</option>
                            })
                        }
                    </select>

                    爱好：
                    {this.state.hobby.map((value,index)=>{
                        return (
                            <span key={index}>
                                <input type={'checkbox'}
                                       checked={value.checked}
                                       onChange={this.hobbyHandle.bind(this,index)}
                                />
                                {value.title}
                            </span>
                        )
                    })}

                    文本域：
                    <textarea value={this.state.formData.desc} onChange={this.descHandle.bind(this)}></textarea>

                    <input type='submit' defaultValue={'提交'} />
                </form>
            </div>
        )
    }
}

export default Home
