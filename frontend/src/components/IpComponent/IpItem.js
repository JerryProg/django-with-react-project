import React from "react"

const IdItem = ({ ip }) => {
    //console.log(props)
    return(
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className=""> String: {ip.ip_address} </h3> 
                <p className="card-text"> Combinations: <br></br> <span> {ip.ip_combinations} </span></p>
            </div>
        </div>
    )

};

export default IdItem;