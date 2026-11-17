#!/usr/bin/env bash
# Déploie l'export statique sur la branche gh-pages (GitHub Pages).
# Usage : npm run deploy
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/T0b0i7/cabinet-medical-eureka.git}"
BRANCH="gh-pages"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"

echo "▶ Build de l'export statique (basePath /cabinet-medical-eureka)…"
cd "$ROOT"
rm -rf out
GITHUB_PAGES=true npm run build

echo "▶ Préparation de la branche $BRANCH…"
cp -r out/. "$TMP/"
touch "$TMP/.nojekyll"

cd "$TMP"
git init -q -b "$BRANCH"
git add -A
git -c user.name="${GIT_AUTHOR_NAME:-T0b0i7}" \
    -c user.email="${GIT_AUTHOR_EMAIL:-T0b0i7@users.noreply.github.com}" \
    commit -q -m "Déploiement $(date -u +'%Y-%m-%d %H:%M UTC')"
git remote add origin "$REPO_URL"
git push -f origin "$BRANCH"

echo "✅ Déployé : https://t0b0i7.github.io/cabinet-medical-eureka/"
