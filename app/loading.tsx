export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div
        className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{
          borderColor: "rgba(77,208,200,0.2)",
          borderTopColor: "var(--color-teal-400)",
        }}
      />
    </div>
  );
}
