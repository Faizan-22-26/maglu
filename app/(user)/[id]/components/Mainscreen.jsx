import React from "react";
import useActiveVideoStore from "@/store/ActiveVideoStore"; // adjust the path to match the location of your store

function Mainscreen() {
  const videoLink = useActiveVideoStore((state) => state.videoLink);
  console.log(videoLink);
  console.log(`https://drive.google.com/file/d/${videoLink}/preview`);

  return (
    <div className="h-[97%] rounded-md mb-3 mt-4 w-[80%] bg-[#111111] border-[#21232b] border">
      <div className="relative w-full h-full flex justify-center items-center">
        {videoLink === "" ? (
          <h1 className="text-white text-3xl">Selct a topic form the course</h1>
        ) : (
          <>
            <iframe
              className="w-full h-full"
              src={`https://drive.google.com/file/d/${videoLink}/preview`}
              allow="autoplay"
              allowFullScreen
            ></iframe>

            <div className="bg-white absolute right-2 top-3 w-12 h-12 flex flex-col justify-center items-center">
              CT
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Mainscreen;
