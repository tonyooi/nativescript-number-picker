# nativescript-number-picker
Android Number Picker for NativeScript

**Usage**
```
<numPicker:number-picker value="2" minValue="1" maxValue="3" displayedValues="{{ np.displayedValues }}" />
```

where 
```
var Observables = require("data/observable").Observable;

exports.pageLoaded = function(args) {
    console.log("Main page loaded");
    var page = args.object;
    var layout = page.content;
    page.bindingContext = {
        np : new Observables( {displayedValues : ['one','two','three']} ),
    }
};
```
