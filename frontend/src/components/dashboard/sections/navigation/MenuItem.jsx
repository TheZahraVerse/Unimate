/**
 * MenuItem
 * Represents an individual navigation link within the MenuBar.
 * Gets the title, icon name, and target URL.
 * Uses Inertia.js Link for seamless page transitions.
 * Automatically calculates and applies 'active' styles
 * by comparing the target URL with the current window location.
 */

import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Icon from "../../../shared/Icon";

export default function MenuItem({ title, iconName, url }) {
  // get the current url from page
  const { url: currentUrl } = usePage();
  // state for activation(exact compare)
  const isActive = currentUrl === url;

  return (
    <div>
      <Link
        href={url}
        className={`flex items-center gap-2 px-3 py-2 transition rounded-s-2xl
        
        ${isActive ? 'bg-(--primary) text-(--text-on-primary) font-semibold' : // Active
            'text-(--text-on-primary) hover:bg-(--surface) hover:text-(--text-secondary)'}`} // Inactive
      >
        {iconName && <Icon name={iconName} />}
        <span>{title}</span>
      </Link>
    </div>
  );
}
