import React ,{useState , useEffect }from "react";


const Encuesta = ({encuesta}) =>{
    const [database,setDatabase]= useState();
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
                return {...i,checked:false,}
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
            for (const property in encuesta) {
                let index = result.findIndex(i=>i.name===property);
                if(index!==-1)result[index].value=encuesta[property];
            }
            result=[...result, {id:encuesta.id}];
            setDatabase(result);
          });
      }

      useEffect(()=>{
        getData();
      },[])
return(

<div className="container-fluid p-4">
    <div className='col-md'>

      <div className="form-group input-group"> 
        
        {database?.map((i) =>{if(i.type!=='submit'&& i.name!=='terms_and_conditions')
        return <div key={i.id}>
                    <label className="form-label p-2">{i.label} </label>
                    <label className="form-label p-2">{i.type==='select'?i.options.find((o)=> o.value === i.value).label:i.value}</label>    
                </div> 
        })}
      </div>
    </div>
      </div>
    )
}
export default Encuesta;