import { NextResponse } from 'next/server';
import { getEndpoints } from '@/lib/Abc';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'Missing city' }, { status: 400 });
  }

  try {
    const rawEndpoints = await getEndpoints(city);
    console.log('🚀 Potential Project Data Endpoints (API):', rawEndpoints);

    return NextResponse.json({ rawEndpoints });
  } catch (err) {
    console.error('🔥 API Error:', err);
    return NextResponse.json({ error: 'Failed to fetch project data endpoints' }, { status: 500 });
  }
}