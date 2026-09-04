# EC Site UI Demo

アパレルECサイトを想定したフロントエンドのデモプロジェクト。トップページの主要セクション（ヒーロー・カテゴリ一覧・注目商品・お客様の声）を実装しています。

## 主な機能

- カテゴリナビゲーション
- 注目商品一覧（画像・商品名・価格）
- お客様の声セクション
- tRPC を用いたクライアント⇔サーバー間の型安全な通信サンプル

## 技術スタック

- [Next.js](https://nextjs.org/)（App Router）
- React / TypeScript
- [tRPC](https://trpc.io/)（+ TanStack Query）
- Tailwind CSS
- Zod（バリデーション）

[create-t3-app](https://create.t3.gg/) をベースにセットアップしています。

## セットアップ

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。
