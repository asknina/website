"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface EmailRoleUIProps {
  handleClick: (e: any) => {};
  email: string;
  setEmail: Function;
  currentRole: string;
  setRole: Function;
  roles: string[];
  isLoading: boolean;
  showRoles?: boolean;
}
const EmailRoleUI = ({
  handleClick,
  email,
  setEmail,
  currentRole,
  setRole,
  roles,
  isLoading,
  showRoles = true,
}: EmailRoleUIProps) => {
  const handleOptionChange = (role: string) => {
    setRole(role);
  };
  return (
    <form className="flex flex-col md:space-x-0 mt-2 md:mt-0 md:space-y-2 items-center md:items-start">
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
                    onChange={() => handleOptionChange(role)}
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

      <div className="flex flex-col text-left">
        {/* email entry */}
        <div className="flex flex-row justify-start items-center space-x-4">
          <div>
            <input
              placeholder="your@email.com"
              className="border rounded-md p-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className={` text-white border-2 border-black rounded-md w-24 p-1 shadow-xl ${
                isLoading ? "bg-gray-200" : "bg-primaryPurple"
              }`}
              onClick={handleClick}
              disabled={isLoading}
              type="submit"
            >
              Go STEM
            </button>
          </div>
          <ClipLoader color="#423EEE" size={25} loading={isLoading} />
        </div>
      </div>
    </form>
  );
};

export default EmailRoleUI;
