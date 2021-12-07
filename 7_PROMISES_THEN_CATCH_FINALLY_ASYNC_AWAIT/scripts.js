const resp = fetch('https://api.github.com/users/LeandroBernardo')

resp
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(`Ocorreu algum erro ${err}`)
        .finally(() => console.log('Promise finalizada')))


/**
 * Resolvendo com async await
 */


async function getGithubUser() {
    try {
        const resp = await fetch('https://api.github.com/users/LeandroBernardo')
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getGithubUser()