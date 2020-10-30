
const weatherForm = document.querySelector('form')

const searchelement = document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    const location = searchelement.value

    fetch('/weather?address='+location).then((response)=>{

        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})