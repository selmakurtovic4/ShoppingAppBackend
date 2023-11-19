const  userService  = require('../services/userService');

async function getAllUsers(request, response, errorHandler) {
  try {

    return await userService.getAllUsers();
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
  }
}

async function getUserById(request, response, errorHandler) {
  try {
    const { id } = request.params;
    const user = await userService.getUserById(id);

    if (user) {
      console.log("User data:", user.dataValues);
      return user.dataValues;
    }
    // No return value in the else block
  } catch (error) {
    console.error("Error in controller:", error);
    errorHandler(error);
    throw error; // Rethrow the error
  }
}

async function updateUser(request, response, errorHandler) {
  const { id } = request.params;
  const userData = request.body;
  console.log("Controller update");

  try {
    await userService.updateUser(id, userData);
  } catch (error) {
    console.error('Error updating user:', error);
    errorHandler(error);
  }
}

async function createUser(request, response, errorHandler) {
  const userData = request.body;
  console.log("Controller create");

  try {
    console.log("Service");
    await userService.createUser(userData);
  } catch (error) {
    console.error('Error creating user:', error);
    errorHandler(error);
  }
}

async function deleteUser(request, response, errorHandler) {
  const { id } = request.params;
  
  try {
    await userService.deleteUser(id);
  } catch (error) {
    console.error('Error deleting user:', error);
    errorHandler(error);
  }
}

module.exports = { getAllUsers, getUserById, updateUser, createUser, deleteUser };
