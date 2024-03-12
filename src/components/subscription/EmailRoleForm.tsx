"use client";
import React, { useState } from "react";
import EmailRoleUI from "./EmailRoleUI";

const defaultRoles = ["adult", "student"];

const EnterEmail = ({ roles }: { roles?: string[] }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState({ error: false, message: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string>("");

  let rolesList = roles?.length ? roles : defaultRoles;
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(rolesList[0]);

  const handleClick = async () => {
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
      const result = await response;
      setMessage("Thank you for submitting your email!");
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
  };

  const handleReset = () => {
    setTimeout(() => {
      setMessage("");
      setHasSubmitted(false);
    }, 2000);
  };
  return (
    <section>
      <div>
        {!hasSubmitted ? (
          <>
            <EmailRoleUI
              email={email}
              setEmail={setEmail}
              currentRole={role}
              setRole={setRole}
              handleClick={handleClick}
              roles={rolesList}
            />
          </>
        ) : (
          <div>{message}</div>
        )}
        {error && <p>{error.message}</p>}
      </div>
    </section>
  );
};

export default EnterEmail;
