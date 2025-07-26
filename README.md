# metaverse-key-supporter
このツールは、Webブラウザ接続型のメタバースを、キーボード操作なしに操作するためのものです。おそらく視線入力装置でも使えるものかと思います。手元に視線入力装置がないので....。
開発中です。「前提環境」のインストールを実施した環境では、このツールを使うことができます。

# 前提環境
- Node.js ( 開発環境では、Node.js v20 系を使っています。）, 公式サイトは[こちら](https://nodejs.org/ja)。
- node-gyp ( electron-rebuild を行うため。) , 公式サイトは[こちら](https://github.com/nodejs/node-gyp)。

# インストール手順
## Windows 11 環境の場合
(1) ソースコードを取得します。
```
git clone https://github.com/kolinz/metaverse-key-supporter.git
```
(2) metaverse-key-supporterディレクトリに移動します。
```
cd metaverse-key-supporter
```
(3) 下記のコマンドを実行します。
初回の起動は次のように実行します。
```
npm install
npx electron-rebuild
npm start
```
2回目以降の起動は、下記のように実行します。
```
npm start
```

# 使い方
準備中

## デモ動画
https://www.youtube.com/watch?v=xN5Kdw5lhNs
