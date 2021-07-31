# vue-calendar-card

## Use

+ CDN

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>calendar-panel</title>
    <link rel="stylesheet" href="  https://cdn.jsdelivr.net/npm/vue-calendar-card@latest/css/main.css">
  </head>
  <body>
    <div id="app">
      <vue-calendar-card  type="single" v-model="temp" />
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-calendar-card@latest/index.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: function () {
          return {
            temp: null
          }
        }
      })
    </script>
  </body>
  
  </html>
  ```
  
  
  
+ NPM

  ```sh
  yarn add vue-calendar-card -S
  ```
  
  ```vue
  import 'vue-calendar-card/css/main.css'
  import vueCalendarCard from 'vue-calendar-card'
  Vue.use(vueCalendarCard) / Vue.use(vueCalendarCard.DateTime)
  ```

## 修改主题

用法参考element-ui的使用方法

```js
// 在sass文件中使用 
$--color-primary: #744DFE;
@import 'vue-calendar-card/theme/dateTime/index.scss'
```

### 属性

| 属性           | 说明                       | 可选         | 默认                     | 类型        |
| -------------- | -------------------------- | ------------ | ------------------------ | ----------- |
| type           | 日历的类型                 | 'single'     | 'dateInterval'           | String      |
| v-model/value  | 绑定的值                   | 值为Date对象 | new Date()               | Date/Date[] |
| hasPrev        | 是否显示上个月上一年的按钮 | false        | true                     | Boolean     |
| hasNext        | 是否显示下一年的按钮       | false        | true                     | Boolean     |
| showYear.sync  | 想要显示的年份             | 2021         | new Date().getFullYear() | Number      |
| showMonth.sync | 想要显示的月份             | 1/2/3...     | new Date().getMonth()    | Number      |

### 双月份的使用

使用

```html
<div id="app">
    <vue-calendar-card-range  v-model="temp" />
</div>
```



#### 属性

| 属性          | 说明     | 可选         | 默认 | 类型   |
| ------------- | -------- | ------------ | ---- | ------ |
| v-model/value | 绑定的值 | 值为Date对象 | []   | Date[] |




## License

[MIT](https://opensource.org/licenses/MIT)
