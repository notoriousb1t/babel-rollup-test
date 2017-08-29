(function (React,ReactDOM) {
'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var SelectInput = function (_React$Component) {
    inherits(SelectInput, _React$Component);

    function SelectInput(props) {
        classCallCheck(this, SelectInput);

        var _this = possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));

        _this.updateValue = function (event) {
            return _this.props.onChange(event);
        };

        var _this$props = _this.props,
            options = _this$props.options,
            label = _this$props.label;


        _this.state = {
            options: options,
            label: label
        };
        return _this;
    }

    createClass(SelectInput, [{
        key: 'render',
        value: function render$$1() {
            return React.createElement('input', { onChange: this.updateValue });
        }
    }]);
    return SelectInput;
}(React.Component);

var MainLayout = function (_React$Component) {
    inherits(MainLayout, _React$Component);

    function MainLayout() {
        classCallCheck(this, MainLayout);
        return possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).apply(this, arguments));
    }

    createClass(MainLayout, [{
        key: 'render',
        value: function render$$1() {
            return React.createElement(
                'div',
                null,
                React.createElement(SelectInput, null)
            );
        }
    }]);
    return MainLayout;
}(React.Component);

ReactDOM.render(React.createElement(MainLayout, null), document.getElementById('app'));

}(React,ReactDOM));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9zZWxlY3QtaW5wdXQuanN4IiwiLi4vc3JjL2xheW91dHMvbWFpbi1sYXlvdXQuanN4IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgXG4gICAgICAgIGNvbnN0IHsgb3B0aW9ucywgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgIH07XG4gICAgfVxuICBcbiAgICB1cGRhdGVWYWx1ZSA9IGV2ZW50ID0+IHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxpbnB1dCBvbkNoYW5nZT17dGhpcy51cGRhdGVWYWx1ZX0gLz5cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlbGVjdC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJbnB1dCAvPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tICcuL2xheW91dHMvbWFpbi1sYXlvdXQnO1xuXG5SZWFjdERPTS5yZW5kZXIoPE1haW5MYXlvdXQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXSwibmFtZXMiOlsiU2VsZWN0SW5wdXQiLCJwcm9wcyIsInVwZGF0ZVZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsIm9wdGlvbnMiLCJsYWJlbCIsInN0YXRlIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlJlYWN0IiwiTWFpbkxheW91dCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFdBQWI7Ozt5QkFDZ0JDLEtBQVosRUFBbUI7Ozs2SEFDVEEsS0FEUzs7Y0FXbkJDLFdBWG1CLEdBV0w7bUJBQVMsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CQyxLQUFwQixDQUFUO1NBWEs7OzBCQUdZLE1BQUtILEtBSGpCO1lBR1BJLE9BSE8sZUFHUEEsT0FITztZQUdFQyxLQUhGLGVBR0VBLEtBSEY7OztjQUtWQyxLQUFMLEdBQWE7NEJBQUE7O1NBQWI7Ozs7OztvQ0FRSzttQkFDRUMsK0JBQU8sVUFBVSxLQUFLTixXQUF0QixHQUFQOzs7O0VBZnlCTyxlQUFqQzs7SUNDYUMsVUFBYjs7Ozs7Ozs7OztvQ0FFYTttQkFFREY7OztvQ0FDSyxXQUFEO2FBRlI7Ozs7RUFId0JDLGVBQWhDOztBQ0NBRSxlQUFBLENBQWdCSCxvQkFBQyxVQUFELE9BQWhCLEVBQWdDSSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQWhDOzs7OyJ9
