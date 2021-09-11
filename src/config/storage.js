const { REACT_APP_TOKEN_KEY : tk} = process.env;


export const saveUser = ( data ) => new Promise((resolve) => { 
    localStorage.setItem(tk, JSON.stringify( data))
    resolve();
});


export const getToken = () => JSON.parse(localStorage.getItem(tk));

export const hasToken = () => {
    const data = getToken();
    return data?.jwt || false;
} 


export const isAuthenticated = () => hasToken() !== false;


// export const clearStorage = localStorage.clear();
export const clearStorage = () => localStorage.removeItem(tk);


