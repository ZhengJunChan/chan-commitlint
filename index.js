/*
 * @Author: Chan
 * @Date: 2020-07-27 15:38:24
 * @LastEditTime: 2020-07-27 17:00:46
 * @Description: commitlint 共享配置
 * @FilePath: chanlints/index.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交的前缀
    // feat：新功能（feature）
    // fix：新功能 bug
    // hotfix: 线上 bug
    // docs：文档（README、Change Log 等）
    // style： 格式，仅代码格式，不是 CSS 样式
    // refactor：重构（即不是新增功能，也不是修改 Bug 的代码变动）
    // test：增加测试
    // chore：构建过程或辅助工具的变动，例如构建脚本、Dockerfile、package.json 的改动
    'type-enum': [2, 'always', [
      'feat', 'fix', 'hotfix', 'docs', 'style', 'refactor', 'test', 'chore'
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
