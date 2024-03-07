import { createAsyncThunk } from "@reduxjs/toolkit";

// * Firebase Authenticate Service
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

export const isAuth = createAsyncThunk('isauth', async () => {
  return await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        unsubscribe();
          resolve(user);
      }, error => {
          unsubscribe();
          reject(error);
      });
  });
})

// ? Middleware for private routes with Firebase Authentication
export const isAuthenticated = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        unsubscribe();
          resolve(user);
      }, error => {
          unsubscribe();
          reject(error);
      });
  });
}