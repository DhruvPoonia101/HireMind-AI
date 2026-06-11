import { Upload } from "lucide-react";
import { useState } from "react";
import { uploadResume } from "../../services/resumeService";

function ResumeUpload({ setAnalysis }) {
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);


  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const data = await uploadResume(file);

      setAnalysis(data.analysis);
      setFileName(file.name);

      alert("Resume Uploaded ✅");
    } catch (error) {
      console.error(error);
      alert("Upload Failed ❌");
    }

    setUploading(false);
  };

  return (
    <div
      className="
      mt-8
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Resume Analyzer
      </h2>

      <div
        className="
        border-2
        border-dashed
        border-cyan-500/30
        rounded-2xl
        p-10
        text-center
        hover:border-cyan-400
        transition-all
        "
      >
        <Upload
          size={50}
          className="mx-auto mb-4 text-cyan-400"
        />

        <h3 className="text-xl font-semibold mb-2">
          Upload Resume
        </h3>

        <p className="text-gray-400 mb-5">
          PDF, DOCX Supported
        </p>

        <input
          type="file"
          className="hidden"
          id="resume"
          onChange={handleFileChange}
        />

        <label
          htmlFor="resume"
          className="
          inline-block
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          cursor-pointer
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Choose File
        </label>

        {uploading && (
          <p className="text-cyan-400 mt-4">
            Uploading...
          </p>
        )}

        {fileName && (
          <p className="text-green-400 mt-4 break-all">
            Uploaded: {fileName}

          </p>
        )}
      </div>
    </div>
  );
}

export default ResumeUpload;