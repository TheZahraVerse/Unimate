/**
 * Drawer
 * A versatile and accessible sliding drawer component that can appear from any side of the screen.
 * designed to overlay content and provide additional options, navigation, or information.
 */

import React from "react";
import clsx from "clsx";

export default function Drawer({
  open,
  onClose,
  side = "left",
  size = "300px",
  backdrop = true,
  children,
}) {
  // check if the drawer is horizental or vertical
  const isHorizontal = side === "left" || side === "right";

  // combining styles using clsx
  const drawerClasses = clsx(
    // static styles
    "fixed z-50 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300",
    // conditional styles
    {
      "top-0 h-full": isHorizontal,
      "left-0": side === "left",
      "right-0": side === "right",
      "w-full left-0": side === "top" || side === "bottom",
      "top-0": side === "top",
      "bottom-0": side === "bottom",
    },
    {
      // Closed states
      "-translate-x-full": side === "left" && !open,
      "translate-x-full": side === "right" && !open,
      "-translate-y-full": side === "top" && !open,
      "translate-y-full": side === "bottom" && !open,

      // Open states
      "translate-x-0": (side === "left" || side === "right") && open,
      "translate-y-0": (side === "top" || side === "bottom") && open,
    },
  );

  const sizeStyle = isHorizontal ? { width: size } : { height: size };

  return (
    <>
      {/* Drawer */}
      <div className={drawerClasses} style={sizeStyle}>
        {children}
      </div>

      {/* Backdrop */}
      {backdrop && open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-(--overlay) backdrop-blur-sm z-40 cursor-pointer"
        />
      )}
    </>
  );
}
