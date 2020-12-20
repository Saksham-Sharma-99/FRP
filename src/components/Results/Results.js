import React, {Component} from 'react'
import { Constants } from '../../Model/Constants'
import "./Results.css"
import {results,resultCategories,resultheading} from "./resultsData"




function Heading(props){
    return (
        <div className ="row result-heading" > 
            <div className = "col text-center">
                <h2 style={{color:'white'}}> {props.c1}</h2>
            </div>               
        </div>
    )
}

function Category(props){
 
    return (
        <div className ="row result-category" > 
            <div className = "col-2">
                <p> {props.c1}</p>
            </div>  
            <div className = "col-2">
                <p> {props.c2}</p>
            </div>  
            <div className = "col-2">
                <p> {props.c3}</p>
            </div>  
            <div className = "col-2">
                <p> {props.c4}</p>
            </div>  
            <div className = "col-2">
                <p> {props.c5}</p>
            </div>  
            <div className = "col-2">
                <p> {props.c6}</p>
            </div>                  
         </div>
    )
}
function CategoryData(props){
    var c4class=props.c4;
    return (
        <div className ="row result-content">
            <div className = "col">
                <p> {props.c1}</p>
            </div>  
            <div className = "col">
                <p> {props.c2}</p>
            </div>  
            <div className = "col">
                <p> {props.c3}</p>
            </div>  
            <div className = "col">
                <p className={c4class}> {props.c4}</p>
            </div>  
            <div className = "col">
                <p> {props.c5}</p>
            </div>  
            <div className = "col">
                <p> {props.c6}</p>
            </div> 
        </div>
    )
}

// function Content (props){
//     return (
//         <div className = "col-sm">
//                         {resultCategories.map((d)=>d.map(data => <Category category = {props.category}/>)}
//                         {results.map(data => <CategoryData  data = {props.data}/>)}
//                     </div>
//     )
// }


function Results(){
    var resultData = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).results

    return (
        <div className = "container-fluid">
            <div className = "container">
                <Heading c1={resultheading.map((d)=>d.heading)} 
                />

                <Category c1={resultCategories.map((d)=>d.college)} 
                    c2={resultCategories.map((d)=>d.projectCategory)}
                    c3={resultCategories.map((d)=>d.appliedOn)}  
                    c4={resultCategories.map((d)=>d.status)}
                    c5={resultCategories.map((d)=>d.numOfApplicants)} 
                    c6={resultCategories.map((d)=>d.application)}
                />

                {resultData.map((r)=>
                <CategoryData c1={r.college} c2={r.type} c3={r.createdAt} 
                c4={r.status} c5={r.numOfApp.length} c6 = "Link"/>)}
            </div>
        </div>
    )
}

export default Results