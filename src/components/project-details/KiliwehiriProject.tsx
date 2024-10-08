import React from 'react';
import Image from 'next/image';

import project_details_img_1 from "@/assets/images/resource/services1.jpg";
import project_details_img_2 from "@/assets/images/resource/services4.jpg";
// import { TeamSocialLinks } from '../common/SocialLinks';


interface DataType {
  title_1: string;
  sm_des: string;
  title_2: string;
  sm_info: string;
  feature: string[];
}


const project_content: DataType = {
  title_1: "Project Description",
  sm_des: "Besca Engineering successfully executed a Solar Photovoltaic (PV) project for Kajiado Law Courts, aimed at enhancing energy sustainability and improving operational efficiency. The project involved installing a 16.5kWp solar PV system with battery storage capacity to provide an uninterrupted power supply for the court’s daily operations.",
  title_2: "client's goal",
  sm_info: "To transform Kajiado Law Courts into a model of energy efficiency and operational reliability, fostering a more effective justice system for the local community.",
  feature: [
    "Reduction in Electricity Bills",
    "Power Reliability for Continuous Court Hearings",
    "Access to Justice without Delays",
    "Mitigating the Common Global problem of Climate Change",
  ]
}

const { title_1, sm_des, title_2, sm_info, feature } = project_content


const KiliwehiriProject = () => {
  return (
    <>
      <div className="project-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="projetct-details-image">
                <Image src={project_details_img_1} style={{ height: "auto" }} alt="Service" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="info-area">
                <div className="sub-title">
                  <h5>information</h5>
                </div>
                <ul className="info">
                  <li>
                    <h6>project name:</h6>
                    <p>Solar PV Minigrid</p>
                  </li>
                  <li>
                    <h6>client:</h6>
                    <p>Lean Energy Solutions</p>
                  </li>
                  <li>
                    <h6>category:</h6>
                    <p>Community</p>
                  </li>
                  {/* <li>
                    <h6>delivery mode:</h6>
                    <p>in hand delivery</p>
                  </li> */}
                  <li>
                    <h6>location:</h6>
                    <p>Kiliwehiri-Mandera County</p>
                  </li>

                  {/* <li>
                    <h6>share:</h6>
                    <ul className="d-flex social_icon">
                      <TeamSocialLinks />
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="title">
                <h4>{title_1}</h4>
              </div>
              <p>{sm_des}</p>
            </div>
            <div className="col-lg-12 list-part">
              <div className="row align-items-end">
                <div className="col-lg-8 col-md-12">
                  <div className="title">
                    <h4>{title_2}</h4>
                  </div>
                  <p>{sm_info}</p>
                  <ul className="desc-list">
                    {feature.map((item, i) => (
                      <li key={i}><p>{item}</p></li>
                    ))} 
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="image">
                    <Image src={project_details_img_2} style={{ height: "auto" }} alt="Service" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiliwehiriProject;