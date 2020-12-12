import React from "react"

function InputBar(){
    return(
        <div  style={{position:'sticky',bottom:"0",left:"0",
        padding:"2px",border:"solid 1px black",minHeight:"7vh",zIndex:"1",backgroundColor:"white"}}>
            <input  style ={{width:"80%",position:'relative'
            ,bottom:"0",left:"0",padding:"0",backgroundColor:"white",zIndex:"1",maxHeight: "200px"} }
            contenteditable="true">

            </input>
        </div>
    )
}
export default InputBar