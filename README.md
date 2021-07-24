# vue-calendar-card



## Use

+ CDN
  ```js
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dist/css/main.css">
     
   <div id="app">
      <vue-calendar-card type="single" v-model="temp"></vue-calendar-card>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-calendar-card@1.x/index.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: function () {
          return {
            visible: false,
            temp: new Date(2021,1,1)
          }
        }
      })
    </script>
  ```
  
+ NPM

  ```sh
  yarn add vue-calendar-card -S
  ```


  ```js
  import 'vue-calendar-card/theme/dateTime/index.scss'
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

| 属性          | 说明                       | 可选         | 默认           | 类型        |
| ------------- | -------------------------- | ------------ | -------------- | ----------- |
| type          | 日历的类型                 | 'single'     | 'dateInterval' | String      |
| V-model/value | 绑定的值                   | 值为Date对象 | new Date()     | Date/Date[] |
| hasPrev       | 是否显示上个月上一年的按钮 | false        | true           | Boolean     |
| hasNext       | 是否显示下一年的按钮       | false        | true           | Boolean     |

## License

[MIT](https://opensource.org/licenses/MIT)
