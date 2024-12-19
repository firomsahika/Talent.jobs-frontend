// import "./globals.css";

import Sidebar from "./components/Sidebar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='font-jost '
      >
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}


// bg-[#e4e7e9] 