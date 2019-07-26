import React from "react"
import "../../../static/css/style.css"

function layout(props) {
    return(
        <div>
            {
                props.children
            }
        </div>
    )
}
export default layout