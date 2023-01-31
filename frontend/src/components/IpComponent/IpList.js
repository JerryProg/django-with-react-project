import React, { useEffect, useState } from "react";
import * as IpServer from './IpServer';
import IpItem from './IpItem';

const IpList = () => {
    const [ips, setIps] = useState([]);

    const listIp = async () => {
        try{
            const res = await IpServer.ipList();
            const data = await res.json();
            //console.log(data)
            setIps(data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        listIp();
    }, []);

    return(
        <div className="row">
            {ips.map((ip) => (
                <IpItem key={ip.id} ip={ip}/>
            ))}
        </div>
    )
};

export default IpList;