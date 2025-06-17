"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  return (
    <CldUploadWidget
      uploadPreset="testing"
      options={{ maxFiles: 1 }}
      onSuccess={(result) => {
        if (typeof result === "object" && result?.info?.secure_url) {
          console.log("✅ Upload success:", result);
          onChange(result.info.secure_url);
        } else {
          console.warn("⚠️ Unexpected upload result:", result);
        }
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 flex flex-col justify-center items-center gap-4 text-neutral-600 border-neutral-300"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="upload"
                fill
                style={{ objectFit: "cover" }}
                src={value}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
