import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import KajiadoDetailsArea from './KajiadoDetailsArea';
import FooterOne from "@/layouts/footers/FooterOne";

const ProjectDetails = () => {
    return (
      <>
        <HeaderOne />
        <main>
          <Breadcrumb top_title="Kajiado Law Courts Project" title="Kajiado Law Courts Project" />
          <KajiadoDetailsArea />
        </main>
        <FooterOne />
      </>
    );
}
export default ProjectDetails;