sap.ui.jsview("demo.view.Main",{
// As per UI5 SDK documentation, there 2 are standard methods, we need to add JS view.
//1. This will retrun name of the controller, where we writeen the processing logic of view.  

getControllerName: function(){
return "";
},
//2. To create screen controles, button, input, check box etc.
createContent: function(){
    var oBtn = new sap.m.Button({
        id:"idBtn", 
        text:"Hello"
    });

    return oBtn;
}
});