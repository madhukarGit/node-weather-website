
const weatherForm = document.querySelector('form')

const searchelement = document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    const location = searchelement.value

    console.log(location)

    console.log('testign')
})