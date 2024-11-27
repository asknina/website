import React from "react";

const Video = () => {
  return (
    <div className="h-[90vH]">
      <div className="flex items-center justify-center ">
        <div className="max-w-screen-lg text-white">
          <iframe
            src="https://youtube.com/embed/1bLtK4Rdj7c"
            width={1024}
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
