// script.js
// 1. 定义AI工具的数据
const aiTools = [
  {
    name: "ChatGPT",
    category: "语言模型",
    description: "OpenAI开发的强大对话式AI，可用于写作、编码、解答问题等。",
    link: "https://chat.openai.com/",
    icon: "https://logo.clearbit.com/openai.com",
  },
  {
    name: "Midjourney",
    category: "图像生成",
    description: "一款领先的AI绘画工具，通过文本描述生成高质量艺术图像。",
    link: "https://www.midjourney.com/",
    icon: "https://logo.clearbit.com/midjourney.com",
  },
  {
    name: "Gamma",
    category: "文档/PPT生成",
    description: "用AI快速生成精美的演示文稿、文档和网页。",
    link: "https://gamma.app/",
    icon: "https://logo.clearbit.com/gamma.app",
  },
  {
    name: "Notion AI",
    category: "生产力工具",
    description: "Notion内置的AI助手，可帮助写作、总结和头脑风暴。",
    link: "https://www.notion.so/product/ai",
    icon: "https://logo.clearbit.com/notion.so",
  },
  {
    name: "DALL·E 3",
    category: "图像生成",
    description: "OpenAI的文本到图像生成模型，可创建高质量图像。",
    link: "https://openai.com/dall-e",
    icon: "https://logo.clearbit.com/openai.com?size=48",
  },
  {
    name: "Stable Diffusion",
    category: "图像生成",
    description: "开源的文本到图像生成模型，可在本地运行。",
    link: "https://stablediffusionweb.com/",
    icon: "https://stablediffusionweb.com/favicon.ico",
  },
  {
    name: "Claude",
    category: "语言模型",
    description: "Anthropic开发的AI助手，专注于安全可靠的对话。",
    link: "https://claude.ai/",
    icon: "https://claude.ai/favicon.ico",
  },
];

// 2. 获取DOM元素
const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("searchInput");

// 3. 渲染卡片的函数
function renderCards(tools) {
  cardContainer.innerHTML = ""; // 先清空容器

  tools.forEach((tool) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <a href="${tool.link}" target="_blank">
                 <img src="${tool.icon}" alt="${tool.name.charAt(
      0
    )}" class="card-icon" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 40 40\'><rect width=\'40\' height=\'40\' rx=\'8\' fill=\'%23f0f2f5\'/><text x=\'50%\' y=\'50%\' font-size=\'20\' font-weight=\'bold\' fill=\'%237f8c8d\' text-anchor=\'middle\' dy=\'.3em\'>${tool.name.charAt(
      0
    )}</text></svg>'">
                <div class="card-content">
                    <h3>${tool.name}</h3>
                    <span class="category">${tool.category}</span>
                    <p>${tool.description}</p>
                </div>
            </a>
        `;

    cardContainer.appendChild(card);
  });
}

// 4. 实现搜索功能
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredTools = aiTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm)
  );
  renderCards(filteredTools);
});

// 5. 初始加载所有卡片
renderCards(aiTools);
