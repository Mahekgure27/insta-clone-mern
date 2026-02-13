const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true,"User name already exists"],
        required: [true,"User name is required"]
    },
    email: {
        type: String,
        unique: [true,"Email already exists"],
        required: [true,"Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/njrwxgjyx/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg"
    }
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel;