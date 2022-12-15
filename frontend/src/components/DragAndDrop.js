import React, {useState} from 'react';
import FilesTable from "./FilesTable";

const DragAndDrop = () => {
    const [files, setFiles] = useState([]);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        Array.from(event.dataTransfer.files).forEach(file => setFiles(files => [...files, file]));
    };

    const addFiles = (event) => {
        event.preventDefault();
        Array.from(event.target.files).forEach(file => setFiles(files => [...files, file]))
    }

    return (
        <>
            {files.length > 0 && (
                <div style={{paddingBottom: "30px", paddingTop: "0px"}}>
                    <FilesTable files={files}/>
                </div>
            )}
            <div
                className="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <h2>Drag and Drop<br/>files to upload</h2>
                <h2>OR</h2>

                <label htmlFor="filePicker" style={{cursor: "pointer", backgroundColor: "antiquewhite"}}>
                    <h2><i className="fa-solid fa-upload"></i>&nbsp;&nbsp;Select files</h2>
                    <input
                        type="file"
                        id="filePicker"
                        multiple
                        onChange={addFiles}
                        hidden
                    />
                </label>
            </div>
        </>
    );
};

export default DragAndDrop;
