'use strict';

module.exports = {
    ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'], // 主体前有空行
        'footer-leading-blank': [1, 'always'], // 末行前有空行
        'header-max-length': [2, 'always', 108], // 首行最大长度
        'subject-empty': [2, 'never'], // 标题不可为空
        'type-empty': [2, 'never'], // 类型不可为空
        'type-enum': [
            2,
            'always',
            [
                'build', // 构造工具、外部依赖（webpack、npm）
                'chore', // 不涉及 src、test 的其他修改（构建过程或辅助工具的变更）
                'ci', // 修改项目继续集成流程（Travis，Jenkins，GitLab CI，Circle等）
                'docs', // 文档
                'feat', // 新增功能
                'fix', // bug修复
                'perf', // 性能优化
                'refactor', // 重构
                'release', // 版本发布
                'revert', // 回退
                'style', // 代码风格（不影响代码含义）
                'test', // 测试
                'wip', // 开发中
                'types', // 类型声明
            ],
        ],
    },
};
