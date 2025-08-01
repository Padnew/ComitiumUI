import React, { CSSProperties, useState } from "react";
import clsx from "clsx";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: number;
  fullWidth?: boolean;
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab = 0,
  fullWidth = false,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultTab);

  const baseTabStyle: CSSProperties = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    flex: fullWidth ? 1 : undefined,
  };

  const activeTabStyle: CSSProperties = {
    color: "black",
    fontWeight: 600,
    borderBottom: "2px solid orange",
  };

  const hoverTabStyle: CSSProperties = {
    color: "black",
  };

  const inactiveTabStyle: CSSProperties = {
    color: "gray",
  };

  return (
    <div className={className} style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        {tabs.map((tab, i) => {
          const isActive = activeIndex === i;

          const style: CSSProperties = {
            ...baseTabStyle,
            ...(isActive ? activeTabStyle : inactiveTabStyle),
          };

          return (
            <button key={i} style={style} onClick={() => setActiveIndex(i)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      <div style={{ paddingTop: "1rem" }}>{tabs[activeIndex]?.content}</div>
    </div>
  );
};
