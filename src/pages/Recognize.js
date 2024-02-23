import React, { useState } from "react";

const Recognize = () => {
  const [inputText, setInputText] = useState("");
  const [emotionResult, setEmotionResult] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleRecognize = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "ZMjSOPUomdKIn2Pxq47O7SM2XPT1oyu8");
      myHeaders.append("Content-Type", "application/json");

      const requestBody = {
        text: inputText,
      };

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(
        "https://api.apilayer.com/text_to_emotion",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.text();
      setEmotionResult(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex w-full h-screen flex-col">
      <div className="w-full justify-center my-8 text-center">
        <h1>Write something to check your mood</h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text here"
          className="border border-gray-300 rounded p-2 mb-4"
          rows={4}
          style={{ resize: "vertical" }}
        />
        <button
          onClick={handleRecognize}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Recognize Emotion
        </button>
        {emotionResult && (
          <div className="mt-4">
            <h3>Emotion Result:</h3>
            <p>{emotionResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recognize;
