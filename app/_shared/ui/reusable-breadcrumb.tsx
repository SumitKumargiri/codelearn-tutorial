"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { cn } from "@/lib/utils";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface EllipsisItem {
  label: string;
  isEllipsis: true;
}

type ProcessedBreadcrumbItem = BreadcrumbItemType | EllipsisItem;

interface ReusableBreadcrumbProps {
  items: BreadcrumbItemType[];
  showHome?: boolean;
  homeHref?: string;
  separator?: "chevron" | "slash" | "custom";
  customSeparator?: React.ReactNode;
  className?: string;
  maxItems?: number;
}

export function ReusableBreadcrumb({
  items,
  showHome = true,
  homeHref = "/",
  separator = "chevron",
  customSeparator,
  className,
  maxItems,
}: ReusableBreadcrumbProps) {
  // Handle max items with ellipsis
  const processedItems = React.useMemo((): ProcessedBreadcrumbItem[] => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    if (maxItems <= 2) {
      return [items[0], items[items.length - 1]];
    }

    const firstItems = items.slice(0, 1);
    const lastItems = items.slice(-(maxItems - 2));

    return [
      ...firstItems,
      { label: "...", isEllipsis: true as const },
      ...lastItems,
    ];
  }, [items, maxItems]);

  const renderSeparator = () => {
    if (customSeparator) {
      return <BreadcrumbSeparator>{customSeparator}</BreadcrumbSeparator>;
    }

    switch (separator) {
      case "slash":
        return (
          <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>
        );
      case "chevron":
      default:
        return (
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </BreadcrumbSeparator>
        );
    }
  };

  return (
    <Breadcrumb
      className={cn(
        "text-sm text-gray-600 dark:text-gray-300 font-medium",
        className
      )}
    >
      <BreadcrumbList className="flex items-center gap-0">
        {showHome && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={homeHref}
                className="flex items-center gap-1 text-[#f97316] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {processedItems.length > 0 && renderSeparator()}
          </>
        )}

        {processedItems.map((item, index) => {
          const isLast = index === processedItems.length - 1;
          const isEllipsis = "isEllipsis" in item && item.isEllipsis;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isEllipsis ? (
                  <span className="text-gray-400">...</span>
                ) : isLast ||
                  ("isCurrentPage" in item && item.isCurrentPage) ? (
                  <BreadcrumbPage className="font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={("href" in item && item.href) || "#"}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && renderSeparator()}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
