import React from "react";
import Funcionamiento from './Funcionamiento';
import Tabla_Ej3 from '../img/Tabla_Ej3.png';


function Informacion() {

    return(
        <>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col'>
                    <div className='card border-info'>
                        <div className='card-header'>
                            <center><h3>Bienvenido a la agencia de viajes Travel World</h3></center>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>A continuación se muestran los paquetes de viajes que tenemos disponibles</h5>
                            <center><img src={Tabla_Ej3} className="Tabla-img"></img></center>
                            <p class='card-text'>Porfavor, en la sección de abajo ingrese el destino y la cantidad de personas que desean viajar</p>
                            <Funcionamiento></Funcionamiento>
                        </div>
                        <div class="card-footer">
                            Programa hecho por: <br></br>
                            Adilson Arian Montes Martinez <br></br>
                            Anderson Melendez
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );

}

export default Informacion;