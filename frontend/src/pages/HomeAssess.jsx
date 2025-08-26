import React from "react";
import PageWrapper from "../components/Layout/PageWrapper";
import PlatBan from "../components/plat/PlatBan";

const HomeAssess = () => {
  return (
    <PageWrapper maxWidth="3840px">
      <PlatBan
        title={
          <>
            STAY <span style={{ color: "#63b3ed" }}>CONNECTED</span> <br />
            WITH US
          </>
        }
        subtitle={`An online exam platform that offers a secure, reliable, and efficient way to conduct assessments.
With remote proctoring, instant results, and powerful analytics, we ensure transparency and scalability.
Accessible anytime, anywhere, making exams smarter and more flexible.`}
        company="Sai Skill Technology Pvt. Ltd"
        website="www.sstpltech.com"
        imageSrc="mobplat.png" // Adjust to your image path
      />
      {/* Add more page content components here */}
     
    </PageWrapper>
  );
};

export default HomeAssess;
