
import Accordion from '@/components/common/Accordion'; 
import React from 'react';


interface DataType {
  id: number;
  price_date: string;
  price: number;
  time: string;
  sm_des: string;
  price_value: string;
}

const priceing_data: DataType[] = [
  {
    id: 1,
    price_date: "Tones",
    price: 90,
    time: "Amount of Carbon Emission Prevented",
    sm_des: "We are committed to playing a vital role in the global effort to reduce carbon emissions and mitigate climate change.",
    price_value: "Carbon Emissions",
  },
  {
    id: 2,
    price_date: "Trees",
    price: 240000,
    time: "Fully Grown Trees",
    sm_des: "Over the years of operation, we have been able to install 2,500kWp of Solar PV equivalent to planting over 240,000 hence helping to mitigate the climate change problem",
    price_value: "Trees Planted",
  }
]


const PricingAreaHomeOne = () => {
  return (
    <>
      <div className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title pricing wow animate__fadeInDown">
                  <h4>Fighting Climate Change</h4>
                </div>
                <div className="section-main-title pricing wow animate__fadeInUp">
                  <h2>Want to Ask Something</h2>
                  <h2>from Us?</h2>
                </div>
              </div>
              <Accordion /> 
            </div>
            <div className="col-lg-6 col-md-12">
              {priceing_data.map((item, i) =>
                <div key={i} className="pricing-box wow animate__fadeInTopRight">
                  <div className="pricing-info">
                    <div className="pricing-year">
                      <h4>{item.price_date}</h4>
                    </div>
                    <div className="pricing-rate">
                      <h2>{item.price}<span></span></h2>
                    </div>
                  </div>
                  <div className="pricing-icon">
                    <i className="bi bi-check2"></i>
                  </div>
                  <div className="pricing-content">
                    <h5>{item.time}</h5>
                    <p>{item.sm_des}</p>
                  </div>
                  <div className="pricing-value">
                    <h5>{item.price_value}</h5>
                  </div>
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingAreaHomeOne;