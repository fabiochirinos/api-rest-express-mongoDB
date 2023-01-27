const userService = require('../services/userService')

const getAllUser = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers()
    if (!allUsers) {
      res.status(404).json('Aún no se ha encontrado ningún usuarios')
    }
    res.json(allUsers)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const getOneUser = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await userService.getOneUser(userId)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const createNewUser = async (req, res) => {
  try {
    const newUser = await userService.createNewUser(req.body)
    res.json(newUser)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const updateOneUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateOneUser(req)
    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const deleteOneUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteOneUser(req.params)
    res.json(deletedUser)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

module.exports = {
  getAllUser,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}