export const LogOutHook =()=>{
    const handleLogOut=()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
       setTimeout(() => {
        window.location.pathname="/"
        window.location.reload(false)
       }, 500);

      
    }
    return[handleLogOut]
}