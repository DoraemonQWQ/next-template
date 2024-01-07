FROM node:20.10
LABEL authors="30280"

# 维护者
MAINTAINER yuyuko<3028029456@qq.com>
# 版本
ENV VERSION 1.0
# 设置为生产环境
ENV NODE_ENV=production
# 任意ip
#ENV HOST 0.0.0.0

# 在容器根目录中创建一个程序目录
WORKDIR /app

# 将文件copy岛容器中
COPY .output /app

# 设置编码
ENV LANG C.UTF-8

# 暴露端口
EXPOSE 3000

# 运行
ENTRYPOINT ["node","/app/server/index.mjs"]