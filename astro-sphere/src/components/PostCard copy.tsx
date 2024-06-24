import { formatDate, readingTime } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  post: CollectionEntry<"blog">;
  showCover?: boolean;
};

export default function PostCard({ post, showCover }: Props) {
  const isNewPost =
    post.data.date > new Date(new Date().setDate(new Date().getDate() - 7));

  return (
    <a
      href={`/${post.collection}/${post.slug}`}
      class="group relative flex items-center gap-3 rounded-lg border border-black/15 p-4 transition-colors duration-300 ease-in-out hover:bg-black/5 dark:border-white/20 hover:dark:bg-white/10"
    >
      {isNewPost && (
        <div class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <span class="rounded-full border border-black/15 bg-black px-2 py-1 text-sm font-medium capitalize text-white dark:border-white/25 dark:bg-white dark:text-black">
            New
          </span>
        </div>
      )}
      <div class="blend w-full group-hover:text-black group-hover:dark:text-white">
        {showCover && post.data.cover && (
          <div class="mb-5 overflow-clip rounded">
            <img src={post.data.cover.src} class="bg-cover" />
          </div>
        )}
        <div class="flex items-center justify-between gap-3">
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap gap-3 text-sm uppercase opacity-75">
                <div class="flex items-center gap-2">
                  <svg class="size-5 stroke-current">
                    <use href="/ui.svg#calendar"></use>
                  </svg>
                  {formatDate(post.data.date)}
                </div>
                <div class="flex items-center gap-2">
                  <svg class="size-5 stroke-current">
                    <use href="/ui.svg#book-open"></use>
                  </svg>
                  {readingTime(post.body)}
                </div>
              </div>
            </div>
            <div class="mt-3 font-semibold text-black dark:text-white">
              {post.data.title}
            </div>
            <div class="line-clamp-2 text-sm">{post.data.summary}</div>
            <ul class="mt-2 flex flex-wrap gap-1">
              {post.data.tags.map((tag) => (
                <li class="rounded bg-black/5 px-1 py-0.5 text-xs uppercase text-black/75 dark:bg-white/20 dark:text-white/75">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
