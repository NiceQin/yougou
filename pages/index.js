'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '优购'

    }, _this.data = {
      swiperData: '',
      navData: '',
      floorData: ''
    }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      //  top-bar
      wx.request({
        url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
        method: 'GET',
        success: function success(backData) {
          _this2.swiperData = backData.data.message;
          _this2.$apply();
        }
      });
      // 轮播
      wx.request({
        url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
        success: function success(backData) {
          _this2.navData = backData.data.message;
          _this2.$apply();
        }
      });
      // 楼层
      wx.request({
        url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata',
        success: function success(backData) {
          _this2.floorData = backData.data.message;
          _this2.$apply();
          console.log(_this2.floorData);
        }

      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN3aXBlckRhdGEiLCJuYXZEYXRhIiwiZmxvb3JEYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsImJhY2tEYXRhIiwibWVzc2FnZSIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7O0FBRGpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGtCQUFXLEVBRE47QUFFTEMsZUFBUSxFQUZIO0FBR0xDLGlCQUFVO0FBSEwsSyxRQU1QQyxVLEdBQWEsRSxRQUViQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7NkJBRUY7QUFBQTs7QUFDVDtBQUNFQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSyw0REFESTtBQUVUQyxnQkFBUSxLQUZDO0FBR1RDLGlCQUFTLDJCQUFVO0FBQ2pCLGlCQUFLWixVQUFMLEdBQWtCYSxTQUFTZCxJQUFULENBQWNlLE9BQWhDO0FBQ0EsaUJBQUtDLE1BQUw7QUFDRDtBQU5RLE9BQVg7QUFRRjtBQUNFUCxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSywwREFESTtBQUVURSxpQkFBUyxpQkFBQ0MsUUFBRCxFQUFZO0FBQ25CLGlCQUFLWixPQUFMLEdBQWVZLFNBQVNkLElBQVQsQ0FBY2UsT0FBN0I7QUFDQSxpQkFBS0MsTUFBTDtBQUVEO0FBTlEsT0FBWDtBQVFGO0FBQ0VQLFNBQUdDLE9BQUgsQ0FBVztBQUNUQyxhQUFLLDJEQURJO0FBRVRFLGlCQUFTLDJCQUFVO0FBQ2pCLGlCQUFLVixTQUFMLEdBQWlCVyxTQUFTZCxJQUFULENBQWNlLE9BQS9CO0FBQ0EsaUJBQUtDLE1BQUw7QUFDQUMsa0JBQVFDLEdBQVIsQ0FBWSxPQUFLZixTQUFqQjtBQUVEOztBQVBRLE9BQVg7QUFVRDs7OzZCQUdRLENBQUU7Ozs7RUF2RHdCZ0IsZUFBS0MsSTs7a0JBQXJCdkIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S8mOi0rScsXG4gICAgXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHN3aXBlckRhdGE6JycsXG4gICAgbmF2RGF0YTonJyxcbiAgICBmbG9vckRhdGE6JydcbiAgfVxuXG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIG1ldGhvZHMgPSB7fVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgd2F0Y2ggPSB7fVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBvbkxvYWQoKSB7XG4gIC8vICB0b3AtYmFyXG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL3d3dy56aGVuZ3poaWNoZW5nLmNuL2FwaS9wdWJsaWMvdjEvaG9tZS9zd2lwZXJkYXRhJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBiYWNrRGF0YT0+e1xuICAgICAgICB0aGlzLnN3aXBlckRhdGEgPSBiYWNrRGF0YS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAvLyDova7mkq1cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnpoZW5nemhpY2hlbmcuY24vYXBpL3B1YmxpYy92MS9ob21lL2NhdGl0ZW1zJyxcbiAgICAgIHN1Y2Nlc3M6IChiYWNrRGF0YSk9PntcbiAgICAgICAgdGhpcy5uYXZEYXRhID0gYmFja0RhdGEuZGF0YS5tZXNzYWdlO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgLy8g5qW85bGCXG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwczovL3d3dy56aGVuZ3poaWNoZW5nLmNuL2FwaS9wdWJsaWMvdjEvaG9tZS9mbG9vcmRhdGEnLFxuICAgICAgc3VjY2VzczogYmFja0RhdGE9PntcbiAgICAgICAgdGhpcy5mbG9vckRhdGEgPSBiYWNrRGF0YS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxvb3JEYXRhKTtcbiAgICAgICAgXG4gICAgICB9LFxuXG4gICAgfSk7XG4gIH1cbiBcblxuICBvblNob3coKSB7fVxufVxuIl19