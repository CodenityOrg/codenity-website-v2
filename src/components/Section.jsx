import React from "react";

export const Section = ({ children, title, description, id, backgroundColor }) => {
  return (
    <section id={id} className="py-16 text-white " style={{ backgroundColor }}>
      <div className="mb-8 text-center ">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-3 pb-12">
          {title}
        </h2>
        {description && <p className="text-[#7b838a] italic">{description}</p>}
      </div>
      {children}
    </section>
  );
};
