import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./users-service"

export const findUsersThunk = createAsyncThunk(
'users/findUsers', async () =>
    await service.findTuits()
)

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async (userId) => {
    await service.deleteTuit(userId)
    return userId}
)  
export const createUserThunk = createAsyncThunk(
    'users/createUser',
    async (user) => {
    const newUser = await service.createTuit(user)
    return newUser
})
export const updateUserThunk =
createAsyncThunk(
    'users/updateUser',
    async (user) =>
    await service.updateTuit(user)
)

