import React, {Component} from 'react'
import "./Results.css"
import {results,resultCategories} from "./resultsData"





function Category(props){
    return (
        <div className ="row result-category">                   
            <p> {props.category}</p>
         </div>
    )
}
function CategoryData(props){
    return (
        <div className ="row result-content">
            <p> {props.data}</p>
        </div>
    )
}

// function Content (props){
//     return (
//         <div className = "col-sm">
//                         {resultCategories.map(data => <Category category = {props.category}/>)}
//                         {results.map(data => <CategoryData  data = {props.data}/>)}
//                     </div>
//     )
// }


function Results(){
    return (
        <div className = "container-fluid">
            <div className = "container">
                <div className="row">

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.college}/>)}
                        {results.map(data => <CategoryData  data = {data.college}/>)}   
                    </div>

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.projectCategory}/>)}
                        {results.map(data => <CategoryData  data = {data.projectCategory}/>)}
                    </div>

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.appliedOn}/>)}
                        {results.map(data => <CategoryData  data = {data.appliedOn}/>)}
                    </div>

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.status}/>)}
                        {results.map(data => <CategoryData  data = {data.status}/>)}
                    </div>

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.numOfApplicants}/>)}
                        {results.map(data => <CategoryData  data = {data.numOfApplicants}/>)}
                    </div>

                    <div className = "col-sm">
                        {resultCategories.map(data => <Category category = {data.application}/>)}
                        {results.map(data => <CategoryData  data = {data.application}/>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Results