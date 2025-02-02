"use client";
import "./globals.css";

import SideBar from "./component/ul/SideBar";
import TopNav from "./component/ul/TopNav";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex  flex-col">
            <TopNav />
          <div className=" w-full flex  h-full text-gray-900">
          <SideBar />
            <div className=" lg:ml-[14rem] bg-gray-50 pt-[5rem] lg:mt-[5rem]   w-full lg:p-4 py-2 md:py-8 lg:px-3 px-2 text-2xl  h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
