import React from 'react';
import Image from 'next/image';

function FavoriteItem({ name, cheeseName, price, src }) {
    return (
        <div className="favorite-item">
            <div className="content">
                <div className="img">
                    <Image src={src} className="img-fluid" layout='responsive' alt={`image-${name}`} />
                </div>
                <div className="data">
                    <h4 className="name">
                        {name}
                    </h4>
                    <h5 className="cheese-name">
                        {cheeseName}
                    </h5>
                    <h6 className="price">
                        {price}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem
