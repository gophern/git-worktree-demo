# SalesPilot CRM — 官网首页

> 一站式业务管理平台，助你掌控销售线、提升成交率。
> 原作者使用繁体中文，现在已经转换为简体中文。

## 🚀 Tech Stack

- **React 18** + **Vite 6**
- Vanilla CSS（CSS Custom Properties 设计系统）
- Google Fonts（Inter + Noto Sans TC）

## 📁 专案结构

```
src/
├── main.jsx                # 应用程式入口
├── App.jsx                 # 根组件
├── index.css               # 全域样式 & 设计系统
├── components/
│   ├── Navbar.jsx          # 导览列（含 RWD 汉堡选单）
│   ├── Hero.jsx            # 主视觉区（CTA + 管线 Mockup）
│   ├── SocialProof.jsx     # 客户信赖区块 + 见证引言
│   ├── Features.jsx        # 6 大核心功能
│   ├── UseCases.jsx        # 3 种应用场景
│   ├── Pricing.jsx         # 方案价格比较
│   ├── CallToAction.jsx    # 底部 CTA 横幅
│   └── Footer.jsx          # 页尾（产品/资源/公司/法务/社群）
└── data/
    ├── navigation.js       # 导览 & 品牌设定
    ├── hero.js             # Hero 文案 & 数据
    ├── socialProof.js      # 客户 logo & 见证
    ├── features.js         # 功能列表
    ├── useCases.js         # 应用场景
    ├── pricing.js          # 方案定价
    └── footer.js           # 页尾连结
```

## 🏁 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（预设 http://localhost:3000）
pnpm dev

# 打包正式版本
pnpm build

# 预览正式版本
pnpm preview
```

## 🎨 设计特色

- **深色主题**：以 `#0a0e1a` 为底，搭配 Indigo / Cyan 渐层
- **Glassmorphism Navbar**：`backdrop-filter` 毛玻璃效果
- **微动画**：Hero 背景光晕呼吸、Mockup 浮动、卡片 hover 上移
- **全响应式**：桌面 → 平板 → 手机三段断点
- **A11y**：语意化 HTML、`aria-label`、`aria-expanded`、`role` 标注

## ⚙️ Config-Driven

所有文案与资料集中在 `src/data/` 下的 JS 模组，修改内容不需触碰任何组件程式码。

| 档案 | 控制内容 |
|------|---------|
| `navigation.js` | 品牌名称、导览连结 |
| `hero.js` | 主标、副标、统计数据、CTA 按钮 |
| `socialProof.js` | 客户 logo、见证引言 |
| `features.js` | 6 项功能的 icon / 标题 / 描述 |
| `useCases.js` | 3 种角色场景 & 亮点清单 |
| `pricing.js` | 3 组方案的价格 / 功能列表 |
| `footer.js` | 页尾栏位、社群连结、版权 |

## 📜 License

MIT
