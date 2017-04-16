/*******************************************************
** NativeScript Number Picker ui/plugin
** Author : Tony Ooi
** File : number-picker-common.js
*******************************************************/

var view = require("ui/core/view");
var dObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");

var NumberPicker = (function(_super) {
    /*************** Properties definition ******************
    ** valueProperty, value
    ** minValueProperty, minValue
    ** maxValueProperty, maxValue
    ** displayedValueProperty, displayedValue
    ********************************************************/

    global.__extends(NumberPicker, _super);
    function NumberPicker() {
        _super.call(this);
    }

    // minValue property pair
    Object.defineProperty(NumberPicker.prototype, "minValue", {
        get: function () {
            return this._getValue(NumberPicker.minValueProperty);
        },
        set: function (newValue) {
            this._setValue(NumberPicker.minValueProperty, newValue);
        },
        // enumerable: true,
        // configurable: true
    });
    NumberPicker.minValueProperty = new dObservable.Property("minValue", "NumberPicker", new proxy.PropertyMetadata(0, dObservable.PropertyMetadataSettings.AffectsLayout));

    // maxValue property pair
    Object.defineProperty(NumberPicker.prototype, "maxValue", {
        get: function () {
            return this._getValue(NumberPicker.maxValueProperty);
        },
        set: function (newValue) {
            this._setValue(NumberPicker.maxValueProperty, newValue);
        },
        // enumerable: true,
        // configurable: true
    });
    NumberPicker.maxValueProperty = new dObservable.Property("maxValue", "NumberPicker", new proxy.PropertyMetadata(0, dObservable.PropertyMetadataSettings.AffectsLayout));

   // displayedValue property pair
    Object.defineProperty(NumberPicker.prototype, "displayedValues", {
        get: function () {
            return this._getValue(NumberPicker.displayedValuesProperty);
        },
        set: function (newValue) {
            this._setValue(NumberPicker.displayedValuesProperty, newValue);
        },
        // enumerable: true,
        // configurable: true
    });
    NumberPicker.displayedValuesProperty = new dObservable.Property("displayedValues", "NumberPicker", new proxy.PropertyMetadata([], dObservable.PropertyMetadataSettings.AffectsLayout));

    // value property pair
    Object.defineProperty(NumberPicker.prototype, "value", {
        get: function () {
            return this._getValue(NumberPicker.valueProperty);
        },
        set: function (newValue) {
            this._setValue(NumberPicker.valueProperty, newValue);
        },
        // enumerable: true,
        // configurable: true
    });
    NumberPicker.valueProperty = new dObservable.Property("value", "NumberPicker", new proxy.PropertyMetadata(0, dObservable.PropertyMetadataSettings.AffectsLayout));
 
    return NumberPicker;

})(view.View);

exports.NumberPicker = NumberPicker;
