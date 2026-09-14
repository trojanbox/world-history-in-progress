# 《正在发生的世界史》

一部跟着现实时间持续生长的长篇叙事连载。

故事从真实世界每天发生的政治、战争、经济、科技与社会变化出发，把原本散落在新闻里的事件重新放进同一条时间线中。内容采用长篇小说式叙事，但现实人物、机构、日期、数字与事件关系仍以可核验事实为边界。

## 在线阅读

https://trojanbox.github.io/world-history-in-progress/

## 发布一章

正文位于 `docs/_posts/`。每天新增一个 Markdown 文件：

```text
docs/_posts/YYYY-MM-DD-NNN.md
```

例如：

```text
docs/_posts/2026-09-15-001.md
```

文章头部：

```yaml
---
layout: post
title: "章节标题"
chapter: 1
date: 2026-09-15 21:00:00 +0800
summary: "一句话概括本章。"
permalink: /chapters/001/
---
```

正文直接进入叙事，不要求固定的定场诗或章回体开场。

## 目录

- `docs/_posts/`：每日章节
- `docs/_layouts/`：页面与阅读器骨架
- `docs/assets/`：样式和阅读器脚本
- `docs/index.html`：作品首页
- `docs/chapters.html`：完整章节列表
- `AGENTS.md`：给后续 AI/自动化使用的写作与发布约束

## 阅读器

章节页支持字体、字号、行距、正文宽度和页面模式设置。偏好保存在浏览器本地，不依赖账号或服务端。

## 本地预览

这是一个原生 GitHub Pages / Jekyll 站点。若本机安装了 Jekyll，可在 `docs/` 下运行本地服务；没有本地环境也不影响发布，推送到 `main` 后由 GitHub Pages 构建。
