import React, {useState} from "react";
import {multipleFilesUpload} from "../services/file-upload.service";

const AddProduct = () => {
    const [multipleFiles, setMultipleFiles] = useState<File[]>([])

    const MultipleFilesChange = (e: any) => {
        setMultipleFiles(e.target.files)
        console.log('multipleFiles', e.target.files);
    }

    const UploadMultipleFiles = async () => {
    const formData = new FormData();
    for(let i=0; i<multipleFiles.length; i++) {
        formData.append('files', multipleFiles[i]);

    }
        console.log('multipleFile[i]', multipleFiles);
    await multipleFilesUpload(formData);

  }

        return (
            <div>
                <h1>Select your files</h1>
                <input
                    type="file"
                    multiple//To select multiple files
                    onChange={MultipleFilesChange}
                />
                <button onClick={UploadMultipleFiles}
                >Send Files</button>
            </div>
        );
}

export default AddProduct;
