import prisma from "../config/prisma.js";

export const createUser = async ({ email, categories, frequency }) => {
  const user = await prisma.user.create({
    data: {
      email,
      categories,
      frequency,
    },
  });

  return user;
};

export const getUsers = async () => {
  return prisma.user.findMany({
    where: {
      isSubscribed: true,
    },
  });
};

export const getUsersByFrequency = async (frequency) => {
    return prisma.user.findMany({
        where: {
            isSubscribed: true,
            frequency,
        },
    });
};

export const unsubscribe = async (id) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      isSubscribed: false,
    },
  });
};

export const updatePreferences = async ({
  id,
  categories,
  frequency,
}) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      categories,
      frequency,
    },
  });
};

