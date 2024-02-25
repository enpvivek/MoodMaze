import React, { useState } from "react";

const Emotiondetection = () => {
  const [output, setOutput] = useState("");
  const [imageInput, setImageInput] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageInput(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const analyzeEmotion = async () => {
    const url = "https://faceanalyzer-ai.p.rapidapi.com/faceanalysis";
    const data = new FormData();
    data.append("image", imageInput);

    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": "950a381ac9msh261428ef97b1b72p11c7e1jsn022e6861c4c9",
        "X-RapidAPI-Host": "faceanalyzer-ai.p.rapidapi.com",
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setOutput(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white border rounded-lg shadow-md overflow-hidden mx-10">
        <div className="flex items-center justify-between flex-col gap-4 sm:flex-row p-6 border-b">
          <h2 className="text-xl font-bold">Emotion Detection</h2>
          <div>
            <label className="bg-[#1d232a] px-4 py-2 text-lg font-medium rounded-lg hover:opacity-70" htmlFor="imageFile">Choose File</label>
            <input className="hidden" id="imageFile" type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
        <div className="relative">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected Preview"
              className="w-full h-auto object-cover object-center"
            />
          )}
          {output && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                <h3 className="text-lg font-bold mb-4">
                  Emotion Detection Result:
                </h3>
                <pre className="text-sm">{output}</pre>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <button
            onClick={analyzeEmotion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!imageInput}
          >
            Analyze Emotion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emotiondetection;
