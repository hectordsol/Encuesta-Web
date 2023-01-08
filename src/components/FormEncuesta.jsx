import React from "react";
const FormEncuesta = () =>{

    return (
        <form className="card card-body">
            <div className="form-group"></div>
                <label for="full_name" class="form-label mt-4">Nombre Completo</label>
                <input type="text" className="form-control" placeholder="Nombre completo"
                id="full_name"/>
                <label for="email" class="form-label mt-4">Correo Electrónico</label>
                <input type="email" className="form-control" placeholder="Correo electrónico"
                id="email"/>
                <label for="birth_date" class="form-label mt-4">Fecha de Nacimiento</label>
                <input type="date" className="form-control" placeholder="Fecha de Nacimiento"
                id="birth_date"/>
                <label for="country_of_origin" class="form-label mt-4">¿Cuál es tu país de origen?</label>
                <select class="form-select" id="country_of_origin">
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="mexico">México</option>
                    <option value="peru">Perú</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                </select>

<div class="form-check">
        <input className="form-control" class="form-label mt-4" type="checkbox" value="" id="terms_and_conditions"/>
        <label for="terms_and_conditions" class="form-label mt-4">¿Acepta los términos y condiciones?</label>
      </div>
        </form>
    )
};
export default FormEncuesta;