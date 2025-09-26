import './globals.css';

export const metadata = {
  title: 'Portfólio Tiagotj7',
  description: 'Desenvolvido em Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
