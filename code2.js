gdjs.TestingCode = {};
gdjs.TestingCode.GDCallbackObjects1= [];
gdjs.TestingCode.GDCallbackObjects2= [];
gdjs.TestingCode.GDValueObjects1= [];
gdjs.TestingCode.GDValueObjects2= [];
gdjs.TestingCode.GDCarrotObjects1= [];
gdjs.TestingCode.GDCarrotObjects2= [];
gdjs.TestingCode.GDpointObjects1= [];
gdjs.TestingCode.GDpointObjects2= [];
gdjs.TestingCode.GDpoint2Objects1= [];
gdjs.TestingCode.GDpoint2Objects2= [];
gdjs.TestingCode.GDpoint3Objects1= [];
gdjs.TestingCode.GDpoint3Objects2= [];
gdjs.TestingCode.GDNewParticlesEmitterObjects1= [];
gdjs.TestingCode.GDNewParticlesEmitterObjects2= [];

gdjs.TestingCode.conditionTrue_0 = {val:false};
gdjs.TestingCode.condition0IsTrue_0 = {val:false};
gdjs.TestingCode.condition1IsTrue_0 = {val:false};
gdjs.TestingCode.condition2IsTrue_0 = {val:false};
gdjs.TestingCode.conditionTrue_1 = {val:false};
gdjs.TestingCode.condition0IsTrue_1 = {val:false};
gdjs.TestingCode.condition1IsTrue_1 = {val:false};
gdjs.TestingCode.condition2IsTrue_1 = {val:false};


gdjs.TestingCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{


{
}

}


{



}


{



}


{



}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12017244);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebaseTools.database.getVariable("CropsValue", runtimeScene.getVariables().get("FetchedCropValue"), runtimeScene.getVariables().get("FetchedCropValueState"));
}}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12018188);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Market", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Callback"), gdjs.TestingCode.GDCallbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Value"), gdjs.TestingCode.GDValueObjects1);
{for(var i = 0, len = gdjs.TestingCode.GDValueObjects1.length ;i < len;++i) {
    gdjs.TestingCode.GDValueObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("CropSold")));
}
}{for(var i = 0, len = gdjs.TestingCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.TestingCode.GDCallbackObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedCropValueState")));
}
}{runtimeScene.getVariables().get("CropSold").setNumber(10 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedCropValue").getChild("Carrot")));
}}

}


{


gdjs.TestingCode.condition0IsTrue_0.val = false;
gdjs.TestingCode.condition1IsTrue_0.val = false;
{
gdjs.TestingCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("callback")) == "ok";
}if ( gdjs.TestingCode.condition0IsTrue_0.val ) {
{
{gdjs.TestingCode.conditionTrue_1 = gdjs.TestingCode.condition1IsTrue_0;
gdjs.TestingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12021004);
}
}}
if (gdjs.TestingCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("data").getChild("Crops").getChild("Carrot").sub(10);
}}

}


};

gdjs.TestingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestingCode.GDCallbackObjects1.length = 0;
gdjs.TestingCode.GDCallbackObjects2.length = 0;
gdjs.TestingCode.GDValueObjects1.length = 0;
gdjs.TestingCode.GDValueObjects2.length = 0;
gdjs.TestingCode.GDCarrotObjects1.length = 0;
gdjs.TestingCode.GDCarrotObjects2.length = 0;
gdjs.TestingCode.GDpointObjects1.length = 0;
gdjs.TestingCode.GDpointObjects2.length = 0;
gdjs.TestingCode.GDpoint2Objects1.length = 0;
gdjs.TestingCode.GDpoint2Objects2.length = 0;
gdjs.TestingCode.GDpoint3Objects1.length = 0;
gdjs.TestingCode.GDpoint3Objects2.length = 0;
gdjs.TestingCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.TestingCode.GDNewParticlesEmitterObjects2.length = 0;

gdjs.TestingCode.eventsList0(runtimeScene);
return;

}

gdjs['TestingCode'] = gdjs.TestingCode;
