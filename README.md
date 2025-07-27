# metaverse-key-supporter
このツールは、Webブラウザ接続型のメタバースを、キーボード操作なしに操作するためのものです。おそらく視線入力装置でも使えるものかと思います。手元に視線入力装置がないので....。

Webブラウザ型のメタバースでは、以下で動作確認済みです。
- [Spatial](https://www.spatial.io/)
- [Vket Cloud](https://cloud.vket.com/ja)
- [Roomiq](https://roomiq.jp/) <<一部制限あり。スペースキーが動作しない

## 今後やること / やりたいこと
 - [ ] 英語UIの追加
 - [ ] 英語と日本語のUI切り替えの追加
 - [ ] Linux対応
 - [ ] ボタンへのカーソル吸着の試作
 - [ ] 視線入力装置での動作確認

## 諸注意
### 開発経験のある方の場合
「前提環境」のインストールを実施した環境で、npm start までを行って起動してください。いろいろと弄ってカスタマイズしてください。

### このツールを配布したい方
Windows 11 向けに実行形式ファイル（.exe）にパッケージ化を行ってください。実行形式ファイル（.exe）にすることで、以後、「metaverse-key-supporter.exe」をダブルクリックするだけで使えます。npm start のようなコマンド操作はいりません。

# 背景
中学校や高校ではタブレット端末中心になりがちで、パソコンのキーボードやマウスを使った操作が苦手な生徒が多く、就職先で覚えるか、進学先である専門学校や大学でパソコンの基本操作を習得することになります。そうしたなかで、パソコンを使った操作の支援ツールが必要になっています。
また、視線でパソコンを操作するような場合は、キーボードやマウスを柔軟に使えるとは限らないので、こうした支援ツールが必要になります。

# 準備するもの
このツールは、Webアプリではありません。パソコン上で動くクライアントアプリです。
25年7月現在、Windows11 に対応しています。

# 前提環境
下記をインストールしてください。
- Node.js ( 開発環境では、Node.js v20 系を使っています。）, 公式サイトは[こちら](https://nodejs.org/ja)。
- node-gyp ( electron-rebuild を行うため。) , 公式サイトは[こちら](https://github.com/nodejs/node-gyp)。

# インストール手順
## Windows 11 環境の場合
### (1) ソースコードを取得します。
```
git clone https://github.com/kolinz/metaverse-key-supporter.git
```
### (2) metaverse-key-supporterディレクトリに移動します。
```
cd metaverse-key-supporter
```
### (3) 下記のコマンドを実行します。
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
## Windows 11 向けに実行形式ファイル（.exe）にパッケージ化する手順
配布する場合は、実行形式ファイルにパッケージ化する必要があるので、手順を示します。
metaverse-key-supporter ディレクトリ（フォルダ）にいる前提で説明します。

### (1) electron-packagerのインストール
```
npm install --save-dev electron-packager
```
### (2) [package.json](https://github.com/kolinz/metaverse-key-supporter/blob/main/package.json)を編集
下記のように編集します。
```
{
  "name": "metaverse-key-supporter",
  "version": "1.0.0",
  "description": "キーボード操作が苦手な人のメタバース操作を助けるElectronアプリ",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "package": "electron-packager . metaverse-key-supporter --platform=win32 --arch=x64 --out=dist --overwrite --icon=mksicon.ico"
  },
  "devDependencies": {
    "electron": "^29.0.0",
    "electron-packager": "^17.1.1"
  },
  "dependencies": {
    "robotjs": "^0.6.0"
  }
}
```
### (3) パッケージ化
次のコマンドを実行します。
```
npm run package
```
実行後、「dist」ディレクトリ（フォルダ）の下に、「metaverse-key-supporter-win32-x64」ディレクトリ（フォルダ）が作成され、そのなかに「metaverse-key-supporter.exe」が入っています。

### (4) 動作確認と配布
「metaverse-key-supporter.exe」をダブルクリックすると、アプリが起動します。
「metaverse-key-supporter-win32-x64」ディレクトリ（フォルダ）を、Zip形式などに圧縮して、配布するようにしましょう。

# 使い方
[wiki](https://github.com/kolinz/metaverse-key-supporter/wiki)をご覧ください。

## デモ動画
下記をクリックすると、動画が表示されます。

[![デモ動画です。サムネイルをクリックしてください。](http://img.youtube.com/vi/xN5Kdw5lhNs/0.jpg)](https://www.youtube.com/watch?v=xN5Kdw5lhNs)
