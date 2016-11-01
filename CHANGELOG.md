## CHANGELOG

### 0.6.4
-- 更新talent-core
-- 去掉无用redux-async-connect
-- index.html设了模拟统计分析数据
-- 增加eslint
-- 修复i18n插件创建文件夹应循环创建

### 0.6.3
-- 应用i18n插件

### 0.6.2
-- 测试talent-core0.5.1-13（新增了严格大小写文件引用插件）

### 0.6.1
-- 修复了局部刷新的bug（安装了react-transform-hmr库以及在entry中export出App组件）
-- demo中使用fetch本地模拟发请求

### 0.6
-- 该版使用了webpack-dev-server服务来启动（与p-beisencloud-core项目一致）
-- 调用talent-core项目
-- 动态路由和load数据均封装在talent-core中

### 0.5
-- 该版使用了express等库的终极版

### 0.4.1
- 精简无用的包
- 去除模拟发请求以及返回模拟数据模块

### 0.4.0
- babel6
- 测试框架确定(karma+jasmine+enzyme+react-addons-test-utils)

### 0.3.2
- 解决组件无法debugger
- 解决热加载运行时间久的问题

### 0.3.1
- 解决redux-devtools bug

### 0.3.0
- 增加test示例
  - 新增test频道
  - 使用connect关联redux数据
  - 通过testReducer处理数据
- 升级react-router至2.0后删除redux-router，引入react-router-redux
- 异步请求middleware

### 0.2.0
- 动态路由

### 0.1.0
- TalentUI空项目框架