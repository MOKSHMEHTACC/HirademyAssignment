const mongoose = require("mongoose");
const AssistantSchema = new mongoose.Schema
    (
        {
            id: {
                type: Number,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
            },
            mobile: {
                type: Number,
                required: true,
                unique: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            salary: {
                type: Number,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,

            },
            department: {
                type: String,
                required: true,
            },
            role: {
                type: String,
                required: true,
            },

        },

        {
            timestamps: true                     // displays time when the file is updated.
        },

    );

module.exports = mongoose.model("Assistant", AssistantSchema);