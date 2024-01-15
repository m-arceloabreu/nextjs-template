import './page-template.scss';

export const metadata = {
  title: 'Next.js Template',
  description: 'Created by Marcelo Abreu'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
