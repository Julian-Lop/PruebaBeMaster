import React, { useEffect, useState } from 'react'

// * React-router
import { useNavigate } from 'react-router-dom'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
// * Forms
import { useForm } from 'react-hook-form'
// * SweetAlert
import Swal from 'sweetalert2'

// * Actions
import { loginUser, registerUser } from '../../app/features/auth/asyncThunks'

// * Components
import { InputForm } from './InputForm'
import { BtnOne } from './BtnOne'


export const FormAuth = ({ typeForm = 'login' }) => {
  
  const authState = useSelector( state => state.auth)

  // ? redirect to home
  const navigate = useNavigate()

  // ? dispatch actions
  const dispatch = useDispatch()

  // ? Form login and register
  const { register, handleSubmit, watch } = useForm()

  // ? Steps for login and register
  const [step, setStep] = useState(1)

  // ? Handle data form
  const onSubmit = (data) => {
    if (!data.password) {
      setStep(2)
      return
    }

    if(typeForm == 'login') dispatch(loginUser(data))
    if (typeForm == 'register') dispatch(registerUser(data))
  }

  useEffect(() => {
    if (authState.status == 'failed') {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Correo o contraseña incorrectos, intenta de nuevo.",
      });
    }
    if (authState.status == 'succeeded') {
      navigate('/')
    }
  },[authState])

  return (
    <div className='FormAuth'>

      <div className='HeaderForm'>
        <strong>PASO {step}</strong>

        {step == 1 && <h1>Escribir correo para continuar</h1>}
        {step == 2 && <h1>Escribir tu contraseña</h1>}

        {step == 1 && <p>Es necesario iniciar sesión en tu cuenta.
          En caso de no tener una, recibirás
          indicaciones para crearla.
        </p>}
        {step == 2 && <p>Ingresa a tu cuenta con tu email: <b>{watch("email")}</b>
        </p>}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        {step == 1 && <InputForm
          props={{
            id: 'email',
            type: 'email',
            text: 'Correo electrónico',
            inputOpt : {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          }}
        />}
        {step == 2 && <InputForm
          props={{
            id: 'password',
            type: 'password',
            text: 'Contraseña',
            inputOpt : {...register("password", { required: true })}
          }}
        />}
        <BtnOne type='submit' value={typeForm == 'register' && step == 2 ? 'Registrarse' : undefined} />
      </form>
    </div>
  )
}
