import React from 'react';

const opacity_default = 0.680083786;
const color_default = "#52CBFF";

export default ({ color = color_default, opacity = opacity_default }) => {
    return (
        <svg width="37px" height="53px" viewBox="0 0 37 53">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity={opacity}>
                <g transform="translate(-90.000000, -42.000000)" fill={color}>
                    <g transform="translate(90.000000, 42.000000)">
                        <path d="M18.4998935,40.239383 L10.6036832,35.5421014 L10.6036832,26.0693606 L18.3495138,21.3722999 L26.2459371,25.9127846 L26.4715066,35.3855254 L18.4998935,40.239383 Z M26.4715066,0 L26.4715066,13.1521676 L26.1707473,13.230566 L18.6502732,8.61168289 L13.7620821,11.5082294 L4.73781137,16.9099928 L0.0751898312,19.7283618 L0,41.8051435 L4.36186222,44.4669364 L18.3495138,53 L22.4855936,50.5731816 L32.111596,44.7800885 L36.9245972,41.8051435 L37,6.34121971 C37,6.34121971 29.9805074,2.11366629 26.4715066,0 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}