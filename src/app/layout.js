import './globals.css';

export const metadata = {
  title: 'MagicBricks Scraper',
  description: 'Real-time real estate listings with map view',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
