'use client'

export function UniversityCardSkeleton() {
  return (
    <div className="bg-white border border-neutral-200 rounded-[16px] p-5 flex flex-col gap-4">
      <div className="skeleton w-12 h-12 rounded-[6px]" />
      <div className="skeleton h-4 w-3/4" />
      <div className="skeleton h-3 w-1/2" />
      <div className="flex gap-3">
        <div className="skeleton h-6 rounded w-16" />
        <div className="skeleton h-6 rounded w-20" />
        <div className="skeleton h-6 rounded w-14" />
      </div>
      <div className="skeleton h-10 rounded-[10px] w-full mt-2" />
    </div>
  )
}

export function ScholarshipCardSkeleton() {
  return (
    <div className="bg-white border border-neutral-200 rounded-[16px] p-5 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="skeleton h-5 w-3/5 rounded" />
        <div className="skeleton h-5 w-16 rounded" />
      </div>
      <div className="skeleton h-3.5 w-4/5 rounded" />
      <div className="skeleton h-3.5 w-3/5 rounded" />
      <div className="flex gap-2">
        <div className="skeleton h-5 rounded-full w-14" />
        <div className="skeleton h-5 rounded-full w-16" />
      </div>
    </div>
  )
}

export function SearchResultsSkeleton({ count = 6, type = "university" }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) =>
        type === "university" ? (
          <UniversityCardSkeleton key={i} />
        ) : (
          <ScholarshipCardSkeleton key={i} />
        )
      )}
    </div>
  )
}

export function SkeletonText({ width = "100%", height = 16 }) {
  return (
    <div
      className="skeleton"
      style={{ height, width, borderRadius: 4 }}
    />
  )
}
