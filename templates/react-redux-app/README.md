# SPAアプリケーションテンプレート

React + Redux + redux-saga + TypeScript + Vite

## 操作

### 開発モード起動

```bash
$ npm run dev
```

### ビルド

```bash
$ npm run build
```

### Reduxモジュール生成

```bash
$ npm run create:module [module-name]
```

生成後、以下の箇所に記述を追加して登録する。

- `src/modules/index.ts`
  - RootStateに追加する
- `src/configureStore.ts`
  - rootSagaに追加する
  - rootReducerに追加する

### コンポーネント(component + container)生成

```bash
$ npm run create:component [component-path-and-name]
```

components/ 以下のディレクトリを込みで指定する。例えば pages/HelloPage と指定すると、以下のファイルが生成される。

- `src/components/pages/HelloPage/HelloPage.tsx`
- `src/components/pages/HelloPage/HelloPageContainer.tsx`
