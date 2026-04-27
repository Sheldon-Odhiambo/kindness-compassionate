/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const WaveDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          fill="#fdf2f8"
          d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  );
};
