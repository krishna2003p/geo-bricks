'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function MapWrapper({ projects }) {
  return <Map projects={projects} />;
}