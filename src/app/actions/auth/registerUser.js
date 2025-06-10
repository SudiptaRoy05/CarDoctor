'use server';
import bcrypt from 'bcrypt';

import dbConnect, { collectionName } from "@/lib/dbConnect";

export const registerUser = async (formData) => {
    console.log(formData);
    const { name, email, password } = formData;
    if (email === "" || password === "" || name === "") {
        console.error("All fields are required");
        return { success: false, message: "All fields are required" };
    }
    const userCollection = await dbConnect(collectionName.userCollection)

    const userExists = await userCollection.findOne({ email: formData.email });
    if (userExists) {
        console.error("User already exists");
        return { success: false, message: "User already exists" };
    } else {
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        const newUser = {
            name: formData.name,
            email: formData.email,
            password: hashedPassword,
        };
        const result = await userCollection.insertOne(newUser);
        if (result.acknowledged) {
            console.log("User registered successfully");
            return { success: true, message: "User registered successfully" };
        } else {
            console.error("Failed to register user");
            return { success: false, message: "Failed to register user" };
        }
    }


}