import '../styles/globals.css';           // グローバルCSSはレイアウトで1回読み込み
import Header from '../components/Header';

export const metadata = {
    title: 'WebSitePractice',
    description: 'My personal site',
};

// Next.js App Router のお作法：children の型を明示
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="ja">
        <body>
        {/* ヘッダーは全ページ共通表示 */}
        <Header />
        {/* ページごとの内容 */}
        <main>{children}</main>
        </body>
    </html>
    );
}
