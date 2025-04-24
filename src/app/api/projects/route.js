import { NextResponse } from 'next/server';
import scrapeNewProjects from '@/lib/scrapeNewProjects';
import { geocodeLocation } from '@/lib/geocode';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'Missing city' }, { status: 400 });
  }

  try {
    const rawProjects = await scrapeNewProjects(city); 
    const projects = [];

    for (const p of rawProjects) {
      const coords = await geocodeLocation(p.location);
      projects.push({ ...p, ...coords });
    }

    return NextResponse.json({ projects });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Scraping failed' }, { status: 500 });
  }
}
