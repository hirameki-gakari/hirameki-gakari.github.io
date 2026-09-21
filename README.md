# ひらめき ブランドホーム

公開先: https://hirameki-gakari.github.io/

HTML/CSSと計測用の小さなJavaScriptだけで動きます。ビルドやパッケージのインストールは不要です。各サービスは別のリポジトリのまま運用します。

## ファイル
- index.html: 内容、サービスカード、SEOと構造化データ
- style.css: 共通デザイン・スマホ対応
- analytics.js: 既存サービス共通のGA4とサービス選択イベント。localhostでは送信しない
- privacy.html / 404.html: ポリシー・見つからないページ
- hirameki-reveal.webp / favicon.svg / og-image.png: ひらり、スパークのfavicon、1200×630のOGP画像
- robots.txt / sitemap.xml: 検索エンジン案内

## サービスを増やす
1. index.html の a.service-card をひとつ複製する。
2. 正式名称、問いかけ、説明、対象地域・条件、リンク、data-service の固有名を変更する。
3. フッターとJSON-LDの hasPart に正式名称と同じURLを加える。
4. 未公開のものはクリックできるカードにせず、準備中として扱う。
5. スマホ幅390pxとPC幅1280pxで表示・遷移・戻る・画像切れを確認する。

サービスカードはJavaScriptに依存しません。件数が増えるとPCは2列、スマホは1列で増えます。

## 公開と確認
このフォルダの内容を hirameki-gakari/hirameki-gakari.github.io のmainへ保存。GitHub Pagesの公開元はmain / (root)。公開後にトップ・privacy.html・存在しないパスの404・2サービスのリンクを確認します。

既存2サイトには変更を加えていません。将来の小さな改善として、各フッターに親ホームへのリンクを追加し、構造化データで親との関係を示せます。ごはん側は小さなWebP画像をOGPに使っているため、専用1200×630画像への改善も候補です。

## ブランド・素材
最新の両サービスの BRAND.md を参照。今回のユーザー指定を優先し、親ブランド名は「ひらめき」。生成り・墨色・テラコッタ、Zen Kaku Gothic New / Shippori Mincho、スパークを継承。

ひらり画像はユーザー所有ブランドの既存 assets/character/hirameki-reveal.webp を変更せず使用。既存BRAND.mdに両サービス共通素材と使用方法の記載あり。一般向け再配布ライセンスは確認できないため、第三者向けの利用許諾は追加していません。新たなキャラクター生成や料理写真の転用はしていません。

調査時のmain:
- ごはん bf61fb2fd828a29d4069b7b85ef42347059c1458
- お店 d165803e7aa46afd5db2218a95c105374a5afaa4

GA4は両方のindex.htmlで G-FGCJC3PJ6C を確認。Metricoolなし。Xはお店のprivacy.htmlで https://x.com/hirameki365 を確認。
