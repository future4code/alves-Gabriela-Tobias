
export const home = (navigate) => {
    navigate = ("/")
}

export const login = (navigate) => {
    navigate('login')
}

export const voltar = (navigate) =>{
    navigate(-1)
}

export const list = (navigate) => {
 navigate ('listTrip')
}

export const createTrip = (navigate)=>{
    navigate('createTrip')
}

export const goTripDetails = (navigate) => { 
    navigate('tripDetail');
};

export const applicationPage = (navigate) => { 
    navigate('application');
};
export const goToAdminArea = (navigate) => { 
    navigate('admin');
};