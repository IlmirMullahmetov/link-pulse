import Lottie from 'lottie-react';
import ECGAnimation from '@/public/ECG.json';

type LoaderProps = {
  width?: number;
  height?: number;
};

export const Loader = ({ width = 100, height = 100 }: LoaderProps) => {
  return (
    <div className='absolute top-0 left-0 z-50 h-full w-full'>
      <div className='relative flex h-full items-center justify-center'>
        <Lottie animationData={ECGAnimation} loop={true} style={{ width: width, height: height }} />
      </div>
    </div>
  );
};
