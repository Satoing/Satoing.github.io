#!/bin/bash

# 1. 生成 Hugo 静态文件到 docs/
echo "🚀 生成 Hugo 静态文件..."
hugo -D --destination docs

# 2. 提交并推送
echo "📦 提交到 main 分支..."
git add .
git commit -m "Update site $(date)"
git push -f origin main

echo "✅ 部署完成！访问 https://satoing.github.io"