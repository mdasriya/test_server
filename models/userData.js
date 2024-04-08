const mongoose = require("mongoose");

// formData.append("FirstName", data.FirstName)
// formData.append("LastName", data.LastName)
// formData.append("Address", data.Address)
// formData.append("County", data.County)
// formData.append("Postcode", data.Postcode)
// formData.append("Phone", data.Phone)
// formData.append("Email", data.email)
// formData.append("Notes", data.Notes)
const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
    },
    // LastName: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    Address: {
        type: String,
        // required: true,
        trim: true,
    },
    County: {
        type: String
    },
    Postcode: {
        type: Number,
        // required: true,
    },
    Phone: {
        type: Number,
        // required: true,
    },
    Notes: {
        type: String
    },
    Password: {
        type: String,
        // required: true,
    },
    Image: {
        type: String
    },
    Token: {
        type: String,
    },
});

module.exports = mongoose.model("User", userSchema);