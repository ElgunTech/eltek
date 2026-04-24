export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 text-sm text-slate-600 md:flex-row md:items-center md:px-8 dark:text-slate-300">
        <p>© {new Date().getFullYear()} ElTek – IT Solutions. All rights reserved.</p>
        <p>Built for trust, performance, and innovation.</p>
      </div>
    </footer>
  );
}
