//file upload to cloudinary
import { v2 as cloudinary } from 'cloudinary';
import { fs } from "fs";

import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
            //upload the file to cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            console.log("File uploaded successfully",response.url);
            return response;;
        }
    } catch (error) {
        fs.unlinkSync(localFilePath); // delete the locally saved temp file as the upload failed
        return null;
    }
}
export { uploadOnCloudinary };