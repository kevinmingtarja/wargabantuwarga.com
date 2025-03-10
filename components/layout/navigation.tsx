import * as React from "react";

import { bottomNavigation } from "~/lib/layout/navigation-data";

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export function Navigation() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-4 bg-white border-t border-gray-300 z-40">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center space-x-4">
          {bottomNavigation.map((item) => {
            const isActive = item.exact
              ? item.href === router.asPath
              : router.asPath.startsWith(item.href);

            return (
              <li key={item.name} className="font-sans">
                {item.external ? (
                  <a
                    className={clsx(
                      "inline-flex items-center justify-center h-12 w-12 rounded-md",
                      isActive
                        ? "bg-blue-100 text-blue-600 hover:text-blue-700"
                        : "text-gray-600 hover:text-gray-700",
                      "hover:bg-blue-100",
                    )}
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {React.createElement(item.icon, {
                      className: "w-8 h-8",
                      "aria-hidden": true,
                    })}
                    <span className="sr-only">{item.name}</span>
                  </a>
                ) : (
                  <Link href={item.href}>
                    <a
                      className={clsx(
                        "inline-flex items-center justify-center h-12 w-12 rounded-md",
                        isActive
                          ? "bg-blue-100 text-blue-600 hover:text-blue-700"
                          : "text-gray-600 hover:text-gray-700",
                        "hover:bg-blue-100",
                      )}
                    >
                      {React.createElement(item.icon, {
                        className: "w-8 h-8",
                        "aria-hidden": true,
                      })}
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
