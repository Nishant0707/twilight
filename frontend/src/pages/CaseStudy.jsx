import React from "react";
import PageWrapper from "../components/Layout/PageWrapper";
import CaseBan from "../components/CaseS/CaseBan";
import CaseMain from "../components/CaseS/CaseMain";

const overview = `
Case studies on skill development and assessment in India include reports from the National Skill Development Corporation (NSDC), showcasing various models by training partners, and reports on the Pradhan Mantri Kaushal Vikas Yojana (PMKVY), a flagship scheme focused on youth employability. Other examples include research on challenges faced by Industrial Training Institutes (ITIs) and case studies on organizations like the NIIT Foundation impacting underprivileged communities.
`;

const problem = `
Research highlights key challenges in formal training delivery by Industrial Training Institutes (ITIs), including poor literacy levels among informal workforce segments hindering their ability to engage with formal skill training programs. Additionally, rural skilling schemes face difficulties related to education levels and access to formal training infrastructure.
`;

const solution = `
The National Skill Development Corporation (NSDC) compendium details innovative skill training models developed by training partners across government and CSR initiatives, supporting the Skill India Mission. The Pradhan Mantri Kaushal Vikas Yojana (PMKVY) provides industry-relevant skills through Short Term Training, Special Projects, and Recognition of Prior Learning, implemented nationwide via Pradhan Mantri Kaushal Kendra (PMKK) centers. NGOs like the NIIT Foundation run targeted educational and skill development programs benefiting underprivileged communities.
`;

const results = `
PMKVY has trained and certified millions of candidates, significantly enhancing youth employability nationwide. Studies on rural initiatives like DDUGKY showcase improvements in education levels and expanding access to formal skill training. Collectively, these programs contribute to national goals for workforce development and skill enhancement, supported by government and private sector partnerships.
`;

const images = [
  "/sol1.jpg",
  "/sol2.png",
  "/sol1.jpg",
];

const CaseStudy = () => {
  return (
    <PageWrapper maxWidth="3840px">
      <CaseBan
        title="Skill Development & Case Studies"
        quote={
          <>
            "You want to wake up in the morning and think the future is going to be great - and that’s what being a skilled and empowered workforce is all about. <b>It's about believing in the future</b> and thinking that the future will be better than the past. And I can’t think of anything more exciting than enabling the growth and potential of our youth."
          </>
        }
        imageSrc="/casebanner.jpg"
        astronautSrc="/hr.png" // Make sure this is the bigger sized image
      />
      <CaseMain
        overview={overview}
        problem={problem}
        solution={solution}
        results={results}
        images={images}
      />
    </PageWrapper>
  );
};

export default CaseStudy;
