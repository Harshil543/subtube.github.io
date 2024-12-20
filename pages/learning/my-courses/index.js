import React, { useEffect, useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import GeneralLoader from "@/utils/GeneralLoader";
import CourseCard from "@/components/Learning/CourseCard";

const Index = ({ user }) => {
  const { elarniv_users_token } = parseCookies();
  const [enrolments, setEnrolments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrols = async () => {
      setLoading(true);
      const payload = {
        headers: { Authorization: elarniv_users_token }
      };
      const response = await axios.get(`${baseUrl}/api/learnings`, payload);

      setEnrolments(response.data.enrolments);
      setLoading(false);
    };

    fetchEnrols();
  }, []);

  return (
    <>
      <Navbar user={user} />

      <div className="ptb-100">
        <div className="container">
          <h2 className="fw-bold mb-4">My Learning</h2>

          <ul className="nav-style1">
            <li>
              <Link href="/learning/my-courses/">
                <a className="active">All Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/learning/wishlist/">
                <a>Wishlist</a>
              </Link>
            </li>
          </ul>

          <div className="row">
            {loading ? (
              <GeneralLoader />
            ) : (
              <>
                {enrolments && enrolments.length > 0 ? (
                  enrolments.map((enrol) => (
                    <CourseCard key={enrol.id} {...enrol} />
                  ))
                ) : (
                  <h3>Empty</h3>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
