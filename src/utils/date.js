// 📢注意月份都是0-11 即一月到十二月
// 周几用getDay 返回1-7 即周一到周日

// 一天的毫秒数
const oneDayTimes = 1000 * 60 * 60 * 24
/**
 * 获取某月有多少天
 * @param {*} year
 * @param {*} month
 * @returns
 */
export const getDays = (year, month) => {
  return new Date(year, ++month, 0).getDate()
}

/**
 * 返回年月日时分秒
 * @param {*} dateObj
 * @returns
 */
export const getDateObj = (dateObj) => {
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth(),
    day: dateObj.getDate(),
    hour: dateObj.getHours(),
    minutes: dateObj.getMinutes(),
    seconds: dateObj.getSeconds()
  }
}

/**
 * 返回某天第一秒的时间戳
 */
export const getDateOfMillisecond = (dateObj) => {
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()).getTime()
}

/**
 * 获取一号是周几(1-7)
 * @param {*} year
 * @param {*} month
 */
export const getDay = (year, month) => {
  return new Date(year, month, 1).getDay() === 0 ? 7 : new Date(year, month, 1).getDay()
}

/**
 * 返回某个月的上个月的一周时间 月是从0~11
 * @param {*} year
 * @param {*} month
 * @returns
 */
export const getPrevWeek = (year, month) => {
  let time = new Date(new Date(year, month, 1).getTime() - oneDayTimes * 7)
  let obj = getDateObj(time)
  let arr = []
  for (let i = 0; i < 7; i++) {
    arr.push({
      year: obj.year,
      month: obj.month,
      day: i + obj.day
    })
  }
  return arr
}

/**
 * 获取下个月的前十五天
 * @param {*} year
 * @param {*} month
 * @returns
 */
export const getNext2Week = (year, month) => {
  if (parseInt(month) === 11) {
    year = year + 1;
    month = 0
  } else {
    month++
  }
  let arr = []
  for (let i = 0; i < 15; i++) {
    arr.push({
      year,
      month,
      day: i + 1
    })
  }
  return arr
}

/**
 * 获取日历的42个内容
 * @param {Number|String} year
 * @param {Number|String} month
 * @param {String} type 'arr2' 二维数组
 * @returns Date[]
 */
export const getRows = (year, month, type = 'arr2') => {
  let rows = []
  let monthRows = []
  let days = getDays(year, month)
  for (let i = 1; i <= days; i++) {
    monthRows.push({
      year,
      month,
      day: i
    })
  }
  // 判断一号是周几
  let monthDay = getDay(year, month)
  let prevWeek = getPrevWeek(year, month)
  let next2Week = getNext2Week(year, month)
  rows = [...prevWeek.slice(8 - monthDay)]
  if (monthDay === 1) {
    rows = []
  }
  rows = [...rows, ...monthRows, ...next2Week.slice(0, 42 - rows.length - monthRows.length)]
  if (type === 'arr2') {
    let arr = []
    for (let j = 0; j < 6; j++) {
      if (j === 5) {
        arr[j] = rows.slice(35)
      } else {
        arr[j] = rows.slice(7 * j, 7 * (j + 1))
      }
    }
    return arr
  } else {
    return rows
  }
}

/**
 * 判断是不是未来
 * @param {Date} dateObj
 * @returns Boolean
 */
export const isFuture = (dateObj) => {
  let now = getDateObj(new Date())
  let obj = getDateObj(dateObj)
  if (obj.year > now.year) {
    return true
  } else if (obj.year === now.year) {
    if (now.month < obj.month) {
      return true
    } else {
      if (now.month === obj.month && now.day < obj.day) {
        return true
      }
    }
  }
  return false
}

/**
 * 判断是不是本月
 * @param {Date} nowDateObj 现在的Date对象
 * @param {Date} dateObj 对比的时间对象
 */
export const isSameMonth = (dateObj, nowDateObj = new Date()) => {
  let now = getDateObj(nowDateObj)
  let obj = getDateObj(dateObj)
  if (now.year === obj.year && now.month === obj.month) return true;
  return false
}

/**
 * 返回处理完的两位补过零的整数的字符串
 * @param {Number} num
 * @returns {String} numString
 */
export const getTwoNumber = (num) => {
  return num < 10 && num > 0 ? `0${num}` : `${num}`
}

/**
 * 返回一个年月日时分秒的东西
 * @param {Date} dateObj
 * @returns yyyy-MM-DD hh:mm:ss
 */
export const getFormatDate = (dateObj) => {
  let obj = getDateObj(dateObj)
  return `${obj.year}-${getTwoNumber(month - 1 + 2)}-${getTwoNumber(obj.date)} ${getTwoNumber(obj.hour)}:${getTwoNumber(obj.minutes)}:${getTwoNumber(obj.seconds)}`
}


/**
 * 获取今天没有时分秒的
 */
export const getTodayDate = (dateObj) => {
  let obj = getDateObj(dateObj)
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * 获取当前多少天的yyyy-MM-DD
 * @param {Number}} num 数字1为明天，负一为昨天
 */
export const getDateByNum = (num = 0) => {
  let timer = new Date().getTime() + num * oneDayTimes;
  let obj = getDateObj(new Date(timer))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * 获取本周第一天的yyyy-MM-DD几周之前的周一，0是本周
 * @param {Number} num
 * @returns
 */
export const getNowWeek = (num = 0) => {
  // 周几
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // 周一
  let dateObj = new Date().getTime() - (today - 1) * oneDayTimes;
  let obj = getDateObj(new Date(dateObj + num * 7 * oneDayTimes))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * 某周的周末
 * @param { Number } num
 * @returns
 */
export const getNowWeekLastDay = (num = 0) => {
  // 周几
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // 本周末时间戳
  let dateObj = new Date().getTime() + (7 - today) * oneDayTimes;
  dateObj = new Date(dateObj + num * 7 * oneDayTimes)
  let obj = getDateObj(new Date(dateObj + num * 7 * oneDayTimes))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * 返回某天的最后一毫秒
 * @param {Date} dateObj
 * @returns
 */
export const getLastSeconds = (dateObj) => {
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()).getTime() + oneDayTimes - 1
}

/**
 * 相对今天的第几周周一date
 * @param {Number} num
 * @return {Date}
 */
export function getMonday(num = 0) {
  // 判断今天是周几
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // 本周周一的时间戳
  let todayDate = new Date().getTime() - (today - 1) * oneDayTimes;
  todayDate = new Date(todayDate + num * 7 * oneDayTimes)
  return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())
}

/**
 * 相对今天的周末
 * @param {Number} num
 * @param {Date}
 */
export function getWeekend(num = 0) {
  // 判断今天是周几
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // 本周周一的时间戳
  let todayDate = new Date().getTime() + (7 - today) * oneDayTimes;
  todayDate = new Date(todayDate + num * 7 * oneDayTimes)
  return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())
}

/**
 * 相对现在的今天本月一号
 * @param num 几个月前
 * @return {Date}
 */
export function getMonthFirstDay(num = 0) {
  // 判断今天是几号
  let today = new Date();
  let year = today.getFullYear()
  let month = today.getMonth();
  if (num >= 0) {
    year = year + Math.floor((num + month) / 12)
    month = Math.abs(month + num) % 12 // 0-11
  } else {
    if (month + num >= 0) {
      year = year - Math.floor(Math.abs(num + month) / 12)
      month = Math.abs(month + num) % 12
    } else {
      year = year - Math.abs(Math.ceil((month + num) / 13)) - 1
      month = Math.abs(month + num) % 12 === 0 ? 0 : 12 - Math.abs(month + num) % 12;
    }
  }
  return new Date(year, month, 1)
}

/**
 * 多少个月前（正数）后（负数）的最后一天
 * @param num
 * @return {Date}
 */
export function getLastDay(num = 0) {
  let today = new Date();
  let year = today.getFullYear()
  let month = today.getMonth();
  if (num >= 0) {
    year = year + Math.floor((num + month) / 12)
    month = Math.abs(month + num) % 12 // 0-11
  } else {
    if (month + num >= 0) {
      year = year - Math.floor(Math.abs(num + month) / 12)
      month = Math.abs(month + num) % 12
    } else {
      year = year - Math.abs(Math.ceil((month + num) / 13)) - 1
      month = Math.abs(month + num) % 12 === 0 ? 0 : 12 - Math.abs(month + num) % 12;
    }

  }
  let days = new Date(year, month + 1, 0).getDate()
  return new Date(year, month, days)
}

/**
 * 判断是不是同一天
 * @param {Date} dateObj1
 * @param {Date} dateObj2
 * @returns Blooean
 */
export const isSameDate = (dateObj1, dateObj2 = new Date()) => {
  let date1 = getDateObj(dateObj1)
  let date2 = getDateObj(dateObj2)
  if (date1.year === date2.year && date1.month === date2.month && date1.day === date2.day) return true;
  return false
}

/**
 * 判断在不在这个日期区间内（包含开始和结束的时间点）
 * @param {*} dateArr
 * @param {*} dateObj
 */
export const inDateInterval = (dateArr, dateObj) => {
  let time1 = dateObj.getTime()
  let startTime = new Date(dateArr[0].getFullYear(), dateArr[0].getMonth(), dateArr[0].getDate()).getTime()
  let endTime = getLastSeconds(dateArr[1])
  return time1 <= endTime && time1 >= startTime
}


/**
 * 返回是不是在此之前(只比较天) 第二个和第一个参数比早 true 不用调换位置
 * @param {Date} dateObj 已有的
 * @param {Date} newObj 和已有比的
 */
export const isDateBefore = (dateObj, newObj) => {
  return getDateOfMillisecond(dateObj) - getDateOfMillisecond(newObj) < 0 ? true : false;
}


