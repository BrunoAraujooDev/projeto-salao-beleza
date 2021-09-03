const { REACT_APP_TOKEN_KEY : tk} = process.env;


export const saveUser = ( data ) => localStorage.setItem(tk, JSON.stringify( data));


export const getToken = () => JSON.parse(localStorage.getItem(tk));

export const hasToken = () => {
    const data = getToken();
    return data?.jwt || false;
} 


export const isAuthenticated = () => hasToken() !== false;


