// ð¢æ³¨ææä»½é½æ¯0-11 å³ä¸æå°åäºæ
// å¨å ç¨getDay è¿å1-7 å³å¨ä¸å°å¨æ¥

// ä¸å¤©çæ¯«ç§æ°
const oneDayTimes = 1000 * 60 * 60 * 24
/**
 * è·åæææå¤å°å¤©
 * @param {*} year
 * @param {*} month
 * @returns
 */
export const getDays = (year, month) => {
  return new Date(year, ++month, 0).getDate()
}

/**
 * è¿åå¹´ææ¥æ¶åç§
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
 * è¿åæå¤©ç¬¬ä¸ç§çæ¶é´æ³
 */
export const getDateOfMillisecond = (dateObj) => {
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()).getTime()
}

/**
 * è·åä¸å·æ¯å¨å (1-7)
 * @param {*} year
 * @param {*} month
 */
export const getDay = (year, month) => {
  return new Date(year, month, 1).getDay() === 0 ? 7 : new Date(year, month, 1).getDay()
}

/**
 * è¿åæä¸ªæçä¸ä¸ªæçä¸å¨æ¶é´ ææ¯ä»0~11
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
 * è·åä¸ä¸ªæçååäºå¤©
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
 * è·åæ¥åç42ä¸ªåå®¹
 * @param {Number|String} year
 * @param {Number|String} month
 * @param {String} type 'arr2' äºç»´æ°ç»
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
  // å¤æ­ä¸å·æ¯å¨å 
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
 * å¤æ­æ¯ä¸æ¯æªæ¥
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
 * å¤æ­æ¯ä¸æ¯æ¬æ
 * @param {Date} nowDateObj ç°å¨çDateå¯¹è±¡
 * @param {Date} dateObj å¯¹æ¯çæ¶é´å¯¹è±¡
 */
export const isSameMonth = (dateObj, nowDateObj = new Date()) => {
  let now = getDateObj(nowDateObj)
  let obj = getDateObj(dateObj)
  if (now.year === obj.year && now.month === obj.month) return true;
  return false
}

/**
 * è¿åå¤çå®çä¸¤ä½è¡¥è¿é¶çæ´æ°çå­ç¬¦ä¸²
 * @param {Number} num
 * @returns {String} numString
 */
export const getTwoNumber = (num) => {
  return num < 10 && num > 0 ? `0${num}` : `${num}`
}

/**
 * è¿åä¸ä¸ªå¹´ææ¥æ¶åç§çä¸è¥¿
 * @param {Date} dateObj
 * @returns yyyy-MM-DD hh:mm:ss
 */
export const getFormatDate = (dateObj) => {
  let obj = getDateObj(dateObj)
  return `${obj.year}-${getTwoNumber(month - 1 + 2)}-${getTwoNumber(obj.date)} ${getTwoNumber(obj.hour)}:${getTwoNumber(obj.minutes)}:${getTwoNumber(obj.seconds)}`
}


/**
 * è·åä»å¤©æ²¡ææ¶åç§ç
 */
export const getTodayDate = (dateObj) => {
  let obj = getDateObj(dateObj)
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * è·åå½åå¤å°å¤©çyyyy-MM-DD
 * @param {Number}} num æ°å­1ä¸ºæå¤©ï¼è´ä¸ä¸ºæ¨å¤©
 */
export const getDateByNum = (num = 0) => {
  let timer = new Date().getTime() + num * oneDayTimes;
  let obj = getDateObj(new Date(timer))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * è·åæ¬å¨ç¬¬ä¸å¤©çyyyy-MM-DDå å¨ä¹åçå¨ä¸ï¼0æ¯æ¬å¨
 * @param {Number} num
 * @returns
 */
export const getNowWeek = (num = 0) => {
  // å¨å 
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // å¨ä¸
  let dateObj = new Date().getTime() - (today - 1) * oneDayTimes;
  let obj = getDateObj(new Date(dateObj + num * 7 * oneDayTimes))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * æå¨çå¨æ«
 * @param { Number } num
 * @returns
 */
export const getNowWeekLastDay = (num = 0) => {
  // å¨å 
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // æ¬å¨æ«æ¶é´æ³
  let dateObj = new Date().getTime() + (7 - today) * oneDayTimes;
  dateObj = new Date(dateObj + num * 7 * oneDayTimes)
  let obj = getDateObj(new Date(dateObj + num * 7 * oneDayTimes))
  return `${obj.year}-${getTwoNumber(obj.month - 1 + 2)}-${getTwoNumber(obj.date)}`
}

/**
 * è¿åæå¤©çæåä¸æ¯«ç§
 * @param {Date} dateObj
 * @returns
 */
export const getLastSeconds = (dateObj) => {
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()).getTime() + oneDayTimes - 1
}

/**
 * ç¸å¯¹ä»å¤©çç¬¬å å¨å¨ä¸date
 * @param {Number} num
 * @return {Date}
 */
export function getMonday(num = 0) {
  // å¤æ­ä»å¤©æ¯å¨å 
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // æ¬å¨å¨ä¸çæ¶é´æ³
  let todayDate = new Date().getTime() - (today - 1) * oneDayTimes;
  todayDate = new Date(todayDate + num * 7 * oneDayTimes)
  return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())
}

/**
 * ç¸å¯¹ä»å¤©çå¨æ«
 * @param {Number} num
 * @param {Date}
 */
export function getWeekend(num = 0) {
  // å¤æ­ä»å¤©æ¯å¨å 
  let today = new Date().getDay() === 0 ? 7 : new Date().getDay();
  // æ¬å¨å¨ä¸çæ¶é´æ³
  let todayDate = new Date().getTime() + (7 - today) * oneDayTimes;
  todayDate = new Date(todayDate + num * 7 * oneDayTimes)
  return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate())
}

/**
 * ç¸å¯¹ç°å¨çä»å¤©æ¬æä¸å·
 * @param num å ä¸ªæå
 * @return {Date}
 */
export function getMonthFirstDay(num = 0) {
  // å¤æ­ä»å¤©æ¯å å·
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
 * å¤å°ä¸ªæåï¼æ­£æ°ï¼åï¼è´æ°ï¼çæåä¸å¤©
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
 * å¤æ­æ¯ä¸æ¯åä¸å¤©
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
 * å¤æ­å¨ä¸å¨è¿ä¸ªæ¥æåºé´åï¼åå«å¼å§åç»æçæ¶é´ç¹ï¼
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
 * è¿åæ¯ä¸æ¯å¨æ­¤ä¹å(åªæ¯è¾å¤©) ç¬¬äºä¸ªåç¬¬ä¸ä¸ªåæ°æ¯æ© true ä¸ç¨è°æ¢ä½ç½®
 * @param {Date} dateObj å·²æç
 * @param {Date} newObj åå·²ææ¯ç
 */
export const isDateBefore = (dateObj, newObj) => {
  return getDateOfMillisecond(dateObj) - getDateOfMillisecond(newObj) < 0 ? true : false;
}


