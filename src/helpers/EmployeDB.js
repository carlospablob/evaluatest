import { NameLocalStorage } from "../utils/NameLocalStorage"

export const InitDataEmployes = () => {
    const employes = [
        {
            id: 1,
            name: 'Carlos',
            business: 'PALO IT',
            salary: 28000,
            pincture: ''
        }
    ]
    localStorage.setItem(NameLocalStorage.EMPLOYES , JSON.stringify(employes))
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