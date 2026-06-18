import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function ImagePreview({ onAvatarChange }) {
  const [preview, setPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onAvatarChange(file);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        id="avatar"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleAvatarChange}
      />

     <div className="w-full flex items-center justify-center">
  {preview ? (
    <label htmlFor="avatar" className="cursor-pointer">
      <img
        src={preview}
        alt="Preview"
        className="h-15 w-15 rounded-lg object-cover"
      />
    </label>
  ) : (
    <label
      htmlFor="avatar"
      className="
        cursor-pointer
        bg-neutral-800
        text-white
        h-20
        w-full
        rounded-lg
        border-2
        border-dashed
        border-gray-500
        flex
        items-center
        justify-center
      "
    >
      <UploadCloud className="h-10 w-8 text-gray-500" />
    </label>
      )}
    </div>

    <input
      id="avatar"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleAvatarChange}
    />

    </div>
  );
}