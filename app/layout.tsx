import '../styles/globals.css'
import '@/styles/dist.css';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Ashraf Asher Store</title>
      </head>
      <body className="overflow-y-scroll bg-white">
        <div className="rounded-xl border border-zinc-800 bg-white p-8">
          <GlobalNav />
        </div>
        <br />
        <div className="col-start-3 space-y-6">
          <AddressBar />
          <div className="rounded-xl border border-zinc-800 bg-white p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
