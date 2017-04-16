/*******************************************************
** NativeScript Number Picker ui/plugin
** Author : Tony Ooi
** File : number-picker.android.js
*******************************************************/

var common = require("./number-picker-common");

function onMinValuePropertyChanged(data){
    var picker = data.object;
    if ( !picker.android ) {
        return false;
    }
    picker.android.setMinValue(data.newValue); // Android API
}
common.NumberPicker.minValueProperty.metadata.onSetNativeValue = onMinValuePropertyChanged;

function onMaxValuePropertyChanged(data){
    var picker = data.object;
    if ( !picker.android ) {
        return false;
    }
    picker.android.setMaxValue(data.newValue); // Android API
}
common.NumberPicker.maxValueProperty.metadata.onSetNativeValue = onMaxValuePropertyChanged;

function onValuePropertyChanged(data) {
    var picker = data.object;
    if (!picker.android) {
        return false;
    }
    picker.android.setValue(data.newValue); // Android API
}
common.NumberPicker.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;

function onDisplayedValuesPropertyChanged(data) {
    var picker = data.object;
    if (!picker.android) {
        return false;
    }
    picker.android.setDisplayedValues(data.newValue); // Android API
}
common.NumberPicker.displayedValuesProperty.metadata.onSetNativeValue = onDisplayedValuesPropertyChanged;

require("utils/module-merge").merge(common, module.exports);

var NumberPicker = (function(_super){

    global.__extends(NumberPicker,_super);
    function NumberPicker(){
        _super.apply(this,arguments);
    }

    NumberPicker.prototype._createUI = function () {
        this._android = new android.widget.NumberPicker(this._context);
        this._android.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        this._android.setWrapSelectorWheel(true);

        var that = new WeakRef(this);
        var changeListener = new android.widget.NumberPicker.OnValueChangeListener({
            onValueChange : function(picker, oldVal, newVal){
                var instance = that.get();
                if(instance) {
                    instance._onPropertyChangedFromNative(NumberPicker.valueProperty,newVal);
                }
            }
        })

        this._android.setOnValueChangedListener(changeListener); // from android API
    };

    Object.defineProperty(NumberPicker.prototype,"android" ,{
        get : function() {
            return this._android;
        }
    });

    return NumberPicker;

})(common.NumberPicker);

exports.NumberPicker = NumberPicker;
