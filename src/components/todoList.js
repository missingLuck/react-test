import React,{Component} from 'react';


export default class todoList  extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    handleInputChange = () => {
        const value = this.input.value;
        this.setState(() => ({inputValue: value}))
        //新版的react中的setState()函数可以接收一个函数，
        // 箭头函数的函数体使用（）包裹可以省略return
    }
    addList(){
        this.setState((prevState) => {
            // 同时setState函数还提供一个prevState参数，
            // 这个参数代表未改变之前的this.state
            const list = [...prevState.list, prevState.inputValue];
            return {
                list,
                inputValue: ''
            }
        })
    }

    deleteListItem = (index) => {
        // 因为在绑定该方法的时候使用了bind函数，
        // 所以这里可以不实用箭头函数去保证this的指向
        console.log(index)
        this.setState((prevState) => {
            let list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        },() => {
            console.log('item',this.item) // setState函数的回调
        })
    }

    getItem = () => {
        return (
            this.state.list.map((item, index) => {
                return(
                    <li
                        key = {index}
                        value = {item}
                        ref = {(item) => {this.item = item} }
                    >{item}<button onClick= {this.deleteListItem.bind(this)}>删除</button>
                    </li>
                )
            })
        )
    }
    render() {
        return (
            <div className="todoList">
                <h2>待办事项</h2>
                <input
                    onChange = { this.handleInputChange }
                    value = {this.state.inputValue}
                    ref = {(input) => {this.input = input}}
                    type="text"
                />
                <button onClick={this.addList.bind(this)}>增加+</button>
                <hr/>
                <ul>
                    {this.getItem()}
                </ul>
            </div>
        );
    }
}
