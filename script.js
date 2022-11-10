const nameInput = document.querySelectorAll('.firstName')[0]

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('')
  nameInput.checkValidity()
})

nameInput.addEventListener('invalid', () => {
  if (nameInput.value === '') {
    nameInput.setCustomValidity('Please enter your first name')
  } else {
    nameInput.setCustomValidity(
      'First name can only contain upper and lowercase letters. Please try again.'
    )
  }
})

const lastNameInput = document.querySelectorAll('.lastName')[0]

lastNameInput.addEventListener('input', () => {
  lastNameInput.setCustomValidity('')
  lastNameInput.checkValidity()
})

lastNameInput.addEventListener('invalid', () => {
  if (lastNameInput.value === '') {
    lastNameInput.setCustomValidity('Please enter your last name')
  } else {
    lastNameInput.setCustomValidity(
      'Last name can only contain upper and lowercase letters. Please try again.'
    )
  }
})

const email = document.getElementsByClassName('email')[0]

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email: alex@alex.com')
    email.reportValidity()
  } else {
    email.setCustomValidity('')
  }
})

const password = document.getElementsByClassName('password')[0]

password.addEventListener('input', () => {
  if (password.validity.tooShort) {
    password.setCustomValidity('Your password should be at least 5 characters long')
    password.reportValidity()
  } else {
    password.setCustomValidity('')
  }
})

const zip = document.getElementsByClassName('zip')[0]

zip.addEventListener('input', () => {
  if (zip.validity.tooShort) {
    zip.setCustomValidity('Your zipcode should be at least 6 numbers long')
    zip.reportValidity()
  } else if (zip.validity.tooLong) {
    zip.setCustomValidity('Your zipcode should be at least 6 numbers long')
    zip.reportValidity()
  } else {
    zip.setCustomValidity('')
  }
})

const btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click', () => {
  alert('Thank you for submitting this form!')
})
