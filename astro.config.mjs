import { defineConfig } from 'astro/config';

// GitHub Pages で公開するときは以下を自分の値に合わせて更新する。
//   site: 'https://<あなたのGitHubユーザー名>.github.io'
//   base: '/<リポジトリ名>/'
// 想定リポジトリ名は kosodate-cards。リポジトリ名を変える場合は base も必ず合わせる。
export default defineConfig({
  site: 'https://syake03.github.io',
  base: '/kosodate-cards/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
