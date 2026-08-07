import { createUser } from "../services/user.service.js";
import { getUsers } from "../services/user.service.js";
import { unsubscribe } from "../services/user.service.js";
import { updatePreferences } from "../services/user.service.js";


export const subscribeUser = async (req,res)=>{
    const {email , categories, frequency} = req.body;

    const user = await createUser({
        email,
        categories,
        frequency,
    });

    res.status(201).json({
        success: true,
        message: "Subscription created successfully.",
        user,
    });
}

export const getAllUsers = async (req, res) => {
  const users = await getUsers();

  res.status(200).json({
    success: true,
    count: users.length,
    users,
  });
};

export const unsubscribeUser = async (req, res) => {
  const { id } = req.params;

  const user = await unsubscribe(id);

  res.status(200).json({
    success: true,
    message: "User unsubscribed successfully.",
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { categories, frequency } = req.body;

  const user = await updatePreferences({
    id,
    categories,
    frequency,
  });

  res.status(200).json({
    success: true,
    message: "Preferences updated successfully.",
    user,
  });
};


