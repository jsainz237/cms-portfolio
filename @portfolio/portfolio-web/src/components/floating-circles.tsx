const CIRCLE_OFFSET = 4;

export function FloatingCircles() {
  const rows = [0, 1, 2, 1, 0, -1, -2, -1, 0, 1];
  const cols = Array.from({ length: 5 }, (_, i) => i);


  return (
    <div className="flex flex-row gap-4 items-end -z-50">
      {rows.map((offset, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-4"
          style={{
            marginBottom: offset * CIRCLE_OFFSET,
            animation: 'wave 10s ease-in-out infinite',
            animationDelay: `${idx * 1}s`,
          }}
        >
          {cols.map((_, idx) => (
            <div key={idx} className="size-8 bg-slate-900 rounded-full" />
          ))}
        </div>
      ))}
    </div>
  );
}