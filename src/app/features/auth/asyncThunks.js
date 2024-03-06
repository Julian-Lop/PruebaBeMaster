import { createAsyncThunk } from "@reduxjs/toolkit";

// * Firebase Authenticate Service
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

// * Async functions (async ations)
export const registerUser = createAsyncThunk('register', async (data) => {
  const { email, password } = data
  console.log({data})
  const response = await createUserWithEmailAndPassword(auth, email, password)
  const { _tokenResponse } = response
  return _tokenResponse
})

export const loginUser = createAsyncThunk('login', async (data) => {
  const { email, password } = data
  const response = await signInWithEmailAndPassword(auth, email, password)
  const { _tokenResponse } = response
  return _tokenResponse
})

export const signoutUser = createAsyncThunk('signout', async () => {
  const response = await signOut(auth)
  return true
})