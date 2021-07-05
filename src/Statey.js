//Statey1.js
import React, { useState } from "react";

const Statey1 = () => {
  const [art, setArt] = useState();
  const [siblingsNum, setSiblingsNum] = useState();

  const handleArt = () => setArt("1)Maximize the Beauty- fully channel the beauty with in. Maybe ask what makes this moment beautiful? See if beauty can be increased in every situation. MtB also could be taken as A use of reason and also a disciplining of the senses to focus on beauty (i.e. all the pretty flowers, all the pretty birds).");
  const handleSiblingsNum = () => setSiblingsNum("2)Full Expression - it takes a lot of effort for one to understand who they are when they are comfortable and how to channel the most real expressions of themselves what holds people back? Shyness, distraction (inability to focus on that which they want express","inspiring","positive");

  return (
    <div>


      <div>
        <button onClick={handleArt}>Chill Ideas</button>
        <p> {art} </p>

        <button onClick={handleSiblingsNum}>Fun Ideas</button>
        {siblingsNum}
      </div>
</div>
  );
};

export default Statey1;
