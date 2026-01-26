#!/usr/bin/env node

/**
 * 智谱 AI API 调用示例 - 使用 OpenAI 兼容接口
 * Usage: node zhipu-openai.js "你的问题"
 */

import fs from 'fs';
import OpenAI from 'openai';

// 从 .env 文件加载环境变量
function loadEnv() {
  const envPath = '.env';
  if (!fs.existsSync(envPath)) {
    console.error('错误: .env 文件不存在');
    process.exit(1);
  }

  const env = {};
  const content = fs.readFileSync(envPath, 'utf-8');
  content.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && !key.startsWith('#') && valueParts.length > 0) {
      env[key.trim()] = valueParts.join('=').trim();
    }
  });
  return env;
}

// 主函数
async function main() {
  const env = loadEnv();

  if (!env.ZHIPU_API_KEY) {
    console.error('错误: ZHIPU_API_KEY 未在 .env 文件中配置');
    process.exit(1);
  }

  const prompt = process.argv[2] || '你好，请介绍一下你自己';

  console.log('提问:', prompt);
  console.log('\n正在思考...\n');

  try {
    // 使用 OpenAI 兼容接口
    const client = new OpenAI({
      apiKey: env.ZHIPU_API_KEY,
      baseURL: env.ZHIPU_API_BASE || 'https://open.bigmodel.cn/api/paas/v4/'
    });

    // 调用 API
    const response = await client.chat.completions.create({
      model: env.ZHIPU_MODEL || 'glm-4',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    if (response.choices && response.choices[0]) {
      console.log('回答:', response.choices[0].message.content);
    } else {
      console.error('错误: API 返回格式异常');
    }
  } catch (error) {
    console.error('错误:', error.message);
    if (error.response) {
      console.error('响应详情:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

main();
