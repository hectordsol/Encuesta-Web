import React ,{useState , useEffect }from "react";
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase';
import Encuesta from './Encuesta';
import {toast} from 'react-toastify';
import Navbar from './Navbar/Navbar';
import { useNavigate } from "react-router-dom";
const Encuestas = () =>{
  const navigate = useNavigate();
  const [encuestas,setEncuestas]=useState([]);
const getEncuestas =async()=>{
  try {
    //traigo de firebase
    const data=[];
  const querySnapshot = await getDocs(collection(db, "encuesta"));
  querySnapshot.forEach((doc) => {
    data.push({...doc.data(),id:doc.id});
    setEncuestas(data);
  });
} catch (e) {
  console.error("Error adding document: ", e);
}
}

const handleDelete = async (id)=>{
  if(window.confirm("¿Esta seguro que quiere eliminar encuesta?"))
  {//borra de firebase
    try{
        await deleteDoc(doc(db, "encuesta", id));
        toast('Encuesta eliminada',{type:'error', autoClose:2000});
        navigate('/encuestas');
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
}
useEffect(()=>{

  getEncuestas();
},[])
    return (
      <>
          <Navbar/>
      <div className="col-md-8">
          {encuestas?.map((encuesta)=>
          (
          <div className="card mb-1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <button className="mb-3 text-danger" onClick={()=>handleDelete(encuesta.id)} key={encuesta.id}>X</button>
                </div>
              <Encuesta encuesta={encuesta}/>
            </div>
          </div>
            )
          )}
      </div>
      </>
)
};
export default Encuestas;
