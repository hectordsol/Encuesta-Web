import React ,{useState , useEffect } from "react";
import {db} from '../firebase';
import {toast} from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import Navbar from './Navbar/Navbar';
import { useNavigate } from "react-router-dom";
const FormEncuesta = () =>{
  const navigate = useNavigate();
    const [database,setDatabase]= useState();
const addValues = async (database) => {
  try {
    //preparo datos para enviar
    let values = {};
    database.forEach((elements) => {
    let {type,name,value}=elements;
	  if (type && type!=='submit' && name!=='terms_and_conditions')
      values={...values, [name]:value};
      
})
//envio a Firebase
    const docRef = await addDoc(collection(db, "encuesta"), values);
    toast('Encuesta enviada',{type:'success', autoClose:2000});
    console.log("Document written with ID: ", docRef.id);
    getData();
    navigate('/encuestas');
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// let validateName = /^[a-zA-Z\s]+$/;
// const [errors, setErrors] = useState({});
// function validate(input) {
//   const errors = {};
//   if (!input.name.length) errors.name = 'Please complete with a videogame name';
//   return errors;
// };
const handleSubmit = e =>{
    e.preventDefault();
    addValues(database);
}
const handleInputChange = e =>{
   
    let {type,name,value}=e.target;
    if (type==='checkbox') 
      {value=e.target.checked;}
    let index = database.findIndex(i=>i.name===name);
    database[index].value=value;
    setDatabase([...database]);
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
        return response.json();
      })
      .then(function(myJson) {
        var result= myJson.items.map(i =>{
          if (i.type==='checkbox') {
            return {...i,value:false,checked:false}
          }
          else {
          if (i.type==='select')
              return{...i,value:i.options[0].value}
          else
            if ( i.type!=='submit')
              return {...i,value:''}
            else return {...i}
        }
        })
        setDatabase(result);
      });
  }
  useEffect(()=>{
    getData();
  },[])
return (
  <div className="container-fluid p-4">
    <Navbar/>
    <div className='row'>
      <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group input-group row"> 
        {database?.map((i) =>{ 
          if(i.type==='checkbox')
          {
          return <div className="form-check mt-4"  key={i.name}>
                  <input className="form-check-input mt-4" type={i.type} key={i.name+i.type}
                          name={i.name} onChange={handleInputChange} value={i.value}/>
                  <label className="form-label mt-4" key={i.label}>{i.label}</label>
                 </div>      
          }
          if(i.type==='select') 
            return <div className="mb-3" key={i.name}>
                  <label className="form-label mt-4" key={i.name+i.type}>{i.label}</label>
                  <select className="form-select" 
                          name={i.name} onChange={handleInputChange}>
                          {i.options?.map
                          ((o)=>
                          <option key={o.value} value={o.value}>{o.label}</option>
                          )
                          }
                  </select>
                </div> 
          if(i.type==='submit') 
            return <div className="mb-3" key={i.label}>
                            <button className="btn btn-primary btn-block">{i.label}</button>

                </div>
            return<div className="mt-4" key={i.name}>
                  <label className="form-label mt-4" key={i.label}>{i.label}</label>
                  <input type={i.type} className="form-control" placeholder={i.label}
                        name={i.name} onChange={handleInputChange} value={i.value} key={i.name+i.type}/>
                  </div>
        })}
        </div>
      </form>
    </div>
  </div>
)
};
export default FormEncuesta;
