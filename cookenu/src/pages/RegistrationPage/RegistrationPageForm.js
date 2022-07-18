// import React from 'react'

// const RegistrationPageForm = () => {
//     const history = useHistory()
//   const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
//   const [isLoading, setIsLoading] = useState(false)

//   const onSubmitForm = (event) => {
//     event.preventDefault()
//     signUp(form, clear, history, setRightButtonText, setIsLoading)
//   }

//   return (
//     <div>
//         <form onSubmit={onSubmitForm}>
//       <SignUpFormContainer>
//         <InputsContainer>
//           <TextField
//             value={form.name}
//             name={'name'}
//             onChange={onChange}
//             label={'Nome'}
//             variant={'outlined'}
//             fullWidth
//             required
//             autoFocus
//             margin={'normal'}
//           />
//           <TextField
//             value={form.email}
//             name={'email'}
//             onChange={onChange}
//             label={'E-mail'}
//             variant={'outlined'}
//             type={'email'}
//             fullWidth
//             required
//             margin={'normal'}
//           />
//           <TextField
//             value={form.password}
//             name={'password'}
//             onChange={onChange}
//             label={'Senha'}
//             variant={'outlined'}
//             type={'password'}
//             fullWidth
//             required
//             margin={'normal'}
//           />
//         </InputsContainer>
//         <Button
//           color={'primary'}
//           variant={'contained'}
//           type={'submit'}
//           fullWidth
//         >
//           {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
//         </Button>
//       </SignUpFormContainer>
//     </form>

//     </div>
//   )
// }

// export default RegistrationPageForm