import { NameLocalStorage } from "../utils/NameLocalStorage"

export const InitDataEmployes = () => {
    const employesLocalStorage = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))

    const employes = [
        {
            id: 1,
            name: 'Carlos Pablo',
            business: 'PALO IT',
            salary: 28000,
            picture: ''
        },
        {
            id: 2,
            name: 'Demo demo',
            business: 'Test 1',
            salary: 28000,
            picture: ''
        },
        {
            id: 3,
            name: 'Demo tres',
            business: 'Test tres',
            salary: 8000,
            picture: ''
        }
    ]
    
    if(employesLocalStorage) {
        localStorage.setItem(NameLocalStorage.EMPLOYES , JSON.stringify(employesLocalStorage));
    } else {
        localStorage.setItem(NameLocalStorage.EMPLOYES , JSON.stringify(employes));
    }
}

export const GetTotalEmployes = () => {
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))
    return employes.length;
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

export const GetEmployeById = (id) => {
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))
    return employes.find(emp => Number(emp.id) === Number(id));
}


export const UpdateDataEmploye = (employe) => {
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES))

    const indexEmploye = employes.findIndex(emp => Number(emp.id) === Number(employe.id))

    employes[indexEmploye] = employe;

    localStorage.setItem(NameLocalStorage.EMPLOYES, JSON.stringify(employes));
}