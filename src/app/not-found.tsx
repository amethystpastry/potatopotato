import Link from "next/link";
import { T } from "@/lib/i18n";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight"><T en="This page has been eaten" zh="这一页被吃掉了" /></h1>
      <p className="mt-4 text-muted"><T en="We couldn’t find what you were looking for." zh="找不到您要的页面。" /></p>
      <Link href="/" className="btn btn-primary mt-8"><T en="Back to home" zh="返回首页" /></Link>
    </div>
  );
}
