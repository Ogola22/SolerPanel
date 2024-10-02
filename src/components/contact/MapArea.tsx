
import React from 'react';

const MapArea = () => {
  return (
    <>
   <div className="map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8454581117835!2d36.80237917363138!3d-1.26530599872265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173fc261c85d%3A0xc5db81b7b61f20ae!2sMadonna%20House%20Annex!5e0!3m2!1sen!2ske!4v1727862215835!5m2!1sen!2ske">
              width="1920"
              height="800"
              {/* style={{ border: 0 }} */}
              allowFullScreen
              loading="lazy"
            </iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapArea;