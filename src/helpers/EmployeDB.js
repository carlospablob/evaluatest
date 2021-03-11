import { NameLocalStorage } from "../utils/NameLocalStorage"

export const InitDataEmployes = () => {
    const employesLocalStorage = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))

    const employes = [
        {
            id: 1,
            name: 'Carlos Pablo',
            business: 'PALO IT',
            salary: 28000,
            pincture: ''
        },
        {
            id: 2,
            name: 'Demo demo',
            business: 'Test 1',
            salary: 28000,
            pincture: ''
        },
        {
            id: 3,
            name: 'Demo tres',
            business: 'Test tres',
            salary: 8000,
            pincture: ''
        }
    ]
    
    if(employesLocalStorage) {
        localStorage.setItem(NameLocalStorage.EMPLOYES , JSON.stringify(employesLocalStorage));
    } else {
        localStorage.setItem(NameLocalStorage.EMPLOYES , JSON.stringify(employes));
    }
}

export const GetInitEmployes = () => {
    return JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES));
}


export const SaveEmploye = (employe) => {
    
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))
    
    employes.push(employe);

    localStorage.setItem(NameLocalStorage.EMPLOYES, JSON.stringify(employes));

    return employes;
}

export const FilterEmployeByNameOrBusiness = (value) => {
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))

    const data = value !== '' ? 
    employes.filter(emp => (emp.name.toLowerCase()).includes(value.toLowerCase()) || (emp.business.toLowerCase()).includes(value.toLowerCase())) 
    : employes;

    return data;
}