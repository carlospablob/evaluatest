import { NameLocalStorage } from "./NameLocalStorage"

export const IdNumber = () => {
    const employes = JSON.parse(localStorage.getItem(NameLocalStorage.EMPLOYES));

    const employe = employes.pop()

    return employe.id + 1;
}