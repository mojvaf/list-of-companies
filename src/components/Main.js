import React, {useEffect,useState} from 'react';
import {lists} from '../util/companyList'
import {comp} from '../util/categoryPerCompany'

const Main=()=> {
    const [companies, setCompanies] = useState(null)


    return (
        <div>
          <ul>
              {Object.entries(lists).map(([key,list]) =>(
                  <li key={key}>{list.title}</li>
              ))}
          </ul>
        </div>
    )
}
export default Main