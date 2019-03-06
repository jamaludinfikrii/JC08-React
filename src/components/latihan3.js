import { connect } from 'react-redux'
import { hitungKata } from './../1.actions'
import React from 'react'

class Latihan3 extends React.Component{
    state = {toDo : ['makan','minum','tidur','mandi'] , selectedToDo : -1}
    componentDidMount(){
        this.props.hitungKata(this.state.toDo.length    )
    }

    handleEditBtn = (no) => {
        this.setState({selectedToDo : no})
    }
    handleBtnCancel = () => {
        this.setState({selectedToDo : -1})
    }

    handleSaveBtn = (no) => {
        // Cara Simple
        // var newData = this.refs.editValue.value;
        // this.state.toDo[no] = newData
        // this.setState({selectedToDo : -1})

        // Cara Lain

        var newData = this.refs.editValue.value;
        var arrTemp = [...this.state.toDo]
        arrTemp[no] = newData
        this.setState({toDo : arrTemp , selectedToDo : -1})

    }

    handleBtnDelete = (no) => {
        var arrTemp = [...this.state.toDo]
        arrTemp.splice(no,1)
        this.setState({toDo : arrTemp})
    }

    renderState = () => {
        var jsx = this.state.toDo.map((val,index) => {
            if(this.state.selectedToDo === index){
                return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td><input type='text' className="form-control" ref='editValue' defaultValue={val} /></td>
                        <td> <input type='button' className='btn btn-success' value='Save' onClick={()=>{this.handleSaveBtn(index)}} /> </td>
                        <td> <input type='button' className='btn btn-danger' value='Cancel' onClick={this.handleBtnCancel}/> </td>
                    </tr>
                )
            }
            return(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{val}</td>
                    <td> <input type='button' className='btn btn-primary' value='Edit' onClick={()=>{this.handleEditBtn(index)}}/> </td>
                    <td> <input type='button' className='btn btn-danger' value='Delete' onClick={ ()=> {this.handleBtnDelete(index)}}/> </td>
                </tr>
            )
        })
        return jsx
    }

    handleBtnAdd = () => {
        var todo = this.refs.todo.value
        this.setState({toDo:[...this.state.toDo , todo]})
        this.refs.todo.value = ''
        this.props.hitungKata(this.state.toDo.length + 1)
    }
    handleHapusAll= () => {
        this.setState({toDo : []})
        this.props.hitungKata(0)
    }
    hapusAllBtnRender = () => {
        if(this.state.toDo.length > 0){
            return <input type="button" className="btn btn-default border-primary" value='Hapus All' onClick={this.handleHapusAll} />
        }
    }
    render(){
        return(
            <div style={{marginTop:'40px'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="What will you do?" ref='todo' />
                    </div>
                    <div className = 'col-md-2'>
                        <input type="button" className="btn btn-default border-primary" value='Add' onClick={this.handleBtnAdd} />
                    </div>
                    <div className='col-md-4'>
                        <table class="table table-hover">
                        <tbody>
                            
                           {this.renderState()}
                         
                        </tbody>
                        </table>
                            {this.hapusAllBtnRender()}

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{hitungKata})(Latihan3);


var arr = ['makan','minum','tidur']
var bebas = arr.map((val,index) => {
    if(index ==2){
        return (index*2) + '. ' + val
    }
        return index + '. ' + val
}) 

console.log(bebas)