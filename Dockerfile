# Use Node.js 18.x as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the rest of the project files
COPY . .

# 切换到正确的工作目录
WORKDIR /app/packages/arb-token-bridge-ui

# 设置环境变量避免Cypress下载问题
ENV CYPRESS_INSTALL_BINARY=0

# 设置 EDGE_CONFIG 环境变量以避免 @vercel/edge-config 错误
ENV EDGE_CONFIG=""

# 安装依赖
RUN yarn install --ignore-scripts

# 运行lint
RUN npm run lint:fix

# 构建项目
RUN yarn build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["yarn", "start"]
