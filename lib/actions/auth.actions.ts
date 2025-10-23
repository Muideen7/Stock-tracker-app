"use server";

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    // Implement sign-up logic here, e.g., create user in database
    const response = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: fullName ?? "",
      },
    });
    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email: email,
          fullName: fullName ?? "",
          country: country ?? "",
          investmentGoals: investmentGoals ?? "",
          riskTolerance: riskTolerance ?? "",
          preferredIndustry: preferredIndustry ?? "",
        },
      });
      return {
        success: true,
        message: "User signed up successfully.",
        data: response,
      };
    }
    return { success: false, message: "Sign-up failed: no response from auth" };
  } catch (e) {
    console.log("Error during sign-up:", e);
    return { success: false, message: "Sign-up failed." };
  }
};

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    // Implement sign-in logic here, e.g., get user in database
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });

    return {
      success: true,
      data: response,
    };
  } catch (e) {
    console.log("Sign In failed:", e);
    return { success: false, message: "Sign in failed." };
  }
};

export const signOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
    return { success: true };
  } catch (e) {
    console.log("Error during sign-out:", e);
    return { success: false, error: "Sign-out failed." };
  }
};
