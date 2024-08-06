import Image from "next/image";
import React from "react";

export const ProjectItem = ({
  name,
  description,
  link,
  collaborators,
  imgUrl,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="mx-5 max-w-[30%] cursor-pointer">
      <div className="bg-[#f9f9ff]">
        <div className="relative overflow-hidden">
          <Image src={`/${imgUrl}`} width={350} height={200} alt="" />
        </div>
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl font-bold">
            <a href={link}>{name}</a>
          </h4>
          <p>{description}</p>
          <div className="mt-4">
            <div className="flex flex-wrap gap-1">
              {collaborators.map((collaborator, idx) => (
                <div key={idx}>
                  <a
                    href={collaborator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-full"
                      width={40}
                      height={40}
                      src={collaborator.avatar}
                      alt={collaborator.fullName}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
