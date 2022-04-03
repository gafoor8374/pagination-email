const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const adminmail=["gafoor@gamil.com","vccc@s.com","s@s.com","h@c.com","s@c.com"]

const User= mongoose.model("user", userSchema);


module.exports=[User,adminmail]