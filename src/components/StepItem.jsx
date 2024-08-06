import React from "react";

export const StepItem = ({ index, text, imgUrl }) => {
  return (
    <div className="w-[292px] col-lg-4 col-md-6 mb-5">
      <div className="flex w-full">
        <div className="rounded-full bg-[#006490] text-center text-white w-[35px] h-[35px] flex grow-0 shrink-0 items-center justify-center mr-4">
          {index}
        </div>
        <p className="text-white text-center">
          {text}
          <b>
            <a target="_blank"></a>
          </b>
        </p>
      </div>
      <img className="img-fluid" src={imgUrl} alt="" />
    </div>
  );
};
