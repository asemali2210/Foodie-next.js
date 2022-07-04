import React from 'react'
import partnerImg1 from '../public/img/partner (1).jpg';
import partnerImg2 from '../public/img/partner (2).jpg';
import partnerImg3 from '../public/img/partner (3).jpg';
import partnerImg4 from '../public/img/partner (4).jpg';
import partnerImg5 from '../public/img/partner (1).png';
import Image from 'next/image';
function Partners() {
    return (
        <div className="partners">
            <div className="container">
                <div className="row">
                    <div className="col-12 heading">
                        <h2>Our Partners</h2>
                        <h4>We are working with top Restaurnts</h4>
                    </div>
                    <div className="col">
                        <Image alt="image-partenr-1" layout='responsive' src={partnerImg1} className="img-fluid" />
                    </div>
                    <div className="col">
                        <Image alt="image-partenr-5" layout='responsive' src={partnerImg2} className="img-fluid" />
                    </div>
                    <div className="col">
                        <Image alt="image-partenr-2" layout='responsive' src={partnerImg3} className="img-fluid" />
                    </div>
                    <div className="col">
                        <Image alt="image-partenr-3" layout='responsive' src={partnerImg4} className="img-fluid" />
                    </div>
                    <div className="col">
                        <Image alt="image-partenr-4" layout='responsive' src={partnerImg5} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
