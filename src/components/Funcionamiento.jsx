import React from "react";
import { useState } from "react";

function Funcionamiento() {

    const [destinoSeleccionado, setDestinoSeleccionado] = useState('');
    const [numPersonas, setNumPersonas] = useState(0);
    const [impuesto, setImpuesto] = useState(null);
    const [impuestoAplicado, setImpuestoAplicado] = useState(null);
    const [costoPaquete, setCostoPaquete] = useState(null);
    const [totalPagar, setTotalPagar] = useState(null);

    const handleSelectChange = (event) => {
        const destinoSeleccionado = event.target.value;
        setDestinoSeleccionado(destinoSeleccionado);
    };

    const handleInputChange = (event) => {
        const numPersonas = event.target.value;
        setNumPersonas(numPersonas);
    };

    const calcularCompra = () => {
        if(!destinoSeleccionado || numPersonas==0){
            alert('Debe de llenar todos los campos');
        }
        else{
            let impuestoAplicado, impuesto, costoPaquete, totalPagar;
            
            if(destinoSeleccionado=='Ciudad de Panamá'){
                
                impuestoAplicado = ('4.5%');
                impuesto = (4.5/100) * (197*numPersonas);
                costoPaquete = ('$197.00');
                totalPagar = (197*numPersonas) + impuesto;
                
                setImpuestoAplicado(impuestoAplicado);
                setImpuesto(impuesto);
                setCostoPaquete(costoPaquete);
                setTotalPagar(totalPagar);
            }

            if(destinoSeleccionado=='Cancún de México'){
                
                impuestoAplicado = ('6%');
                impuesto = (6/100) * (485*numPersonas);
                costoPaquete = ('$485.00');
                totalPagar = (485*numPersonas) + impuesto;
                
                setImpuestoAplicado(impuestoAplicado);
                setImpuesto(impuesto);
                setCostoPaquete(costoPaquete);
                setTotalPagar(totalPagar);
            }

            if(destinoSeleccionado=='Santiago de Chile'){
                
                impuestoAplicado = ('7%');
                impuesto = (7/100) * (198*numPersonas);
                costoPaquete = ('$198.00');
                totalPagar = (198*numPersonas) + impuesto;
                
                setImpuestoAplicado(impuestoAplicado);
                setImpuesto(impuesto);
                setCostoPaquete(costoPaquete);
                setTotalPagar(totalPagar);
            }

            if(destinoSeleccionado=='Machu Picchu Perú'){
                
                impuestoAplicado = ('7.5%');
                impuesto = (7.5/100) * (754*numPersonas);
                costoPaquete = ('$754.00');
                totalPagar = (754*numPersonas) + impuesto;

                setImpuestoAplicado(impuestoAplicado);
                setImpuesto(impuesto);
                setCostoPaquete(costoPaquete);
                setTotalPagar(totalPagar);
            }

            if(destinoSeleccionado=='Roatán Honduras'){
                
                impuestoAplicado = ('4%');
                impuesto = (4/100) * (565*numPersonas);
                costoPaquete = ('$565.00');
                totalPagar = (565*numPersonas) + impuesto;

                setImpuestoAplicado(impuestoAplicado);
                setImpuesto(impuesto);
                setCostoPaquete(costoPaquete);
                setTotalPagar(totalPagar);
            }
               
        }

    };

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <select class='form-select form-select mb-4' aria-label='Ejemplo de .form-select-lg' onChange={handleSelectChange}>
                            <option value='' selected>Seleccione su destino</option>
                            <option value='Ciudad de Panamá'>Ciudad de Panamá</option>
                            <option value='Cancún de México'>Cancún de México</option>
                            <option value='Santiago de Chile'>Santiago de Chile</option>
                            <option value='Machu Picchu Perú'>Machu Picchu Perú</option>
                            <option value='Roatán Honduras'>Roatán Honduras</option>
                        </select>
                    </div>
                    <div className='col'>
                        <div class="input-group">
                            <span class="input-group-text">Num. Personas</span>
                            <input type="number" aria-label="personas" class="form-control" value={numPersonas} onChange={handleInputChange}></input>
                        </div>
                    </div>
                </div>
                <center><a class='btn btn-primary' onClick={calcularCompra}>Confirmar Compra</a></center>
                
                {totalPagar != null && (  
                <p>
                    <h5>A continuacion se muestra su factura:</h5> <br></br>
                    Nombre del destino: {destinoSeleccionado} <br></br>
                    Cantidad de personas que viajaran: {numPersonas} <br></br>
                    Costo del paquete por persona: {costoPaquete} <br></br>
                    Impuesto por persona: {impuesto} <br></br>
                    Impuesto aplicado: {impuestoAplicado} <br></br>
                    El total a pagar por su viaje es: {totalPagar}
                </p>
                )}
                
            </div>
        </>
    );

}

export default Funcionamiento;