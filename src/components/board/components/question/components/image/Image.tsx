import React from "react";

const Image = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="bg-glass mt-10 flex items-center justify-center max-h-[500px]">
      <img className="rounded-lg h-full" {...props} />
    </div>
  );
};

export default Image;
