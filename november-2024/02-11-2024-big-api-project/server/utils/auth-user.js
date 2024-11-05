import bcrypt from "bcrypt";
import { isFalsy } from "../middleware/is-falsy.js";

const isPasswordValid = (password, hashedPw) => {
  isFalsy(password && hashedPw);

  try {
    const successAuth = bcrypt.compare(password, hashedPw);
    return successAuth
      ? successAuth
      : `Authrozation fails, password doesn't match`;
  } catch (error) {
    console.error(`Error occurred while comparing between passwords: ${error}`);
  }
};

export { isPasswordValid };
