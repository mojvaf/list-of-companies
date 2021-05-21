import React, {useEffect,useState} from 'react'
//files
import categoryPerCompany from '../util/categoryPerCompany.json'
import  categories from '../util/categoryList.json'


export default function CompaniesCategories({selected}) {
    const [companyCategories, setCompanyCategories] = useState();

    useEffect(() => {
        if(!selected) {
          return 
        }
         const companyCategoryIds = categoryPerCompany[selected];   
         const companyCategories = Object.keys(companyCategoryIds).map((categoryId) => categories[categoryId]);     
         setCompanyCategories(companyCategories)
          }, [selected])
    

    return (
        <div> 
        <h2>Categories</h2>
            {companyCategories ? (
                   companyCategories.map((category) => (
                       <div key={`${selected}-${category.title}`}>{category.title}</div>
                     ))     
           ): null}
        </div>
    )
}
