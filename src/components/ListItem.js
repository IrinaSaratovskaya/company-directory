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

const ListItem = (props) => {
    const { companyToDisplay } = props;
    
    return (
        <div class="row">
            <div class="col-12">
                <div class="card card-list">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1 d-flex align-items-center plr10 justify-content-center">
                                <div className="icon icon-list">
                                    {icon(companyToDisplay.category)}
                                </div>
                            </div>
                            <div class="col-3 d-flex align-items-center plr10">
                                {companyToDisplay.name}
                            </div>
                            <div class="col-2 d-flex align-items-center plr10">
                                {companyToDisplay.category}
                            </div>
                            <div class="col-2 d-flex align-items-center plr10">
                                {companyToDisplay.location}
                            </div>
                            <div class="col-4 plr10">
                                <p>Tel. {companyToDisplay.phone}</p>
                                {companyToDisplay.address}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;