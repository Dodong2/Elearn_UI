import React, { useState, useRef } from "react";
import { FiDownload, FiUploadCloud } from "react-icons/fi";

interface FileItemProps {
  name: string;
  url: string;
}

const FileItem: React.FC<FileItemProps> = ({ name, url }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-200">
    <span className="text-gray-800">{name}</span>
    <a href={url} download className="text-indigo-600 hover:text-indigo-800">
      <FiDownload className="h-5 w-5" />
    </a>
  </li>
);

export default function FilesContent() {
  const [files, setFiles] = useState([
    { name: "Document 1.pdf", url: "/files/document1.pdf" },
    { name: "Document 2.pdf", url: "/files/document2.pdf" },
    { name: "Document 3.pdf", url: "/files/document3.pdf" },
    { name: "Document 4.pdf", url: "/files/document4.pdf" },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // For demonstration purposes, we'll just add the name.
      // In a real application, you would handle the actual file upload.
      setFiles((prevFiles) => [
        ...prevFiles,
        { name: selectedFile.name, url: "#" },
      ]);
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      // For demonstration purposes, we'll just add the names.
      // In a real application, you would handle the actual file upload.
      const newFiles = Array.from(droppedFiles).map((file) => ({
        name: file.name,
        url: "#",
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  return (
    <>
      <div className="bg-gray-100 p-6 space-y-6 rounded-md shadow mt-3">
        <div
          className="relative border-2 border-dashed border-gray-400 rounded-md p-6 text-center cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleChooseFileClick}
        >
          <FiUploadCloud className="mx-auto h-12 w-12 text-gray-500 mb-2" />
          <p className="text-gray-600 font-semibold">Upload Files</p>
          <p className="text-gray-400 text-sm">
            Drag and drop your files here, or click to browse
          </p>
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            multiple
            ref={fileInputRef}
          />
        </div>
      </div>
      <div className="bg-gray-100 p-6 space-y-6 rounded-md shadow mt-3">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Available Files
        </h2>
        <ul>
          {files.map((file, index) => (
            <FileItem key={index} name={file.name} url={file.url} />
          ))}
        </ul>
        {files.length === 0 && (
          <p className="text-gray-500 mt-4">No files available.</p>
        )}
      </div>
    </>
  );
}
