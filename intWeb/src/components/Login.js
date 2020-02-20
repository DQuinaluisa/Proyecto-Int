import React, { Component } from 'react';
import Crear from './Crear';

export default class Login extends Component {

constructor(){
    super();
    this.state={
        admin : '',
        password : ''
    }
}

submit(){
    let url = "http://localhost:5000/loginAdmin";
    let data = this.state;
        fetch (url, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=> {
            result.json().then((resp)=>{
                console.warn("resp", resp)
            })
        })
}

    render() {
        return (
 <div class="container">
        <div class="row ">
            <div class="col-lg-2  ">                
            </div>
            <div class="col-lg-8">
            <div class="card card-signin my-5">
                    <div class="card-body">
                    <h5 class="card-title text-center">Iniciar Sesion</h5>
                        <form class="form-signin">
                            
                            <div class="form-group">
                                <input type="text"  class="form-control" 
                                placeholder="Usuario"
                                name="admin"
                                value={this.state.admin}
                                onChange={(data) =>{
                                    this.setState({ admin : data.target.value})
                                }}
                                />
                                
                            </div>
                        
                        
                            
                            <div class="form-group">
                                <input type="password"  class="form-control" 
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={(data) =>{
                                    this.setState({ password : data.target.value})
                                }}
                                />
                                
                            </div>

                            
                            <button   class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"  
                                onClick={() => {this.submit()}}
                                
                            >Ingresar</button>
                            <hr class="my-4"/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
            </div>
        </div>
   
 </div>

        )
    }
}
