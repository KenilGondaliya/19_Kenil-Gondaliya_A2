const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
    .then(async () => {
        const user = await User.create({
            name: "Kenil Gondaliya",
            email: "kenil@gmail.com",
            password: "12345678"
        });

        console.log(user);
        process.exit();
    })
    .catch(console.error);