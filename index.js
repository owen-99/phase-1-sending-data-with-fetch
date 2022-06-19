// Add your code here
function submitData(username, userEmail){
    const body = document.querySelector('body');
    const user={
        'name': username,
        'email': userEmail,
    }
    return fetch('http://localhost:3000/users',{
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user)
    }).then(
        response => response.json()
    ).then(
        newObj => {
            body.innerHTML=newObj.id;
        }
    ).catch(
        error => {
            body.innerHTML='Unauthorized Access';
        }
    )
}