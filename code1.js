gdjs.LoginCode = {};
gdjs.LoginCode.GDEmailInputObjects1= [];
gdjs.LoginCode.GDEmailInputObjects2= [];
gdjs.LoginCode.GDEmailInputObjects3= [];
gdjs.LoginCode.GDPasswordInputObjects1= [];
gdjs.LoginCode.GDPasswordInputObjects2= [];
gdjs.LoginCode.GDPasswordInputObjects3= [];
gdjs.LoginCode.GDCallbackObjects1= [];
gdjs.LoginCode.GDCallbackObjects2= [];
gdjs.LoginCode.GDCallbackObjects3= [];
gdjs.LoginCode.GDBackgroundObjects1= [];
gdjs.LoginCode.GDBackgroundObjects2= [];
gdjs.LoginCode.GDBackgroundObjects3= [];
gdjs.LoginCode.GDFrameObjects1= [];
gdjs.LoginCode.GDFrameObjects2= [];
gdjs.LoginCode.GDFrameObjects3= [];
gdjs.LoginCode.GDCloseBTNObjects1= [];
gdjs.LoginCode.GDCloseBTNObjects2= [];
gdjs.LoginCode.GDCloseBTNObjects3= [];
gdjs.LoginCode.GDGoogleSigninObjects1= [];
gdjs.LoginCode.GDGoogleSigninObjects2= [];
gdjs.LoginCode.GDGoogleSigninObjects3= [];
gdjs.LoginCode.GDFacebookSignInObjects1= [];
gdjs.LoginCode.GDFacebookSignInObjects2= [];
gdjs.LoginCode.GDFacebookSignInObjects3= [];
gdjs.LoginCode.GDSupportBTNObjects1= [];
gdjs.LoginCode.GDSupportBTNObjects2= [];
gdjs.LoginCode.GDSupportBTNObjects3= [];

gdjs.LoginCode.conditionTrue_0 = {val:false};
gdjs.LoginCode.condition0IsTrue_0 = {val:false};
gdjs.LoginCode.condition1IsTrue_0 = {val:false};
gdjs.LoginCode.condition2IsTrue_0 = {val:false};
gdjs.LoginCode.condition3IsTrue_0 = {val:false};
gdjs.LoginCode.conditionTrue_1 = {val:false};
gdjs.LoginCode.condition0IsTrue_1 = {val:false};
gdjs.LoginCode.condition1IsTrue_1 = {val:false};
gdjs.LoginCode.condition2IsTrue_1 = {val:false};
gdjs.LoginCode.condition3IsTrue_1 = {val:false};


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


{
/* Reuse gdjs.LoginCode.GDCloseBTNObjects1 */
/* Reuse gdjs.LoginCode.GDFacebookSignInObjects1 */
/* Reuse gdjs.LoginCode.GDFrameObjects1 */
/* Reuse gdjs.LoginCode.GDGoogleSigninObjects1 */
/* Reuse gdjs.LoginCode.GDSupportBTNObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFrameObjects1[i].getBehavior("Tween").addObjectPositionYTween("up", 428, "easeInOutCubic", 1000, false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDCloseBTNObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCloseBTNObjects1[i].getBehavior("Tween").addObjectPositionYTween("up", 504, "easeInOutCubic", 1000, false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects1[i].getBehavior("Tween").addObjectPositionYTween("up", 672, "easeInOutCubic", 1000, false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDFacebookSignInObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFacebookSignInObjects1[i].getBehavior("Tween").addObjectPositionYTween("up", 832, "easeInOutCubic", 1000, false);
}
}{for(var i = 0, len = gdjs.LoginCode.GDSupportBTNObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDSupportBTNObjects1[i].getBehavior("Tween").addObjectPositionYTween("up", 1120, "easeInOutCubic", 1000, false);
}
}}

}


};gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Callback"), gdjs.LoginCode.GDCallbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("CloseBTN"), gdjs.LoginCode.GDCloseBTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("FacebookSignIn"), gdjs.LoginCode.GDFacebookSignInObjects1);
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.LoginCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoogleSignin"), gdjs.LoginCode.GDGoogleSigninObjects1);
gdjs.copyArray(runtimeScene.getObjects("SupportBTN"), gdjs.LoginCode.GDSupportBTNObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFrameObjects1[i].setY(1920);
}
}{for(var i = 0, len = gdjs.LoginCode.GDCloseBTNObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCloseBTNObjects1[i].setY(1920);
}
}{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects1[i].setY(1920);
}
}{for(var i = 0, len = gdjs.LoginCode.GDFacebookSignInObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFacebookSignInObjects1[i].setY(1920);
}
}{for(var i = 0, len = gdjs.LoginCode.GDSupportBTNObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDSupportBTNObjects1[i].setY(1920);
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setString("0");
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setY(1920);
}
}
{ //Subevents
gdjs.LoginCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDGoogleSigninObjects2Objects = Hashtable.newFrom({"GoogleSignin": gdjs.LoginCode.GDGoogleSigninObjects2});
gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDGoogleSigninObjects2Objects = Hashtable.newFrom({"GoogleSignin": gdjs.LoginCode.GDGoogleSigninObjects2});
gdjs.LoginCode.asyncCallback11973652 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}
gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoginCode.asyncCallback11973652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoogleSignin"), gdjs.LoginCode.GDGoogleSigninObjects2);
{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects2[i].returnVariable(gdjs.LoginCode.GDGoogleSigninObjects2[i].getVariables().get("ScaleX")).setNumber((gdjs.LoginCode.GDGoogleSigninObjects2[i].getScaleX()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects2[i].returnVariable(gdjs.LoginCode.GDGoogleSigninObjects2[i].getVariables().get("ScaleY")).setNumber((gdjs.LoginCode.GDGoogleSigninObjects2[i].getScaleY()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoogleSignin"), gdjs.LoginCode.GDGoogleSigninObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDGoogleSigninObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11967996);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoogleSignin"), gdjs.LoginCode.GDGoogleSigninObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDGoogleSigninObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11968844);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDGoogleSigninObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects2[i].getBehavior("Tween").addObjectScaleTween("pressed", (gdjs.LoginCode.GDGoogleSigninObjects2[i].getScaleX()) - 0.3, (gdjs.LoginCode.GDGoogleSigninObjects2[i].getScaleY()) - 0.3, "bounce", 200, false, true);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\Sounds\\Click_Sound.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoogleSignin"), gdjs.LoginCode.GDGoogleSigninObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDGoogleSigninObjects2.length;i<l;++i) {
    if ( gdjs.LoginCode.GDGoogleSigninObjects2[i].getBehavior("Tween").hasFinished("pressed") ) {
        gdjs.LoginCode.condition0IsTrue_0.val = true;
        gdjs.LoginCode.GDGoogleSigninObjects2[k] = gdjs.LoginCode.GDGoogleSigninObjects2[i];
        ++k;
    }
}
gdjs.LoginCode.GDGoogleSigninObjects2.length = k;}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11969932);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDGoogleSigninObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDGoogleSigninObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDGoogleSigninObjects2[i].getBehavior("Tween").addObjectScaleTween("original", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDGoogleSigninObjects2[i].getVariables().get("ScaleX"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDGoogleSigninObjects2[i].getVariables().get("ScaleY"))), "bounce", 200, false, true);
}
}{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", runtimeScene.getVariables().get("GoogleLoginCallback"));
}}

}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GoogleLoginCallback")) != "0";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11971508);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Callback"), gdjs.LoginCode.GDCallbackObjects2);
{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GoogleLoginCallback")));
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects2[i].setY(1000);
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GoogleLoginCallback")) == "ok";
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11972900);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Callback"), gdjs.LoginCode.GDCallbackObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setString("Sign in successul.");
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.LoginCode.GDCallbackObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCallbackObjects1[i].setY(1000);
}
}
{ //Subevents
gdjs.LoginCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LoginCode.asyncCallback11976284 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}
gdjs.LoginCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoginCode.asyncCallback11976284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoginCode.eventsList5 = function(runtimeScene) {

{


gdjs.LoginCode.eventsList1(runtimeScene);
}


{


gdjs.LoginCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.isAuthentified();
}if (gdjs.LoginCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LoginCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDEmailInputObjects1.length = 0;
gdjs.LoginCode.GDEmailInputObjects2.length = 0;
gdjs.LoginCode.GDEmailInputObjects3.length = 0;
gdjs.LoginCode.GDPasswordInputObjects1.length = 0;
gdjs.LoginCode.GDPasswordInputObjects2.length = 0;
gdjs.LoginCode.GDPasswordInputObjects3.length = 0;
gdjs.LoginCode.GDCallbackObjects1.length = 0;
gdjs.LoginCode.GDCallbackObjects2.length = 0;
gdjs.LoginCode.GDCallbackObjects3.length = 0;
gdjs.LoginCode.GDBackgroundObjects1.length = 0;
gdjs.LoginCode.GDBackgroundObjects2.length = 0;
gdjs.LoginCode.GDBackgroundObjects3.length = 0;
gdjs.LoginCode.GDFrameObjects1.length = 0;
gdjs.LoginCode.GDFrameObjects2.length = 0;
gdjs.LoginCode.GDFrameObjects3.length = 0;
gdjs.LoginCode.GDCloseBTNObjects1.length = 0;
gdjs.LoginCode.GDCloseBTNObjects2.length = 0;
gdjs.LoginCode.GDCloseBTNObjects3.length = 0;
gdjs.LoginCode.GDGoogleSigninObjects1.length = 0;
gdjs.LoginCode.GDGoogleSigninObjects2.length = 0;
gdjs.LoginCode.GDGoogleSigninObjects3.length = 0;
gdjs.LoginCode.GDFacebookSignInObjects1.length = 0;
gdjs.LoginCode.GDFacebookSignInObjects2.length = 0;
gdjs.LoginCode.GDFacebookSignInObjects3.length = 0;
gdjs.LoginCode.GDSupportBTNObjects1.length = 0;
gdjs.LoginCode.GDSupportBTNObjects2.length = 0;
gdjs.LoginCode.GDSupportBTNObjects3.length = 0;

gdjs.LoginCode.eventsList5(runtimeScene);
return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
