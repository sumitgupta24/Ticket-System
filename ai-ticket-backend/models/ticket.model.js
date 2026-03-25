import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        status: {
            type: String,
            default: "Todo"
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },
        priority: String,
        deadline: String,
        helpfulNotes: String,
        relatedSkills: [String]
    }, 
    {
        timestamps: true
    }
)