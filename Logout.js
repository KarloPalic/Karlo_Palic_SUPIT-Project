function OnClickLogout() {
    sessionStorage.clear('token');
    sessionStorage.clear('username');

    const token = sessionStorage.getItem('token');
    const curriculum = document.querySelector('.menuItemLogin');
    const logout = document.querySelector('.logOut');
    const login = document.querySelector('.SISUPitem1');

    if(token == null){
        curriculum.style.visibility = 'hidden';
        logout.style.visibility = 'hidden';
        login.style.visibility = 'visible';
    } else {
        curriculum.style.visibility = 'visible';
        logout.style.visibility = 'visible';
        login.style.visibility = 'hidden';
    }
}