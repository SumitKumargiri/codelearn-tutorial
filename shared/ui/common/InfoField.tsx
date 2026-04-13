import React from "react";

export const InfoField = ({
  icon,
  label,
  value,
  isLoading = false,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | null;
  isLoading?: boolean;
}) => {
  const isMissing = !value || value.trim() === "";

  return (
    <div
      className={`p-2 rounded-xl border transition ${
        isLoading
          ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-black"
          : isMissing
          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-black"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </span>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      ) : !isMissing ? (
        <p className="text-gray-800 dark:text-gray-200">{value}</p>
      ) : (
        <p className="text-red-600 text-sm font-medium">Complete this</p>
      )}
    </div>
  );
};

export default InfoField;
