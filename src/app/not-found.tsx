import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-display text-5xl font-light">This page has been eaten</h1>
      <p className="mt-4 text-muted">We couldn’t find what you were looking for.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </div>
  );
}
