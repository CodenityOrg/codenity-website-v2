import { Modal } from "flowbite-react";
import Image from "next/image";

export const ProjectModal = ({ openModal, onClose, project }) => {
  const { name, description, imgUrl, link, collaborators } = project;
  return (
    <>
      <Modal
        className="p-0"
        size={"6xl"}
        dismissible
        show={openModal}
        onClose={onClose}
      >
        <Modal.Body className="p-0">
          <div className="flex">
            <div className="w-1/2 drop-shadow-xl border-r-[0.5px] border-r-slate-500">
              <div className="bg-[#409AC2] text-white p-4 border-r-slate-400">
                <h1 className="text-4xl font-bold">{name}</h1>
                <p className="mt-2 text-xs mb-2">Slogan</p>
                <Image
                  src={`/${imgUrl}`}
                  alt="Project Image"
                  width={800}
                  height={500}
                />
                <p>{link}</p>
              </div>
              <div className="px-4 py-2">
                <p className="mt-2">{description}</p>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <h2 className="text-center text-xl font-bold">
                Meet our contributors
              </h2>
              <p className="text-center">Connect with ...</p>
              <div className="my-4 grid grid-cols-2 gap-2">
                {collaborators.map(({ fullName, avatar, link, role }, idx) => (
                  <div
                    className="flex bg-[#409AC2] max-w-[275px] w-full rounded p-2 gap-3"
                    key={idx}
                  >
                    <Image
                      className="rounded-full"
                      width={80}
                      height={80}
                      src={avatar}
                      alt="Github Avatar"
                    />
                    <div className="text-white flex flex-col items-center">
                      <p className="text-center leading-1">{fullName}</p>
                      <p className="text-xs">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
