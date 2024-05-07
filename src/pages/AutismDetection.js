import React, { useState } from "react";

const AutismDetection = () => {

  //this response Data will store the api response, display it wherever u want
  const [responseData, setResponseData] = useState({})

  const [scores, setScores] = useState({
    A1_Score: 0,
    A2_Score: 0,
    A3_Score: 0,
    A4_Score: 0,
    A5_Score: 0,
    A6_Score: 0,
    A7_Score: 0,
    A8_Score: 0,
    A9_Score: 0,
    A10_Score: 0,
    age: "",
    gender: "",
    ethnicity: "",
    jundice: "",
    austim: "",
    contry_of_res: "",
    used_app_before: "",
    result: 9,
    age_desc: "",
    relation: "",
    class_asd: "", // Participant classification
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScores((prevScores) => ({
      ...prevScores,
      [name]: value === "yes" ? 1 : 0,
    }));
    console.log(scores); // Debugging: Log the updated state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert scores object to JSON
    const data = JSON.stringify(scores);
    console.log(data);
    // URL of your Flask API endpoint
    const url = "http://127.0.0.1:10000/predict"; // Update with your actual API URL

    // Make a POST request to the API endpoint
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Print the response
        console.log(data);
        setResponseData(data)
      })
      .catch((error) => {
        // Handle the exception
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* A1-A10 Questions */}
      {/*...previous A1-A10 questions code... */}
      <div>
        <label>
          Question 1: I often notice small sounds when others do not
        </label>
        <select name="A1_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 2: I usually concentrate more on the whole picture, rather
          than the small details
        </label>
        <select name="A2_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 3: I find it easy to do more than one thing at once
        </label>
        <select name="A3_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 4: If there is an interruption, I can switch back to what I
          was doing very quickly
        </label>
        <select name="A4_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 5: I find it easy to ‘read between the lines’ when someone is
          talking to me
        </label>
        <select name="A5_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 6: I know how to tell if someone listening to me is getting
          bored
        </label>
        <select name="A6_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 7: When I’m reading a story I find it difficult to work out
          the characters’ intentions
        </label>
        <select name="A7_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 8: I like to collect information about categories of things
          (e.g. types of car, types of bird, types of train, types of plant etc)
        </label>
        <select name="A8_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 9: I find it easy to work out what someone is thinking or
          feeling just by looking at their face
        </label>
        <select name="A9_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>
          Question 10: I find it difficult to work out people’s intentions
        </label>
        <select name="A10_Score" onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Additional Fields */}
      <div>
        <label>Age of participant</label>
        <input type="number" name="age" onChange={handleChange} />
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" onChange={handleChange}>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
      </div>
      <div>
        <label>Ethnicity</label>
        <select name="ethnicity" onChange={handleChange}>
          <option value="White-European">White-European</option>
          <option value="Latino">Latino</option>
          <option value="?">Unknown</option>
          <option value="Others">Others</option>
          <option value="Black">Black</option>
          <option value="Asian">Asian</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Pasifika">Pasifika</option>
          <option value="South Asian">South Asian</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Turkish">Turkish</option>
          <option value="others">Other</option>
        </select>
      </div>
      <div>
        <label>Jaundice</label>
        <select name="jundice" onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <label>Autism</label>
        <select name="austim" onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <label>Country of Residence</label>
        <input type="text" name="contry_of_res" onChange={handleChange} />
      </div>
      <div>
        <label>Used App Before</label>
        <select name="used_app_before" onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div>
        <label>Age Description</label>
        <select name="age_desc" onChange={handleChange}>
          <option value="18 and more">18 and more</option>
        </select>
      </div>
      <div>
        <label>Relation</label>
        <select name="relation" onChange={handleChange}>
          <option value="Self">Self</option>
          <option value="Parent">Parent</option>
          <option value="?">Unknown</option>
          <option value="Health care professional">
            Health care professional
          </option>
          <option value="Relative">Relative</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label>Participant Classification</label>
        <select name="class_asd" onChange={handleChange}>
          <option value="NO">NO</option>
          <option value="YES">YES</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AutismDetection;
