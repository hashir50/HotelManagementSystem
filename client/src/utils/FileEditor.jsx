import React, { useState } from 'react';

const FileEditor = ({ value, setValue }) => {
    const [file, setFile] = useState(value);

    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        if (newFile) {
            setFile(newFile);
            setValue(newFile); // Notify the DataGrid of the new file
        }
    };

    return (
        <input
            type="file"
            accept="image/*"
            style={{ width: '100%' }}
            onChange={handleFileChange}
            value={file ? file.name : ''} // Display the file name
        />
    );
};

export default FileEditor;
