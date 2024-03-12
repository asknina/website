import React from "react";

interface EmailSubscribeProps {
  handleClick: () => {};
  email: string;
  setEmail: Function;
  currentRole: string;
  setRole: Function;
  roles: string[];
  showRoles?: boolean;
}
const EmailSubscribe = ({
  handleClick,
  email,
  setEmail,
  currentRole,
  setRole,
  roles,
  showRoles = true,
}: EmailSubscribeProps) => {
  const handleOptionChange = (role: string) => {
    setRole(role);
  };
  return (
    <div className="flex flex-col p-4 md:p-2 space-x-4 md:space-x-0 md:space-y-2 items-center md:items-start">
      {showRoles && (
        <div className="flex flex-row mb-2 md:mb-0">
          <div className=" md:mr-4">I&apos;m a/n:</div>
          <div className="ml-2 flex flex-col items-start">
            {/* mapped roles */}
            {roles?.map((role) => (
              <div className="inline-flex" key={role}>
                <label className="inline-flex items-center space-x-1">
                  <input
                    type="radio"
                    value={role}
                    checked={currentRole == role}
                    onClick={() => handleOptionChange(role)}
                  />
                  <span
                    className={`rounded-full h-4 w-4 border-4 border-primaryPurple hover:cursor-pointer ${
                      currentRole == role
                        ? "bg-primaryPink"
                        : "bg-primaryPurple"
                    }`}
                  />
                  <span className="hover:cursor-pointer">
                    {role[0].toUpperCase() + role.substring(1)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        {/* email entry */}
        <div className="flex flex-row justify-center items-center space-x-4">
          <div>
            <input
              placeholder="your@email.com"
              className="border rounded-md p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-primaryPurple text-white border-2 border-black rounded-md w-24 p-1 shadow-xl"
              onClick={handleClick}
            >
              Go STEM
            </button>
          </div>
        </div>
        <div className="text-xs  max-w-[240px] pt-2 md:mt-0">
          By entering your email address, you are confirming that you are 13+.{" "}
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
