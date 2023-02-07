import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as IpServer from './IpServer'

const IpForm = () => {
    const navigate = useNavigate();
    const initialState = { id:0, ip_address:"" };
    const [ip, setIp] = useState(initialState);

    const handleInputChange = (e) => {
        //console.log(e.target)
        // console.log(e.target.ip_address);
        // console.log(e.target.value);
        setIp({ ...ip, [e.target.name]: e.target.value });       
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(ip);
        // navigate('/');
        try {
            let res;
            res= await IpServer.registerIp(ip);
            const data = await res.json();
            console.log(data);
            setIp(initialState);
            navigate('/');
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <div className="col-md-3 mx-auto my-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Cadena de números</label>
                    <input type="text" value={ip.ip_address} name="ip_address"
                    onChange={handleInputChange} className="form-control" minLength="4" 
                    maxLength="12" autoFocus required/>
                    <div className="form-text"> Escribe una cadena menor a 12 digitos</div>
                </div>
                <button type="submit" className="btn btn-primary">Crear Ip</button>
            </form>
        </div>
    );
};
export default IpForm;