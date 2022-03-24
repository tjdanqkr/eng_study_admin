import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function MainUI({ children }: Props) {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">main</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-gray-200 rounded-lg h-96 text-center flex flex-col justify-evenly">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
