# WebSitePractice
HTML/CSSとJavaScriptを使ったウェブサイトの作成を練習するリポジトリ<br>
作成したものを閲覧できるリンク
https://tkd075.github.io/WebSitePractice/

## 要改善点
~~ハンバーガーマークのactionをオンにした後、クリック入力が反映されない~~<br>
メニューとマークのz軸を設定することで改善<br>
~~別のサイトを作成して、メニュー内から遷移したい~~<br>
完了<br>
データサーバーと連携した表またはテーブルを表示したい

## 未リファクタ部
- .htmlの.tsx化
- script.jsの移行
- CSSのモジュール化

- Pi5への移行
    - apps/api ディレクトリだけ先に作り、README.mdで目的と起動予定ポート（例: 8000）を明記。
    - infra/docker-compose.yml と Caddyfile は“雛形”だけ置く（後で中身を埋める）。
    - apps/web/lib/apiClient.ts を用意し、APIのベースURLだけ環境変数で差し替えできるようにしておく。
        - Pages（いま）は「モック or GitHub API等」
        - Pi5移行時に「https://api.yourdomain」へ差し替え


## 自分用覚書
- /apps/web/
    - Next.js(静的出力 -> Pages)
- /apps/web/app/
    - App Router(各ページ)
- /apps/web/app/...
    - lint, envなど

