import React from 'react';

const icon = (category) => {
    if(category === 'Gym') {
        return <i class="fas fa-dumbbell"></i>
    }
    if(category === 'Restaurant') {
        return <i class="fas fa-utensils"></i>
    }
    if(category === 'Cafe') {
        return <i class="fas fa-coffee"></i>
    }
    if(category === 'Bank') {
        return <i class="fas fa-credit-card"></i>
    }
    if(category === 'Supermarket') {
        return <i class="fas fa-shopping-cart"></i>
    }
    if(category === 'Pharmacy') {
        return <i class="fas fa-pills"></i>
    }
    if(category === 'Clinic') {
        return <i class="fas fa-plus-square"></i>
    }
}

const CardItem = (props) => {
    const { companyToDisplay } = props;
    
    return (
        <div className="col-12 col-md-4">
            <div className="card card-card">
                <div className="icon icon-card">
                    {icon(companyToDisplay.category)}
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{companyToDisplay.name}</h5>
                    <p className="card-text">{companyToDisplay.category}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">Location: {companyToDisplay.location}</li>
                    <li className="list-group-item text-center">Tel. {companyToDisplay.phone}</li>
                    <li className="list-group-item address">Address: {companyToDisplay.address}</li>
                </ul>
            </div>
        </div>
    );
}

export default CardItem;