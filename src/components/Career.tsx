import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Work Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Audit and Taxation</h4>
                <h5>CA Shubham Maloo & Co., Ahmedabad</h5>
              </div>
              <h3>Jan 2025 - Feb 2025</h3>
            </div>
            <p>
              Led stock audit for an FMCG distributor with INR 300 crores turnover, verifying inventory worth INR 50 crores. Provided employee tax-related guidance and assisted with compliance documentation securely.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Banking, Finance & Taxation</h4>
                <h5>ASBS & Co., Mumbai</h5>
              </div>
              <h3>Feb 2024 - Dec 2024</h3>
            </div>
            <p>
              Prepared and analyzed 150+ CMA reports and handled INR 50+ crore loan kits. Assisted 100+ foreign crew members with tax compliance during the ICC World Cup 2024 and performed comprehensive due diligence for major banks.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CA Intermediate (457/800)</h4>
                <h5>ICAI</h5>
              </div>
              <h3>Nov 2023</h3>
            </div>
            <p>Secured exemption in 4 subjects. Cleared SPOM both Examinations (Set A & B).</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com (Correspondence)</h4>
                <h5>MLSU</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>Pursuing Bachelor of Commerce (Marks: 454/700).</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CA Foundation (284/400)</h4>
                <h5>ICAI</h5>
              </div>
              <h3>Jun 2022</h3>
            </div>
            <p>Passed with distinction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
