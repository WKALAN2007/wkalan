# WKALAN Starter Template

每次新客户项目从这里开始。不是从零。

## 包含

- 基础 layout（Header + Footer + SEO）
- Hero section（一句话 + CTA）
- About section（这个人是谁）
- Work/Content section（他的内容/作品）
- Contact section（预约对话/联系）

## 用法

1. 复制整个 `starters/` 目录到新项目
2. 改 `constants.ts` — 客户名字、tagline、邮箱
3. 改每个 section 的内容
4. 改颜色（tokens.css）
5. 跑 `npm run dev` — 客户的网站骨架已经在了

## 技术

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion
- Vercel 部署

## 定制

不要改 layout 结构。改 section 内容。

颜色 → tokens.css
字体 → layout.tsx（Google Fonts 或 next/font）
内容 → 每个 section 的文案
图片 → public/ 目录

每个客户不一样——但骨架一样。
