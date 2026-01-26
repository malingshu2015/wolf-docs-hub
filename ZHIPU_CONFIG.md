# 智谱 AI (Zhipu AI) 配置说明

## ✅ 配置状态

- **API Key**: 已配置 ✓
- **认证状态**: 成功 ✓
- **调用状态**: 需要充值或购买资源包

## ⚠️ 当前问题

API 调用返回 `429` 错误：**余额不足或无可用资源包**

这说明：
- API key 配置正确且有效
- 账户需要充值或购买资源包才能使用

## 🔧 解决方案

### 1. 购买资源包或充值

访问 [智谱 AI 开放平台](https://open.bigmodel.cn/) 并登录：

1. 进入"计费管理"或"资源包"页面
2. 购买适合的资源包（按需付费或包月）
3. 新用户通常有免费额度可以领取

### 2. 领取新用户福利

智谱 AI 通常为新用户提供免费试用额度：
- 查看平台的"活动中心"或"新手福利"
- 领取免费 tokens 或体验券

### 3. 更新 API Key（如需）

如果 API key 失效，需要重新生成：

1. 登录 [智谱 AI 开放平台](https://open.bigmodel.cn/)
2. 进入右上角"API Keys"
3. 创建新的 API Key
4. 复制新的 API key 并更新到 `.env` 文件

### 3. 更新 API Key

编辑 `.env` 文件：

```bash
ZHIPU_API_KEY=your_new_api_key_here
```

## 📁 配置文件

- `.env` - 环境变量配置（包含 API key，不要提交到 git）
- `.env.example` - 配置模板
- `.gitignore` - 已配置忽略 `.env` 文件
- `zhipu-openai.js` - 调用脚本（使用 OpenAI 兼容接口）
- `zhipu-client.js` - 调用脚本（使用官方 SDK）

## 🚀 使用方法

更新 API key 后，可以运行测试：

```bash
node zhipu-openai.js "你好"
```

## 📚 官方文档

- [快速开始](https://docs.bigmodel.cn/cn/guide/start/quick-start)
- [HTTP API 调用](https://docs.bigmodel.cn/cn/guide/develop/http/introduction)
- [API 使用概述](https://docs.bigmodel.cn/cn/api/introduction)
- [错误码说明](https://docs.bigmodel.cn/cn/api/error-code)

## 💡 提示

- ✅ API key 已配置且认证成功
- ⚠️ 需要购买资源包或充值才能正常调用
- 智谱 AI 支持 API Key 直接鉴权和 JWT Token 鉴权两种方式
- API Key 格式为：`id.secret`（由两部分组成，用点号分隔）
- 建议使用 `glm-4-flash` 模型进行测试，成本更低

## 🧪 可用模型

- `glm-4` - 通用模型
- `glm-4-flash` - 快速响应模型（推荐测试用）
- `glm-4-plus` - 增强版模型
- `glm-4-air` - 轻量级模型

可以通过修改 `.env` 文件中的 `ZHIPU_MODEL` 来切换模型。
