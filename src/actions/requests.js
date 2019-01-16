export function getProducts(callback){
    return fetch("http://northwindapi.azurewebsites.net/api/products")
        .then(response => response.json())
        .then(response => callback(response))
}