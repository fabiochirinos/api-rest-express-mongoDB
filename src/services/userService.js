const userSchema = require('../models/userModel')

const getAllUsers = async () => {
  try {
    const allUsers = await userSchema.find()
    return allUsers
  } catch (error) {
    console.log(`No se pudo traer a los usuarios ${error}`)
  }
  return allUsers
}

const getOneUser = async (data) => {
  try {
    const singleUser = await userSchema.findById({ _id: data })
    return singleUser
  } catch (error) {
    console.log(`Usuario no encontrado. ${error}`)
  }
}

const createNewUser = async (data) => {
  try {
    const newUser = await userSchema(data).save()
    return newUser
  } catch (error) {
    console.log(error);
  }
}

const updateOneUser = async (data) => {
  try {
    const { userId } = data.params
    const { name, age, email } = data.body
    const updatedUser = await userSchema.updateOne({ _id: userId }, { $set: { name, age, email } })
    return updatedUser
  } catch (error) {
    console.log(`No se pude actualizar el usuario ${error}`)
  }

}

const deleteOneUser = async (data) => {
  try {
    const { userId } = data
    const deletedUser = await userSchema.remove({_id: userId})
    return deletedUser
  } catch (error) {
    console.log(`No se pudo eliminar el usuario ${error}`)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}