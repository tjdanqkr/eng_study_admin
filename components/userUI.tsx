import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
export default function UserUI({ children }: Props) {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">User</h1>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
