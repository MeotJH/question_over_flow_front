const getToken = () => {
    return JSON.parse(localStorage.getItem("Authorization"));
}

const setToken = (urlToken) => {
    localStorage.setItem("Authorization", JSON.stringify(urlToken));
}

const hasToken = () => {
    if( localStorage.getItem("Authorization") != null){
        return true;
    }
    return false;
}

const deleteToken = () => {
    localStorage.removeItem("Authorization");
}
export { getToken, setToken, hasToken, deleteToken };