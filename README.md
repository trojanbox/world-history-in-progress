# 《正在发生的世界史》

一个按日连载的世界时事叙事项目。

它尝试用更接近评书、章回体网文的方式，把当天正在发生的国际事件串成一回容易读下去的故事：每天一回，每回有回目、有定场诗，正文尽量让没有时间持续追踪国际新闻的人也能读懂。

## 在线阅读

GitHub Pages 启用后：`https://trojanbox.github.io/world-history-in-progress/`

## 发布一回

正文位于 `docs/_posts/`。每天新增一个 Markdown 文件即可：

```text
docs/_posts/YYYY-MM-DD-NNN.md
```

例如：

```text
docs/_posts/2026-09-15-001.md
```

文章头部使用：

```yaml
---
layout: post
title: "第一回 ……"
episode: 1
date: 2026-09-15 21:00:00 +0800
summary: "一句话概括这一回发生了什么。"
permalink: /episodes/001/
---
```

正文第一段建议用引用块写定场诗，随后进入正文。

## 目录

- `docs/_posts/`：每日正文
- `docs/_layouts/`：站点页面骨架
- `docs/assets/`：样式
- `docs/index.html`：首页
- `docs/archive.html`：完整回目
- `docs/about.md`：项目说明
- `AGENTS.md`：给后续 AI/自动化使用的写作与发布约束

## 本地预览

这是一个原生 GitHub Pages / Jekyll 站点。若本机安装了 Jekyll，可在 `docs/` 下运行本地服务；没有本地环境也不影响发布，推送到 `main` 后由 GitHub Pages 构建。
