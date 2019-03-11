import React from 'react'
import Axios from 'axios';

class Latian4 extends React.Component{
    state ={listMovie : [],error : ''}
    onBtnSearch = () => {
        var search = this.refs.search.value // harry
        Axios.get('http://www.omdbapi.com/?s='+ search +'&apikey=6a953632')
        .then((res) => {
            console.log(res)
            if(res.data.Error !== ""){
                this.setState({error : 'Movie Tidak Ditemukan' , listMovie : []})
            }
            if(res.data.Search.length > 0){                
                this.setState({listMovie : res.data.Search, error : ''})
            }
            
        }).catch((err) => {
            console.log(err)
        })
    }

    renderListJsx = () => {
        var jsx = this.state.listMovie.map((val) => {
            return (
                <div className="card col-md-3 mt-5 mr-5" style={{width: '18rem'}}>
                    <img className="card-img-top" src={val.Poster} alt="Card image cap" />
                    <div className="card-body">
                    <h4 className="card-text">{val.Title}</h4>
                    <p className="card-text">{val.Type}</p>
                    <p className="card-text" style={{fontStyle:'italic'}}>{val.Year}</p>
                    </div>
                </div>
            )
        })
        return jsx
    }

    renderErrorMsg = () => {
        if(this.state.error !== ""){
            return <div class="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
        }
    }
    render(){
        return(
            <div>
            <h1>Selamat Datang di Movie</h1>
            <div className='row'>
                <div className='col-md-4'>
                <input type='text' placeholder='cari Movie' className='form-control' ref='search' /> //harry
                </div>
                <input type='button' value='Search' className='btn btn-primary' onClick={this.onBtnSearch} />
                </div>
                <div className='row justify-content-center'>
                    {this.renderListJsx()}
                    {this.renderErrorMsg()}
                </div>
            </div>
            
        )
    }
}

export default Latian4