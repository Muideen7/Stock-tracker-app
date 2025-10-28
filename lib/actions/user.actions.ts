"use server";

export type UserForNewsEmail = {
  id: string;
  email: string;
  name: string;
};

import { connectToDatabase } from "@/database/mongoose";

export const getAllUsersForNewsEmail = async (): Promise<
  UserForNewsEmail[]
> => {
  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if (!db) throw new Error("MongoDB connection not found");

    const users = await db
      .collection("user")
      .find(
        { email: { $exists: true, $ne: null } },
        { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } }
      )
      .toArray();

    return users
      .filter((user) => user.email && user.name)
      .map((user) => {
        const id =
          (typeof user.id === "string" && user.id) ||
          (typeof user._id?.toString === "function" ? user._id.toString() : "");
        return id
          ? { id, email: String(user.email), name: String(user.name) }
          : null;
      })
      .filter(Boolean) as UserForNewsEmail[];
  } catch (e) {
    console.error("Error fetching users for news email:", e);
    return []; // ✅ Always return an array on failure
  }
};
