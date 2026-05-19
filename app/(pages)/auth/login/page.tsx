"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function loginuserwithidtoken(idToken: string | undefined) {
    if (idToken) {
      fetch(`http://localhost:5000/auth/google/validate`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: idToken }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // window.location.href = "/";
          router.push("/account/profile");
        })
        .catch((err) => {
          console.error("Error validating ID token:", err);

        });
    } else {
      console.error("No ID token found in URL hash.");
      // window.opener.postMessage({ authSuccess: false }, "*");
      // window.close();
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) return;

        router.push("/account/profile");
      } catch (err) {
        console.error(err);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="max-w-md mx-auto pt-12 px-5">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          loginuserwithidtoken(credentialResponse.credential);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

    </div>
  );
}
