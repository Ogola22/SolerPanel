
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import KajiadoProject from './KajiadoProject';
import FooterOne from '@/layouts/footers/FooterOne';

const KajiadoDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Project Details' title='Project Details' />
        <KajiadoProject />
      </main>
      <FooterOne />
    </>
  );
};

export default KajiadoDetails;