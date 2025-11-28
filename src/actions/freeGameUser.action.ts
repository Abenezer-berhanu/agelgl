"use server";

import db from "@/lib/db/db";
import { freeGameUser } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";

export const registerNewGameUser = async (data: { phone: string }) => {
  try {
    const newUser = await db
      .insert(freeGameUser)
      .values({ phone_number: data.phone, user_id: uuidv4() });

    if (newUser) {
      return {
        success: true,
        error: false,
        message: "Registered Successfully",
        data: data.phone,
      };
    } else {
      return {
        error: true,
        success: false,
        message: "something went wrong please try again",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: true,
      success: false,
      message: "something went wrong please try again",
      data: null,
    };
  }
};
