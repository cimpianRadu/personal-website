import "./global.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="px-8 py-8 flex-1 ">
          <>
            <div className="border-b border-blue-700 py-3 flex flex-row justify-end mb-4">
              <div className="flex flex-1 align-middle">
                <p className="font-bold text-4xl">Radu G. Cîmpian </p>
              </div>

              {/* <div className="flex-1">
                <ul className="flex justify-end">
                  <li className="-mb-px mr-1">
                    <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">
                      Active
                    </a>
                  </li>
                  <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                      Tab
                    </a>
                  </li>
                  <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                      Tab
                    </a>
                  </li>
                  <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">
                      Tab
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            {children}
          </>
        </div>
      </body>
    </html>
  );
}
