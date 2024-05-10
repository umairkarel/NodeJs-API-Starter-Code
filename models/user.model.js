import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      /**
       *
       * @param doc The mongoose document which is being converted
       * @param ret The plain object representation which has been converted
       */
      transform(doc, ret) {
        // Santize
        delete ret.password;
        delete ret.__v;

        // Rename _id to id
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashed = await bcrypt.hash(this.get("password"), 10);
    this.set("password", hashed);
  }
  next();
});

// comparePassword - Returns true if DB's password matches with given password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
