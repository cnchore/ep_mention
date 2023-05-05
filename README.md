# ep_mention

etherpad-lite 提及组件
---

## 已有功能

1.  监听键盘@事件
2.  鼠标事件边界处理
3.  键盘事件边界处理(部分)
4.  mention弹窗内容方面填充
5.  模糊搜索相关逻辑填写
6.  多行mention定位
7.  aceInit填充初始mention
8.  动画过渡
9.  样式优化
10. 移动端样式兼容

## Undo

- 滑动分页
- @人的时候带上第几行位置信息，好滚动到这里
- 上下左右按键拦截代理
- 退格按键退到@人的模块的时候，直接删除整个模块

## 问题

1.  同一行不能有两个@, 
2.  有序列表中/前面加上空格之后，@列表的位置不准确
3.  @的点击事件，事件委托或者事件池
4.  获取@之后的文字，并且进行模糊搜索逻辑
5.  获取当前行的bug，获取allText位置不对
6.  在ace2_inner中找到获取当前行文本内容的方法。
7.  连续@@问题
8.  文本前方有空格，或者段落开头的时候@列表的位置不准确。
9.  @列表展示的时候，用户按下空格，取消弹窗展示
10. 回车操作快捷键
11. 文档滚动的时候，@弹窗位置重新计算。
12. 段落开头@，但是后面有文字的时候弹窗出不来。
13. 当mention列表滚动过后，第二次再打开，依然是上次滚动位置