import { useState } from "react";

const IpForm = () => {
    const initialState = { id:1, ip_address:"" };
    const [item, setItem] = useState(initialState);

    const handleInputChange = (e) => {
        //console.log(e.target.ip_address);
        setItem({ ...item, [e.target.ip_address]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">String</label>
                <input type="text" name="ip_address" value={item.ip_address} className="form-control" 
                maxLength="12" onChange={handleInputChange} required/>
                <div className="form-text"> Escribe la cadena menor a 12 digitos</div>
            </div>
            <button type="submit" className="btn btn-primary">Crear Ip</button>
        </form>
    )
};
export default IpForm;