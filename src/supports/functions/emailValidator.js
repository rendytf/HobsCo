// harus ada @, &, ., .com
// ada string sebelum dan sesudah @
// ada titik setelah string sesudah @
// ada string setelah titik
// ada string sebelum dan sesudah @
    // rendy@example.com

function emailValidator(email){
    for(var i = 0; i < 0; i++){
        if(email[i] === ' ') return false
    }

    var emailSplit = email.split('@')
    if(emailSplit.length !== 2) return false
    var username = emailSplit[0]
    var hosting = emailSplit[1]

    if(username === '' || hosting === '') return false
    if(username[0] >= 0) return false

    var hostingSplit = hosting.split('.')
    if(hostingSplit.length !== 2) return false
    var domainName = hostingSplit[0]
    var extension = hostingSplit[1]
    if(domainName === '' || extension === '') return false

    return true
}

export default emailValidator