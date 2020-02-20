import React, { Component } from 'react'

export default class Crear extends Component {

    constructor(){
        super();
        this.state = {
            nombre : '',
            contacto : '',
            direccion : '',
            descripcion : ''
        }

    }

    submit(){
        let url = "http://localhost:5000/agregarRecicladora";
        let data=this.state;
            fetch (url, {
                method: 'POST',
                headers : {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                },
                body : JSON.stringify(data)
            }).then((result) => {
                result.json().then((resp)=>{
                    console.warp("resp", resp)
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
                    <h5 class="card-title text-center">Crear Recicladora</h5>
                        <form class="form-signin">
                            
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Recicladora</label>
                                    <div class="col-sm-10">
                                    <input class="form-control form-control-lg"  placeholder="Nombre de la Recicladora" 
                                    name="nombre"
                                    value={this.state.nombre}
                                    onChange={(data) => {
                                        this.setState({ nombre: data.target.value})
                                    }}
                                    />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Contactos </label>
                                    <div class="col-sm-10">
                                    <input  class="form-control form-control-lg" placeholder="Numeros de contacto"
                                        name="contacto"
                                        value={this.state.contacto}
                                        onChange={(data) => {
                                            this.setState({ contacto: data.target.value})
                                        }}
                                    />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Direccion</label>
                                    <div class="col-sm-10">
                                    <input  class="form-control form-control-lg" placeholder="Nombre de la Recicladora"
                                        name="direccion"
                                        value={this.state.direccion}
                                        onChange={(data) => {
                                            this.setState({ direccion: data.target.value})
                                        }}
                                    />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Descripcion</label>
                                    <div class="col-sm-10">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        name="descripcion"
                                        value={this.state.descripcion}
                                        onChange={(data) => {
                                            this.setState({ descripcion: data.target.value})
                                        }}
                                    ></textarea>
                                    </div>
                                </div>
                               

                                    
                            
                            

                            
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                onClick={() => {this.submit()}}
                            >Crear</button>
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
