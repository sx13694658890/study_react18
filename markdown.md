const 常量
let   具有块极
var  全局


##### 四种形式判断类型


1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString.call



#### less 编译

地址：https://raw.githubusercontent.com/less/less.js/v2.5.3/dist/less.min.js


koala是一个前端预处理器语言图形编译工具，支持Less、Sass、Compass、CoffeeScript，帮助web开发者更高效地使用它们进行开发。跨平台运行，完美兼容windows、linux、mac。
http://koala-app.com/index-zh.html



#####  git  tag



git tag 列出已有tag


git -a tagname -m "备注"   创建一个带备注的tag

git show tagname  查看tag详细信息



git tag -a v1.2 9fceb02 -m "my tag"     给指定某个commit号加上tag


git push origin v1.0    tag同步到远程服务器
git push origin --tags   所有

git tag -d v0.1.2  本地删除
git push origin :refs/tags/tagName   远端删除tag