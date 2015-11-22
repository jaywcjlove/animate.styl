# CSS3 Animate

将 `animate.css` 转换成 `animate.styl`
这个是来自[Github](https://github.com/daneden/animate.css)，官网 [animate.css](https://daneden.github.io/animate.css/)

## 压缩代码

```bash
$ npm install # 安装依赖
$ gulp stylus # 生成css 和 min.css
$ gulp watch # 监听进行编辑styl源文件
```

## js 添加一个动画效果

依赖jQuery方法

```js
$('#yourElement').addClass('animated bounceOutLeft');
```

## 检测动画结束

多数情况使用one

```js
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //doSomething
});
```

##  更改动画持续时间

- vendor 填写兼容前缀如`-moz-`、`-webkit`、`-o`、`-ms`

```css 
.bounceIn {
  //定义动画完成一个周期所需要的时间
  -vendor-animation-duration: 3s;
  //属性定义动画何时开始。允许负值，-2s 使动画马上开始，但跳过 2 秒进入动画
  -vendor-animation-delay: 2s;
  //播放动画次数 infinite(无限循环)
  -vendor-animation-iteration-count: infinite; 
}
```
