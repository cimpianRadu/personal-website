import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex items-center flex-row">
        <div className="flex  flex-row justify-center  items-end">
          <div className="w-48 h-48 rounded-full overflow-hidden relative object-contain">
            <Image alt="me_avatar" src="/me_avatar.png" fill />
          </div>
        </div>
        <div className="inline flex-1 ml-10">
          <p className="font-bold text-lg text-[38px]">Radu G. Cimpian </p>
          <br />
          <br />
          <p className="font-bold text-lg">Implementing clean, maintainable and scalable software applications. </p>
        </div>
      </div>
    </>
  );
}
