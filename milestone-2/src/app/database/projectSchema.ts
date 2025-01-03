import mongoose, { Schema } from "mongoose";

type Project = {
        title: string;
        slug: string; 
        description: string; 
        image: string; // url for string in public
};

const projectSchema = new Schema<Project>({
        title: { type: String, required: true },
        slug: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
})

const Project = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Project;

