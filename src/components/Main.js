import React, {useEffect,useState} from 'react';
import {lists} from '../util/companyList'


const Main=()=> {
    const [companies, setCompanies] = useState(null)


    return (
        <div>
           <ul>
            {lists.map((list)=>(
                <li>{list.title}</li>
            ))}
            </ul>
        </div>
    )
}
export default Main