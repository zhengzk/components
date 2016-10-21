/**
 * Created by zhengzk on 16/8/29.
 */
function pad(num, n) {
  return (Array(n).join(0) + num).slice(-n)
}

var hasOwnProp = Object.prototype.hasOwnProperty;

var utils = {
  /**
   * isObject
   * @param obj
   * @returns {boolean}
   */
  isObject: function (obj) {
    return typeof obj == 'object';
  },
  /**
   * 判断是否是Object
   * @param obj
   * @returns {boolean}
   */
  isPlainObject: function (obj) {
    return !!obj
      && typeof obj === 'object'
      && obj.toString() === '[object Object]'
      && obj.constructor === Object;
  },
  /**
   * 判断是否是空节点
   * @param obj
   * @returns {boolean}
   */
  isEmptyObject: function (obj) {
    var t;
    for (t in obj) {
      return true;
    }
    return false;
  },
  /**
   * 判断arr是否是Array
   * @param arr Array
   * @returns {boolean}
   */
  isArray: function (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  },
  /**
   * isArrayLike
   * @param obj
   * @returns {boolean|*}
   */
  isArrayLike: function (obj) {
    return utils.isArray(obj) || !utils.isFunction(obj) &&
      ( obj.length === 0 || typeof obj.length === 'number' && obj.length > 0 && ( obj.length - 1 ) in obj );
  },
  /**
   * 判断fn是否是Function
   * @param fn Function
   * @returns {boolean}
   */
  isFunction: function (fn) {
    return '[object Function]' === Object.prototype.toString.call(fn);
  },
  /**
   * isWindow
   * @param obj
   * @returns {boolean}
   */
  isWindow: function (obj) {
    return obj != null && obj == obj.window;
  },
  /**
   * isDocument
   * @param obj
   * @returns {boolean}
   */
  isDocument: function (obj) {
    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
  },
  /**
   * 获取元素节点名称
   * @param elem
   * @param name
   * @returns {Function|string|boolean}
   */
  nodeName: function (elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },
  /**
   * 遍利节点
   * @param obj
   * @param fn
   * @param context
   */
  each: function (obj, fn, context) {
    for (var key in obj) {
      if (hasOwnProp.call(obj, key)) {
        //inx,element
        fn.call(context || this, key, obj[key]);
      }
    }
  },
  /**
   * 空function
   */
  noop: function () {
  },
  /**
   *
   * @param first {Object}
   * @param second {Object}
   * @returns {*}
   */
  merge: function (first, second) {
    if (!second) {
      return first;
    }
    for (var key in second) {
      if (hasOwnProp.call(second, key)) {
        first[key] = second[key];
      }
    }
    return first;
  },
  /**
   * 清楚字符串空格
   * @param text
   * @returns {string}
   */
  trim: function (text) {
    var reg = /(^\s*)|(\s*$)/g;
    return text == null ?
      '' :
      ( text + '' ).replace(reg, '');
  },
  /**
   * 72 —> [01,12]
   * @param time
   * @returns {Array}
   */
  long2array: function (time) {
    var rs = [], t;
    var arr = [60, 1];
    if (time >= 3600) {
      arr = [3600, 60, 1];
    }
    arr.forEach(function (p) {
      rs.push(pad(t = (time / p) | 0, 2));
      time -= t * p
    });
    return rs;
  },
  /**
   * 格式化时间 72 —> 00:01:12
   * @param long
   * @returns {string}
   */
  long2time: function (long) {
    var rs = utils.long2array(long);
    return rs.join(':');
  },
  /**
   * 将00:01:22的时间转换成 82
   * @param str
   * @returns {number}
   */
  time2long: function (str) {
    var arr = str.split(':');
    var r = 0;
    var len = arr.length;
    for (var k = len - 1; k >= 0; k--) {
      var t = parseInt(arr[k]);
      if (!isNaN(t)) {
        var w = len - k - 1;
        for (var i = 0; i < w; i++) {
          t *= 60;
        }
        r += t;
      }
    }
    return r;
  }
}

module.exports = utils