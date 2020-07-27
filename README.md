# chan-commitlint-config

## 安装

```
$ npm install --save-dev @commitlint/{config-conventional,cli} conventional-changelog-lint-config-chan-commitlint-config
```

## 在 `commitlint` 中使用 `chan-commitlint-config`

当 `chan-commitlint-config` 安装好以后，就可以愉快地使用它了！

```commitlint.config.js
module.exports = {
  extends: ['chan-commitlint-config'],
  rules: {
      // commitlint的配置项
  }
}
```
