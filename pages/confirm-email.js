import React from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";

const confirmEmail = () => {
  const router = useRouter();

  React.useEffect(() => {
    const confirmEmail = async () => {
      try {
        const { token, email } = router.query;
        const decodedEmail = atob(email);
        const url = `${baseUrl}/api/users/confirm-email`;
        const payload = { token, decodedEmail };
        await axios.put(url, payload);
        // console.log(response.data);
        setTimeout(() => {
          Router.reload("/");
        }, 2000);
        Router.push("/");
      } catch (error) {
        console.log(error);
      }
    };

    confirmEmail();
  }, [router.query]);

  return <div>confirmEmail</div>;
};

export default confirmEmail;
