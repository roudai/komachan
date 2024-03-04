# 1 日 1 コマちゃん、1 日 4 コマちゃん

URL : [https://komachan.pw](https://komachan.pw)

## 原作

[@w_ty_OvO](https://twitter.com/w_ty_OvO)

## 実行環境

Google Cloud Run

## 使用ツール

### フォントサブセット作成

[サブセットフォントメーカー](https://opentype.jp/subsetfontmk.htm)

### JPEG⇒WEBP 変換(Mac)

```bash
# WebPのインストール
$ brew install webp

# 実行権限付与
$ cd jpeg
$ chmod 755 webp.sh

# 必要なjpegファイル格納後、webp変換とフォルダ移動
$ ./webp.sh

# jpegファイルは自動削除されないので、手動で削除する
```

## 実行方法

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhofavicon-preview.pngt:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
