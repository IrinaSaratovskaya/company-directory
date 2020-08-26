import React from 'react';
import ListItem from './ListItem';

const CompaniesList = ({ companies }) => {

    return (
        <div>
           {companies.map((company, i) => {
                return (
                    <ListItem 
                        key={i} 
                        companyToDisplay={company}
                    />
                );
            })}
        </div>
    );
}

export default CompaniesList;