"use client";
import React from "react";

export interface FilterItem {
  id: string;
  label: string;
}

interface FilterActionProps {
  items: FilterItem[];
  activeId?: string;
  onChange: (item: FilterItem) => void;
}

const FilterAction = ({ items, activeId, onChange }: FilterActionProps) => {
  return (
    <div className="w-full py-1 px-4 lg:bg-zinc-100 sm:bg-none rounded-[20px]">
      <div className="lg:flex flex-wrap gap-4 md:flex-nowrap md:gap-8
      grid grid-cols-2 md:grid-cols-auto md:flex md:items-center " >
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item)}
              className={`py-3 px-4 bg-zinc-100 overflow-x-auto justify-center items-center font-manrope transition-all
              ${isActive
                  ? "bg-white rounded outline outline-1 outline-offset-[-1px] outline-orange-600"
                  : "text-stone-900 hover:bg-white"
              }
              w-full sm:w-auto
            `}    
              >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterAction;
