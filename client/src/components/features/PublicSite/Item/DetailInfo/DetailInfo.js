import React from 'react';
import './DetailInfo.css';

const DetailInfo = ({ detail }) => {
    const detailInfo = [
        {
            name: 'Màn hình',
            value: detail.screen
        },
        {
            name: 'SIM',
            value: detail.sim
        },
        {
            name: 'Bộ nhớ',
            value: detail.memory
        },
        {
            name: 'RAM',
            value: detail.ram
        },
        {
            name: 'Bluetooth',
            value: detail.bluetooth
        },
        {
            name: 'WLAN',
            value: detail.wlan
        },
        {
            name: 'GPS',
            value: detail.gps
        },
        {
            name: 'Pin',
            value: detail.pin
        },
        {
            name: 'Camera',
            value: detail.camera
        },
        {
            name: 'Hệ điều hành',
            value: detail.os
        },
    ]
    return (
        <div className="detail-info">
            {
                detailInfo.map(info => (
                    <div className="detail-info-field" key={info.name}>
                        <div className="detail-info-field__key">
                            {info.name}
                        </div>
                        <div className="detail-info-field__value">
                            {info.value}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DetailInfo;