import React from 'react';
import CardItem from './CardItem';

const CompaniesCards = (props) => {
    const {companies} = props;

    return (
        <div className="row">
           {companies.map((company, i) => {
               
                return (
                    <CardItem 
                        key={i} 
                        companyToDisplay={company}
                    />
                );
            })}
        </div>
    );
}

export default CompaniesCards;