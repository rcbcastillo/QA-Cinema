import { FaStar } from "react-icons/fa";
import { useState } from "react";

const RatingComments = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const createArrayOfStars = (numberOfStars) => [...Array(numberOfStars)];
  const Stars = ({ selected = false, onSelect }) => {
    return <FaStar color={selected ? "yellow" : "gray"} onClick={onSelect} />;
  };

  return (
    <>
      <div className="flex flex-col ...">
        <div>
          {selectedStars}/{totalStars}
        </div>
        <div className="flex flex-row...">
          {createArrayOfStars(totalStars).map((stars, index) => (
            <Stars
              key={index}
              selected={selectedStars > index}
              onSelect={() => setSelectedStars(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingComments;
