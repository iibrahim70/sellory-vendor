import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  value: number;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: 16,
  md: 20,
  lg: 32,
};

export function StarRating({ value, size = "md" }: StarRatingProps) {
  const starSize = SIZE_MAP[size];

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => {
        // Calculate fill for this star (0–100)
        const fillPercent = Math.round(
          Math.max(0, Math.min(1, value - i)) * 100
        );

        return (
          <div key={i} className="relative">
            {/* Empty star */}
            <Star size={starSize} className="text-muted-foreground" />

            {/* Filled star overlay */}
            {fillPercent > 0 && (
              <Star
                size={starSize}
                className="fill-primary text-primary absolute top-0 left-0"
                style={{ clipPath: `inset(0 ${100 - fillPercent}% 0 0)` }}
              />
            )}
          </div>
        );
      })}

      {/* Numeric rating */}
      <span className="ml-1 font-semibold text-primary">
        {value?.toFixed(1)}
      </span>
    </div>
  );
}
