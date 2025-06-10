'use server';
import dbConnect, { collectionName } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export const loginUser = async (formData) => {
    const { email, password } = formData;

    const userCollection = await dbConnect(collectionName.userCollection);
    const user = await userCollection.findOne({email});
    if (!user) {
        console.error("User not found");
        return { success: false, message: "User not found" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.error("Invalid password");
        return { success: false, message: "Invalid password" };
    }
    return user

}