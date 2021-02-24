import React,{useState} from "react"
import { AuthRoute } from "react-router-auth"
import { HashRouter, Link, Switch } from "react-router-dom"
import { Constants } from "../../Model/Constants"
import { isLoggedIn } from "../Auth/Auth"
import { ProjectsFiltered } from "../Projects/Projects.jsx"
import "./Search.css"

function NoResult(){
    return(
        <h3 className="no-result">
            No Result
        </h3>
    )
}

function People(){
    return(
        <div className="container-fluid">
            People
        </div>
    )
}

function Projects(){
    return(
        <div className="container-fluid">
            <ProjectsFiltered key={document.getElementById("search").value}/>
        </div>
    )
}

function Colleges(){
    return(
        <div className="container-fluid">
            Colleges
        </div>
    )
}



function Nav(){
    var [cat,setCat] = useState("people")
    return(
        <div className="row" style={{margin:"20px"}}>
            <div className={cat=="people" ? "col-2 doc-cat-sel":"col-2 doc-cat"} style={{textAlign:"center"}}>
                <Link to="/search/people" className={cat=="people"? "categoryLinkSel":"categoryLink"} 
                onClick={()=>setCat("people")}>People</Link>
            </div> 
            
            <div className={cat=="projects" ? "col-2 doc-cat-sel":"col-2 doc-cat"} style={{textAlign:"center"}}>
                <Link to="/search/projects" className={cat=="projects"? "categoryLinkSel":"categoryLink"} 
                onClick={()=>setCat("projects")}>Projects</Link>
            </div>

            <div className={cat=="colleges" ? "col-2 doc-cat-sel":"col-2 doc-cat"} style={{textAlign:"center"}}>
                <Link to="/search/colleges" className={cat=="colleges"? "categoryLinkSel":"categoryLink"} 
                onClick={()=>setCat("colleges")}>Colleges</Link>
            </div>
        </div>
    )
}

function Search(){
    return(
        <div className="container-fluid" style={{minHeight:"100vh"}}>
            <Nav />
            <HashRouter >
                <Switch>
                    <AuthRoute 
                        authenticated={sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"}
                        redirectTo="/auth"
                        path="/search/people"
                        component={People}
                    />
                    <AuthRoute 
                        authenticated={sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"}
                        redirectTo="/auth"
                        path="/search/projects"
                        component={Projects}
                    />
                    <AuthRoute 
                        authenticated={sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"}
                        redirectTo="/auth"
                        path="/search/colleges"
                        component={Colleges}
                    />
                </Switch>
            </HashRouter>
        </div>
    )
    
}

export default Search;