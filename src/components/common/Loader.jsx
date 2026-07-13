export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-brand-secondary"></div>
        <div className="absolute h-6 w-6 rounded-full bg-brand-accent/20 animate-pulse"></div>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Loading Academy Portal...
      </p>
    </div>
  );
}
