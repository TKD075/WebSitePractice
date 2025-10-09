import Link from 'next/link';

// propsなしのシンプルな関数コンポーネント（TypeScriptでも型は自動で推論されます）
export default function Nav() {
    return (
    <nav>
      {/* Link の href は basePath を含めず、サイトルートからのパスを書く */}
        <Link href="/">Home</Link>
        <Link href="/myself/">Myself</Link>
        <Link href="/practice1/">Practice 1</Link>
        <Link href="/production/">Production</Link>
    </nav>
    );
}
