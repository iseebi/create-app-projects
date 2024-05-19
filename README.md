# @iseebi/create-app-projects

よく作るアプリケーションのテンプレートを生成する。

## 使い方

```bash
$ npx github:iseebi/create-app-projects
```

- 使用したいテンプレートを選択し、プロジェクト名を入力するとテンプレートが生成される。
- コードの生成までしかされないので、生成されたプロジェクトディレクトリで npm install 等を実行する。

## テンプレート

以下のテンプレートがある。

- [react-redux-app](./templates/react-redux-app/README.md): React + Redux のアプリケーション

※今後CLIとかのテンプレートとか足したい。

## 開発

### テンプレートの追加

- `templates/` 以下にテンプレートを追加する。
- src/templates.ts にテンプレートの情報を追加する。

### テスト

```bash
$ npm start
```
