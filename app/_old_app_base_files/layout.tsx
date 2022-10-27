import "@/styles/dist.css";
import AddressBar from '@/ui/AddressBar';
import GlobalNav from "./GlobalNav";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <GlobalNav />
          </div>

          <div className="col-start-3 space-y-6">
            <AddressBar />

            <div className="rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div>
          </div>

          <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <div className="text-sm text-zinc-600">
              Created by the <b>Sachiel Shaheen</b>
              {' team at '}
              <a href="https://sachielshaheen.com">
                <b>Sachiel Shaheen Inc.</b>
              </a>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://ashraf-asher-store.vercel.app"
              >
                View Website
              </a>
              {' or '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://asher-ashraf-store.vercel.app"
              >
                Visit Store
              </a>
              {'.'}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
