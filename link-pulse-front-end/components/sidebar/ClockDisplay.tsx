'use client';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const ClockDisplay = () => {
  const [time, setTime] = useState(dayjs().format('HH:mm'));
  const [date, setDate] = useState(dayjs().format('DD.MM.YYYY'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('HH:mm'));
      setDate(dayjs().format('DD.MM.YYYY'));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center py-2'>
      <span className='font-orbitron text-3xl font-semibold text-(--color-tertiary)'>{time}</span>
      <p className='font-orbitron tracking-widest text-white/60'>{date}</p>
    </div>
  );
};
