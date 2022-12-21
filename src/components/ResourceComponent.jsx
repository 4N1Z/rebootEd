/*
Documentation : 
This is a child component which fetches image, title of website passed as parameter
The api is created using python - fastapi 
Developed by sreedhar 

*/
import { useEffect, useState } from "react";
export default function ResourceComponent({props}){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const apifetch = ()=>{
        fetch(`https://4w1jwm.deta.dev/${props}`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
            
        })
        .then(response=>response.json())
        .then(data_=>{
            setData(data_.datas);
            setLoading(false);
            
           
        }).catch(err=>{
            console.log(err);
            setLoading(false);
        })
    }
    useEffect(()=>{
            apifetch();
        
    },[])
    return(
        <>
        {loading==true && <h2>loading...</h2>}
        {data.map((i)=>{
            return(
                <a style={{color:'black'}} target="_blank" href={i.take_url}>
                <div className="question-card" style={{margin:40}}>
                    <h3>{i.title}</h3>
                    <img src={i.img} style={{height:200,width:200}}/>
                </div>
                </a>
            );
        })}
        </>
    );
}