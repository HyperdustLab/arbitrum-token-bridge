# 使用Node.js 20.x版本作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json到工作目录
COPY package.json package-lock.json ./

# 安装项目依赖项
RUN npm install

# 复制项目的其他文件
COPY . .

# 运行项目构建（可选，如果需要构建步骤）
RUN npm run build

# 暴露应用程序端口（根据您的应用程序设置端口）
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]
