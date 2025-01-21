import React from "react";

const Video = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center flex-col p-4 md:p-0">
        <div className="max-w-screen-lg text-left w-full mb-8">
          <div className="text-3xl text-primaryPurple pt-8 leading-10">
            What Girls Are Asking
          </div>
          <hr className="border-pink-100 my-4 border-2 rounded-md md:w-1/3" />
        </div>
        <div className="max-w-screen-lg text-white flex flex-row space-x-8 overflow-x-auto w-full">
          <iframe
            src="https://youtube.com/embed/1bLtK4Rdj7c"
            width={300}
            height={600}
          />
          <iframe
            src="https://youtube.com/embed/ba-4Kc9vun8"
            width={300}
            height={600}
          />
          <iframe
            src="https://youtube.com/embed/aqBPGmYc0cI"
            width={300}
            height={600}
          />
          {/* <video width="1024" height="100%" controls preload="none">
            <source
              src="https://youtube.com/shorts/1bLtK4Rdj7c"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Video;
