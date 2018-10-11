import React from 'react';
import './DetailInfo.css';

const DetailInfo = ({ detail }) => {
    const keys = Object.keys(detail);
    return (
        <div className="detail-info">
            {
                keys.map((key, id) => (
                    <div className="detail-info-field" key={key+id}>
                        <div className="detail-info-field__key">
                            {key}
                        </div>
                        <div className="detail-info-field__value">
                            {detail[key]}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DetailInfo;