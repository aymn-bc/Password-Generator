let passwordEl = document.getElementById("password-el")

function generatePassword()
{
    let password = ""

    let current = ""
    for (let i = 0; i < 16; i++)
    {
        current = String.fromCharCode(Math.floor(Math.random() * 57) + 65)
        if ((current > 'A' && current < 'Z') || (current > 'a' && current < 'z'))
        {
            password += current
        }
        else
        {
            password += Math.floor(Math.random()*10)
        }
    }
    passwordEl.textContent = "password: " + password
}

