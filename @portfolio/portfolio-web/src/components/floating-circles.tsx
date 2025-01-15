const CIRCLE_OFFSET = 4;

export function FloatingCircles() {
  const rows = [0, 1, 2, 1, 0, -1, -2, -1, 0, 1];
  const cols = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="-z-50 flex translate-x-10 flex-row items-end gap-4 max-lg:gap-3">
      {rows.map((offset, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-4"
          style={{
            marginBottom: offset * CIRCLE_OFFSET,
            animation: "wave 10s ease-in-out infinite",
            animationDelay: `${idx * 1}s`,
          }}
        >
          {cols.map((_, idx) => (
            <div
              key={idx}
              className="size-8 rounded-full bg-slate-900 max-lg:size-6"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
