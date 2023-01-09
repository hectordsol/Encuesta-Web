import React ,{useState , useEffect }from "react";
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
const FormEncuesta = () =>{
    const [database,setDatabase]= useState({});
    const initialValues ={
        full_name:'',
        email:'',
        birth_date:'',
        country_of_origin:'argentina',
        terms_and_conditions:false
    }
    const [values, setValues]=useState(initialValues);
const addValues = async (values) => {
  try {
    const docRef = await addDoc(collection(db, "encuesta"), values);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const handleSubmit = e =>{
    e.preventDefault();
    console.log(values);
    addValues(values);
}
const handleInputChange = e =>{
    e.preventDefault();
    const {name,value}=e.target;
    setValues({...values,[name]:value})
}
const getData=()=>{
    fetch('db.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        myJson.items.map(i =>console.log(i.type))
        setDatabase(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group"></div>
                <label className="form-label mt-4 bg-ligth">Nombre Completo</label>
                <input type="text" className="form-control" placeholder="Nombre completo"
                name="full_name" onChange={handleInputChange}/>
                <label className="form-label mt-4">Correo Electrónico</label>
                <input type="email" className="form-control" placeholder="Correo electrónico"
                name="email" onChange={handleInputChange}/>
                <label className="form-label mt-4">Fecha de Nacimiento</label>
                <input type="date" className="form-control" placeholder="Fecha de Nacimiento"
                name="birth_date" onChange={handleInputChange}/>
                <label className="form-label mt-4">¿Cuál es tu país de origen?</label>
                <select className="form-control form-select" name="country_of_origin" onChange={handleInputChange}>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="mexico">México</option>
                    <option value="peru">Perú</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                </select>
                <div className="form-control form-check mt-4">
                    <input className="form-label mt-4" type="checkbox" value="false" 
                    name="terms_and_conditions" onChange={handleInputChange}/>
                    <label className="form-label mt-4">¿Acepta los términos y condiciones?</label>
                </div>
                <button className="btn btn-primary btn-block">Enviar</button>
        </form>
    )
};
export default FormEncuesta;