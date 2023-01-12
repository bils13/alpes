const redirecionaWpp = (e) => {
    let modelo = e.target
    window.location.href = `https://api.whatsapp.com/send?phone=5516997041976&text=Ola,%20poderia%20me%20apresentar%20o%20purificador%20de%20agua%20Soft%20${modelo.value}?`
}