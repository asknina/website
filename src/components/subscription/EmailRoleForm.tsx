"use client";
import React, { useState } from "react";
import EmailRoleUI from "./EmailRoleUI";
import { sendGAEvent } from "@next/third-parties/google";

const defaultRoles = ["adult", "student"];

const EnterEmail = ({
  roles,
  showRoles = true,
}: {
  roles?: string[];
  showRoles?: boolean;
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string>("");

  let rolesList = roles?.length ? roles : defaultRoles;
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(rolesList[0]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    sendGAEvent({
      event: "submit_email",
      value: {
        category: "Contact",
        label: JSON.stringify({ email, role }),
      },
    });

    if (isValidEmail(email)) {
      setIsSubmitting(true);

      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, role }),
      };
      try {
        const response = await fetch(`/api/sendEmail`, settings);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        await response;
        setMessage("Success! You're now part of our inner circle.");
        setIsSubmitting(false);
        setHasSubmitted(true);
        setEmail("");

        handleReset();
      } catch (error: any) {
        setIsSubmitting(false);
        setError({
          error: true,
          message: error.message,
        });
      }
    } else {
      setError({
        error: true,
        message: "Please enter a valid email",
      });
      handleReset();
    }
  };

  const isValidEmail = (text: string): Boolean => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
  };
  const handleReset = () => {
    setTimeout(() => {
      setMessage("");
      setHasSubmitted(false);
      setError({
        error: false,
        message: "",
      });
    }, 4500);
  };
  return (
    <section className="flex flex-col items-start justify-start">
      <EmailRoleUI
        email={email}
        setEmail={setEmail}
        currentRole={role}
        setRole={setRole}
        handleClick={handleClick}
        roles={rolesList}
        showRoles={showRoles}
        isLoading={isSubmitting}
      />
      {/* <div> */}
      <div className="text-xs max-w-[240px] pt-2 text-left">
        {hasSubmitted && message
          ? message
          : "By entering your email address, you are confirming that you are 13+"}
      </div>
      {error && (
        <p className="text-xs italic text-red-500 mt-2">{error.message}</p>
      )}
      {/* </div> */}
    </section>
  );
};

export default EnterEmail;
