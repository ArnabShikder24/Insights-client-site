import React from "react";

const Loading = () => {
  return (
    <div className="screen_loader animate__animated fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
      <div className="animate-pulse w-[200px] h-[200px]">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
          className="w-full h-full"
        >
          <style type="text/css">
            {`
              .st0{fill:#941A1D;stroke:#941A1D;stroke-width:0.5;stroke-miterlimit:10;}
              .st1{font-family:'Century';}
              .st2{font-size:41.1211px;}
              .st3{fill:#2E3192;}
              .st4{font-family:'CooperBlack';}
              .st5{font-size:55.4427px;}
              .st6{font-size:52.7221px;}
              .st7{fill:#662D91;}
            `}
          </style>
          <g>
            <g>
              <text
                transform="matrix(1 0 0 1 120.7153 432.4428)"
                className="st0 st1 st2"
              >
                AUTOMATA
              </text>
              <g>
                <text transform="matrix(0.8399 0 0 1 125.7168 379.767)">
                  <tspan x="0" y="0" className="st3 st4 st5">
                    INS
                  </tspan>
                  <tspan x="104.71" y="0" className="st3 st4 st6">
                    I
                  </tspan>
                  <tspan x="126.52" y="0" className="st3 st4 st5">
                    GHTS
                  </tspan>
                </text>
                <circle className="st7" cx="223.32" cy="390.13" r="6.59" />
              </g>
            </g>
            <g>
              <g>
                <g>
                  <polygon
                    className="st7"
                    points="283.47,170.44 283.47,170.43 270.78,148.45 258.08,170.43 178.02,309.11 156.3,309.11 
                      242.46,159.87 229.76,137.88 130.91,309.11 118.21,331.09 143.6,331.09 165.32,331.09 190.72,331.09 203.41,309.11 
                      203.41,309.11 270.78,192.42 309.74,259.91 322.43,281.9 338.15,309.11 250.47,309.11 266.18,281.9 312.91,281.9 
                      300.22,259.91 253.48,259.91 212.38,331.09 212.38,331.09 376.23,331.09"
                  />
                </g>
              </g>
              <polygon
                className="st3"
                points="245.17,112.55 232.47,134.54 245.17,156.53 257.87,134.54"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
