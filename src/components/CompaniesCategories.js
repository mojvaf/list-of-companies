import React, {useEffect,useState} from 'react'
import categoryPerCompany from '../util/categoryPerCompany.json'
import  categories from '../util/categoryList.json'


export default function CompaniesCategories({selected}) {
    console.log(selected)
    const [companyCategories, setCompanyCategories] = useState();

    useEffect(() => {
        if(!selected) {
          return;
        }
    
        const companyCategoryIds = categoryPerCompany[selected];
          console.log(categoryPerCompany)
        const companyCategories = Object.keys(companyCategoryIds).map((categoryId) => categories[categoryId]);
        console.log(companyCategories)
    
        setCompanyCategories(companyCategories);
    
      }, [selected])
    

    return (
        <div>
            {companyCategories ? (
                   companyCategories.map((category) => (
                       <div key={`${selected}-${category.title}`}>{category.title}</div>
                     ))
                   
           ): null}
        </div>
    )
}
