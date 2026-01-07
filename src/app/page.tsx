import Image from "next/image";

import { TrpcGreeting } from "./_components/trpc-greeting";

const featuredProducts = [
  {
    id: "1",
    title: "ミニマルレザーバッグ",
    price: 24800,
    image: "/products/bag.jpg",
  },
  {
    id: "2",
    title: "プレミアムスニーカー",
    price: 19800,
    image: "/products/sneaker.jpg",
  },
  {
    id: "3",
    title: "コットンシャツ",
    price: 9800,
    image: "/products/shirt.jpg",
  },
];

const categories = [
  { id: "c1", name: "NEW ARRIVALS" },
  { id: "c2", name: "BAGS" },
  { id: "c3", name: "SHOES" },
  { id: "c4", name: "ACCESSORIES" },
];

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans text-zinc-900">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 pb-12 pt-24 md:flex-row md:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold tracking-[0.3em] text-zinc-500">
          SPRING COLLECTION
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          日常に寄り添う
          <br />
          プレミアムなスタイルを
        </h1>
        <p className="text-lg text-zinc-600">
          機能性と美しさを兼ね備えたアイテムを厳選。あなたの毎日を少し特別にするコレクションをお届けします。
        </p>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
            新作アイテムを見る
          </button>
          <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
            ストーリーを読む
          </button>
        </div>
        <div className="rounded-2xl border border-dashed border-zinc-300 px-6 py-4 text-sm text-zinc-600">
          <p className="font-semibold text-zinc-900">tRPC 接続テスト</p>
          <TrpcGreeting />
        </div>
      </div>

      <div className="relative flex h-96 flex-1 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <Image
          src="/hero-product.png"
          alt="メインビジュアル"
          width={360}
          height={360}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">カテゴリーから探す</h2>
        <a href="#" className="text-sm font-semibold text-zinc-500">
          すべて見る →
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-16 text-center text-xs font-semibold tracking-[0.3em] text-zinc-700 shadow-sm"
          >
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">注目アイテム</h2>
        <a href="#" className="text-sm font-semibold text-zinc-500">
          もっと見る →
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <article
            key={product.id}
            className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-[0.2em] text-zinc-500">
                LIMITED
              </p>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-zinc-500">
                ¥{product.price.toLocaleString()}
              </p>
            </div>
            <button className="w-full rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
              詳細を見る
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl bg-zinc-900 p-10 text-white">
        <p className="text-sm font-semibold tracking-[0.3em] text-zinc-300">
          CUSTOMER VOICE
        </p>
        <p className="mt-4 text-2xl font-semibold leading-relaxed">
          「オンにもオフにも使える絶妙なデザイン。品質も高く、長く愛用できそうです。」
        </p>
        <p className="mt-6 text-sm text-zinc-400">— Aiko / Tokyo</p>
      </div>
    </section>
  );
}
