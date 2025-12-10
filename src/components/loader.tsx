"use client";

export default function Loader() {
  const dots = [
    { color: "bg-blue", delay: "0s" },
    { color: "bg-yellow", delay: "0.1s" },
    { color: "bg-blue", delay: "0.2s" },
    { color: "bg-yellow", delay: "0.3s" },
  ];

  return (
    <div className="text-center py-12">
      <div className="flex justify-center space-x-2">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full animate-bounce ${dot.color}`}
            style={{ animationDelay: dot.delay }}
          />
        ))}
      </div>
    </div>
  );
}
