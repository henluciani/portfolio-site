'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieFromURLProps {
  url: string;
  width?: number;
  height?: number;
}

const LottieFromURL: React.FC<LottieFromURLProps> = ({ url, width = 200, height = 200 }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load the Lottie animation data from the URL
    fetch(url)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, [url]);

  return (
    <div style={{ width, height, textAlign: 'left' }}>
      {animationData ? (
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default LottieFromURL;
