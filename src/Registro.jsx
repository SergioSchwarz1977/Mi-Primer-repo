import React from 'react'
import './Style/Style.css'


function Registro() {
    return (
        <>

            <div className='contenedor'>
                <form action="" className='formulario'>
                    <h1 className='titulo'>Registro a la página Web</h1>
                    <hr /><br /><br />
                    <label htmlFor=""className='label' >Nombre:</label>
                    <input className='input' type="text" placeholder='Ingrese su nombre' required /><br />
                    <label htmlFor=""className='label' >Apellido:</label>
                    <input className='input' type="text" placeholder='Ingrese su apellido' required/><br />
                    <label htmlFor=""className='label' >E-Mail:</label>
                    <input className='input' type="email" placeholder='Ingrese su email' required /><br />
                    <label htmlFor=""className='label' >Ingrese su telefono:</label>
                    <input className='input' type="number" placeholder='Ingrese su telefono' required/><br />
                    <label htmlFor="" className='label'>Ingrese su Password:</label>
                    <input className='input' type="password" placeholder='Ingrese password' required/><br />
                    <label htmlFor="" className='label'>Confirmar Password:</label>
                    <input className='input' type="password" placeholder='Confirma su password' required/><br /><br />

                    <p className='parrafo'>Estas de acuedo con <a href="" className='a'>Terminos y Condiciones ?</a></p><br />

                    <input type="submit" value="Registrar" className='boton' />

                </form>
            </div>
        </>
    )

}

export default Registro