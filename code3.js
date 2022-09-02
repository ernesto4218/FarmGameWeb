gdjs.MarketCode = {};
gdjs.MarketCode.GDBackgroundObjects1= [];
gdjs.MarketCode.GDBackgroundObjects2= [];
gdjs.MarketCode.GDBackgroundObjects3= [];
gdjs.MarketCode.GDBackgroundObjects4= [];
gdjs.MarketCode.GDCarrotsAmountObjects1= [];
gdjs.MarketCode.GDCarrotsAmountObjects2= [];
gdjs.MarketCode.GDCarrotsAmountObjects3= [];
gdjs.MarketCode.GDCarrotsAmountObjects4= [];
gdjs.MarketCode.GDPotatoAmountObjects1= [];
gdjs.MarketCode.GDPotatoAmountObjects2= [];
gdjs.MarketCode.GDPotatoAmountObjects3= [];
gdjs.MarketCode.GDPotatoAmountObjects4= [];
gdjs.MarketCode.GDTomatoAmountObjects1= [];
gdjs.MarketCode.GDTomatoAmountObjects2= [];
gdjs.MarketCode.GDTomatoAmountObjects3= [];
gdjs.MarketCode.GDTomatoAmountObjects4= [];
gdjs.MarketCode.GDStrawberryAmountObjects1= [];
gdjs.MarketCode.GDStrawberryAmountObjects2= [];
gdjs.MarketCode.GDStrawberryAmountObjects3= [];
gdjs.MarketCode.GDStrawberryAmountObjects4= [];
gdjs.MarketCode.GDCornAmountObjects1= [];
gdjs.MarketCode.GDCornAmountObjects2= [];
gdjs.MarketCode.GDCornAmountObjects3= [];
gdjs.MarketCode.GDCornAmountObjects4= [];
gdjs.MarketCode.GDCabbageAmoutnObjects1= [];
gdjs.MarketCode.GDCabbageAmoutnObjects2= [];
gdjs.MarketCode.GDCabbageAmoutnObjects3= [];
gdjs.MarketCode.GDCabbageAmoutnObjects4= [];
gdjs.MarketCode.GDCropsNameTxTObjects1= [];
gdjs.MarketCode.GDCropsNameTxTObjects2= [];
gdjs.MarketCode.GDCropsNameTxTObjects3= [];
gdjs.MarketCode.GDCropsNameTxTObjects4= [];
gdjs.MarketCode.GDCropsValueTxTObjects1= [];
gdjs.MarketCode.GDCropsValueTxTObjects2= [];
gdjs.MarketCode.GDCropsValueTxTObjects3= [];
gdjs.MarketCode.GDCropsValueTxTObjects4= [];
gdjs.MarketCode.GDCoinTxTObjects1= [];
gdjs.MarketCode.GDCoinTxTObjects2= [];
gdjs.MarketCode.GDCoinTxTObjects3= [];
gdjs.MarketCode.GDCoinTxTObjects4= [];
gdjs.MarketCode.GDSellStateObjects1= [];
gdjs.MarketCode.GDSellStateObjects2= [];
gdjs.MarketCode.GDSellStateObjects3= [];
gdjs.MarketCode.GDSellStateObjects4= [];
gdjs.MarketCode.GDMarketCropObjects1= [];
gdjs.MarketCode.GDMarketCropObjects2= [];
gdjs.MarketCode.GDMarketCropObjects3= [];
gdjs.MarketCode.GDMarketCropObjects4= [];
gdjs.MarketCode.GDEnterAmountFrameObjects1= [];
gdjs.MarketCode.GDEnterAmountFrameObjects2= [];
gdjs.MarketCode.GDEnterAmountFrameObjects3= [];
gdjs.MarketCode.GDEnterAmountFrameObjects4= [];
gdjs.MarketCode.GDSellBTNObjects1= [];
gdjs.MarketCode.GDSellBTNObjects2= [];
gdjs.MarketCode.GDSellBTNObjects3= [];
gdjs.MarketCode.GDSellBTNObjects4= [];
gdjs.MarketCode.GDNavBtnObjects1= [];
gdjs.MarketCode.GDNavBtnObjects2= [];
gdjs.MarketCode.GDNavBtnObjects3= [];
gdjs.MarketCode.GDNavBtnObjects4= [];
gdjs.MarketCode.GDAmountSellObjects1= [];
gdjs.MarketCode.GDAmountSellObjects2= [];
gdjs.MarketCode.GDAmountSellObjects3= [];
gdjs.MarketCode.GDAmountSellObjects4= [];
gdjs.MarketCode.GDCoinBarObjects1= [];
gdjs.MarketCode.GDCoinBarObjects2= [];
gdjs.MarketCode.GDCoinBarObjects3= [];
gdjs.MarketCode.GDCoinBarObjects4= [];
gdjs.MarketCode.GDcallbackObjects1= [];
gdjs.MarketCode.GDcallbackObjects2= [];
gdjs.MarketCode.GDcallbackObjects3= [];
gdjs.MarketCode.GDcallbackObjects4= [];
gdjs.MarketCode.GDCloseBTNObjects1= [];
gdjs.MarketCode.GDCloseBTNObjects2= [];
gdjs.MarketCode.GDCloseBTNObjects3= [];
gdjs.MarketCode.GDCloseBTNObjects4= [];

gdjs.MarketCode.conditionTrue_0 = {val:false};
gdjs.MarketCode.condition0IsTrue_0 = {val:false};
gdjs.MarketCode.condition1IsTrue_0 = {val:false};
gdjs.MarketCode.condition2IsTrue_0 = {val:false};
gdjs.MarketCode.condition3IsTrue_0 = {val:false};
gdjs.MarketCode.condition4IsTrue_0 = {val:false};
gdjs.MarketCode.conditionTrue_1 = {val:false};
gdjs.MarketCode.condition0IsTrue_1 = {val:false};
gdjs.MarketCode.condition1IsTrue_1 = {val:false};
gdjs.MarketCode.condition2IsTrue_1 = {val:false};
gdjs.MarketCode.condition3IsTrue_1 = {val:false};
gdjs.MarketCode.condition4IsTrue_1 = {val:false};


gdjs.MarketCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("CarrotsAmount"), gdjs.MarketCode.GDCarrotsAmountObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCarrotsAmountObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCarrotsAmountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Carrot"))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PotatoAmount"), gdjs.MarketCode.GDPotatoAmountObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDPotatoAmountObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDPotatoAmountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Potato"))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TomatoAmount"), gdjs.MarketCode.GDTomatoAmountObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDTomatoAmountObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDTomatoAmountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Tomato"))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CornAmount"), gdjs.MarketCode.GDCornAmountObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCornAmountObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCornAmountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Corn"))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("CabbageAmoutn"), gdjs.MarketCode.GDCabbageAmoutnObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCabbageAmoutnObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCabbageAmoutnObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Cabbage"))));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("StrawberryAmount"), gdjs.MarketCode.GDStrawberryAmountObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDStrawberryAmountObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDStrawberryAmountObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Strawberry"))));
}
}}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins")) >= 1000;
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinTxT"), gdjs.MarketCode.GDCoinTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCoinTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCoinTxTObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins")) / 1000) + "K");
}
}}

}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins")) <= 999;
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CoinTxT"), gdjs.MarketCode.GDCoinTxTObjects1);
{for(var i = 0, len = gdjs.MarketCode.GDCoinTxTObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDCoinTxTObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins"))));
}
}}

}


};gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDNavBtnObjects2Objects = Hashtable.newFrom({"NavBtn": gdjs.MarketCode.GDNavBtnObjects2});
gdjs.MarketCode.asyncCallback12040772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NavBtn"), gdjs.MarketCode.GDNavBtnObjects4);

{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects4.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects4[i].setAnimation(1);
}
}}
gdjs.MarketCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MarketCode.GDNavBtnObjects3) asyncObjectsList.addObject("NavBtn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MarketCode.asyncCallback12040772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MarketCode.asyncCallback12012844 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NavBtn"), gdjs.MarketCode.GDNavBtnObjects3);

{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects3[i].setAnimation(0);
}
}}
gdjs.MarketCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MarketCode.GDNavBtnObjects2) asyncObjectsList.addObject("NavBtn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MarketCode.asyncCallback12012844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MarketCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MarketCode.GDNavBtnObjects2, gdjs.MarketCode.GDNavBtnObjects3);


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDNavBtnObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDNavBtnObjects3[i].getVariableString(gdjs.MarketCode.GDNavBtnObjects3[i].getVariables().get("ID")) == "Next" ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDNavBtnObjects3[k] = gdjs.MarketCode.GDNavBtnObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDNavBtnObjects3.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11985596);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);
/* Reuse gdjs.MarketCode.GDNavBtnObjects3 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\Sounds\\Click_Sound.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.MarketCode.GDMarketCropObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDMarketCropObjects3[i].setAnimation(gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects3[i].setAnimationName("NextClick");
}
}
{ //Subevents
gdjs.MarketCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MarketCode.GDNavBtnObjects2 */

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDNavBtnObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDNavBtnObjects2[i].getVariableString(gdjs.MarketCode.GDNavBtnObjects2[i].getVariables().get("ID")) == "Back" ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDNavBtnObjects2[k] = gdjs.MarketCode.GDNavBtnObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDNavBtnObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12042132);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);
/* Reuse gdjs.MarketCode.GDNavBtnObjects2 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\Sounds\\Click_Sound.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.MarketCode.GDMarketCropObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDMarketCropObjects2[i].setAnimation(gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() - (1));
}
}{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects2[i].setAnimationName("BackClick");
}
}
{ //Subevents
gdjs.MarketCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MarketCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects3);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects3[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * 1));
}
}}

}


};gdjs.MarketCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() == 0 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects3[k] = gdjs.MarketCode.GDMarketCropObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects3.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MarketCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() == 1 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects3[k] = gdjs.MarketCode.GDMarketCropObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects3.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects3);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects3[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * 10));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() == 2 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects3[k] = gdjs.MarketCode.GDMarketCropObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects3.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects3);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects3[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * 13));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() == 3 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects3[k] = gdjs.MarketCode.GDMarketCropObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects3.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects3);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects3[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * 20));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects3);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects3.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects3[i].getAnimation() == 4 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects3[k] = gdjs.MarketCode.GDMarketCropObjects3[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects3.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects3);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects3[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * 30));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 5 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
gdjs.copyArray(runtimeScene.getObjects("CropsValueTxT"), gdjs.MarketCode.GDCropsValueTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsValueTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsValueTxTObjects2[i].setString("Value : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects2.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects2[0].getString())) * 40));
}
}}

}


};gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDSellBTNObjects2Objects = Hashtable.newFrom({"SellBTN": gdjs.MarketCode.GDSellBTNObjects2});
gdjs.MarketCode.asyncCallback12046516 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("SellBTN"), gdjs.MarketCode.GDSellBTNObjects3);

{for(var i = 0, len = gdjs.MarketCode.GDSellBTNObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDSellBTNObjects3[i].setAnimation(0);
}
}}
gdjs.MarketCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MarketCode.GDSellBTNObjects2) asyncObjectsList.addObject("SellBTN", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MarketCode.asyncCallback12046516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MarketCode.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Carrot")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount"));
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Carrot")) > 0;
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects3);
{runtimeScene.getVariables().get("SellCrops").setString("Carrot");
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects3[i].setString("Verifying transaction");
}
}}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Carrot")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount"));
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}{runtimeScene.getVariables().get("FetchedDataTransactionState").setString("");
}{runtimeScene.getVariables().get("FetchedCropValueState").setString("");
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects2[i].setString("Not enough carrots");
}
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setString("0");
}
}}

}


};gdjs.MarketCode.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Potato")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount"));
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Potato")) >= 1;
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount")) >= 1;
}}
}
if (gdjs.MarketCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects3);
{runtimeScene.getVariables().get("SellCrops").setString("Potato");
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects3[i].setString("Verifying transaction");
}
}}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Potato")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount"));
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}{runtimeScene.getVariables().get("FetchedDataTransactionState").setString("");
}{runtimeScene.getVariables().get("FetchedCropValueState").setString("");
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setString("0");
}
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects2[i].setString("Not enough carrots");
}
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setDisabled(false);
}
}}

}


};gdjs.MarketCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SellCrops")) == "Carrot";
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects3);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects3);
{runtimeScene.getVariables().get("CarrotSold").setNumber(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedCropValue").getChild("Carrot")));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Crops/Carrot", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Carrot")) - gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects3.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects3[0].getString()))), runtimeScene.getVariables().get("UpdateCarrotState"));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Variables/Coins", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CarrotSold"))), runtimeScene.getVariables().get("UpdateCoinState"));
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects3.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects3[i].setString("Transaction verified");
}
}}

}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SellCrops")) == "Potato";
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects2);
{runtimeScene.getVariables().get("PotatoSold").setNumber(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects2.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects2[0].getString())) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedCropValue").getChild("Potato")));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Crops/Potato", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Crops").getChild("Potato")) - gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects2.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects2[0].getString()))), runtimeScene.getVariables().get("UpdateCarrotState"));
}{gdjs.evtTools.firebaseTools.database.updateField("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Variables/Coins", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedData").getChild("Variables").getChild("Coins")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PotatoSold"))), runtimeScene.getVariables().get("UpdateCoinState"));
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects2[i].setString("Transaction verified");
}
}}

}


};gdjs.MarketCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SellBTN"), gdjs.MarketCode.GDSellBTNObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
gdjs.MarketCode.condition3IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDSellBTNObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}if ( gdjs.MarketCode.condition2IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition3IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12045380);
}
}}
}
}
if (gdjs.MarketCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
/* Reuse gdjs.MarketCode.GDSellBTNObjects2 */
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects2);
{gdjs.evtTools.firebaseTools.database.getVariable("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("FetchedData"), runtimeScene.getVariables().get("FetchedDataTransactionState"));
}{gdjs.evtTools.firebaseTools.database.getVariable("CropsValue", runtimeScene.getVariables().get("FetchedCropValue"), runtimeScene.getVariables().get("FetchedCropValueState"));
}{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\Sounds\\Click_Sound.mp3", false, 100, 1);
}{runtimeScene.getVariables().get("SellAmount").setNumber(gdjs.evtTools.common.toNumber((( gdjs.MarketCode.GDAmountSellObjects2.length === 0 ) ? "" :gdjs.MarketCode.GDAmountSellObjects2[0].getString())));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Selling"), true);
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects2[i].setString("Please wait");
}
}{for(var i = 0, len = gdjs.MarketCode.GDSellBTNObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellBTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MarketCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SellAmount")) < 1;
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects2[i].setString("Enter valid amount");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects2[i].setDisabled(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
gdjs.MarketCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 0 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedDataTransactionState")) == "ok";
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedCropValueState")) == "ok";
}if ( gdjs.MarketCode.condition2IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition3IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12049100);
}
}}
}
}
if (gdjs.MarketCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.MarketCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
gdjs.MarketCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 1 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedDataTransactionState")) == "ok";
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedCropValueState")) == "ok";
}if ( gdjs.MarketCode.condition2IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition3IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12053492);
}
}}
}
}
if (gdjs.MarketCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.MarketCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedDataTransactionState")) == "ok";
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedCropValueState")) == "ok";
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition2IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12058220);
}
}}
}
if (gdjs.MarketCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().get("CropsValue").setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("FetchedCropValue"))));
}{runtimeScene.getVariables().get("FetchedDataTransactionState").setString("");
}{runtimeScene.getVariables().get("FetchedCropValueState").setString("");
}
{ //Subevents
gdjs.MarketCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateCarrotState")) == "ok";
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("UpdateCoinState")) == "ok";
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition2IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12064228);
}
}}
}
if (gdjs.MarketCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects1);
gdjs.copyArray(runtimeScene.getObjects("SellState"), gdjs.MarketCode.GDSellStateObjects1);
{gdjs.evtTools.firebaseTools.database.getVariable("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("FetchedData"), runtimeScene.getVariables().get("FetchedDataState"));
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects1[i].setString("0");
}
}{for(var i = 0, len = gdjs.MarketCode.GDSellStateObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDSellStateObjects1[i].setString("Transaction Complete");
}
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}{runtimeScene.getVariables().get("UpdateCarrotState").setString("");
}{runtimeScene.getVariables().get("UpdateMoneyState").setString("");
}{runtimeScene.getVariables().get("SellCrops").setString("");
}{runtimeScene.getVariables().get("CarrotSold").setString("");
}{runtimeScene.getVariables().get("PotatoSold").setString("");
}}

}


};gdjs.MarketCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NavBtn"), gdjs.MarketCode.GDNavBtnObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDNavBtnObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDNavBtnObjects2[i].getVariableString(gdjs.MarketCode.GDNavBtnObjects2[i].getVariables().get("ID")) == "Back" ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDNavBtnObjects2[k] = gdjs.MarketCode.GDNavBtnObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDNavBtnObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11987788);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarketCode.GDNavBtnObjects2 */
{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NavBtn"), gdjs.MarketCode.GDNavBtnObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDNavBtnObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDNavBtnObjects2[i].getVariableString(gdjs.MarketCode.GDNavBtnObjects2[i].getVariables().get("ID")) == "Next" ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDNavBtnObjects2[k] = gdjs.MarketCode.GDNavBtnObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDNavBtnObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12031164);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MarketCode.GDNavBtnObjects2 */
{for(var i = 0, len = gdjs.MarketCode.GDNavBtnObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDNavBtnObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 150);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NavBtn"), gdjs.MarketCode.GDNavBtnObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
gdjs.MarketCode.condition3IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDNavBtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}if ( gdjs.MarketCode.condition2IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition3IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11983356);
}
}}
}
}
if (gdjs.MarketCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.MarketCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 0 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12008964);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Carrot");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 1 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12017268);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Potato");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 2 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12032540);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Tomato");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 3 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12038788);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Corn");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 4 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12008332);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Cabbage");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MarketCrop"), gdjs.MarketCode.GDMarketCropObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDMarketCropObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDMarketCropObjects2[i].getAnimation() == 5 ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDMarketCropObjects2[k] = gdjs.MarketCode.GDMarketCropObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDMarketCropObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12019628);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CropsNameTxT"), gdjs.MarketCode.GDCropsNameTxTObjects2);
{for(var i = 0, len = gdjs.MarketCode.GDCropsNameTxTObjects2.length ;i < len;++i) {
    gdjs.MarketCode.GDCropsNameTxTObjects2[i].setString("Strawberry");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDAmountSellObjects2.length;i<l;++i) {
    if ( gdjs.MarketCode.GDAmountSellObjects2[i].isFocused() ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDAmountSellObjects2[k] = gdjs.MarketCode.GDAmountSellObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDAmountSellObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition2IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12020940);
}
}}
}
if (gdjs.MarketCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("SellModeKeyboard"), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects2);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MarketCode.GDAmountSellObjects2.length;i<l;++i) {
    if ( !(gdjs.MarketCode.GDAmountSellObjects2[i].isFocused()) ) {
        gdjs.MarketCode.condition0IsTrue_0.val = true;
        gdjs.MarketCode.GDAmountSellObjects2[k] = gdjs.MarketCode.GDAmountSellObjects2[i];
        ++k;
    }
}
gdjs.MarketCode.GDAmountSellObjects2.length = k;}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition1IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12023036);
}
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("SellModeKeyboard"), false);
}}

}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("SellModeKeyboard"), false);
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}}
if (gdjs.MarketCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1080, 1920);
}{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}}

}


{


gdjs.MarketCode.eventsList5(runtimeScene);
}


{


gdjs.MarketCode.eventsList10(runtimeScene);
}


};gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDCloseBTNObjects1Objects = Hashtable.newFrom({"CloseBTN": gdjs.MarketCode.GDCloseBTNObjects1});
gdjs.MarketCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseBTN"), gdjs.MarketCode.GDCloseBTNObjects1);

gdjs.MarketCode.condition0IsTrue_0.val = false;
gdjs.MarketCode.condition1IsTrue_0.val = false;
gdjs.MarketCode.condition2IsTrue_0.val = false;
gdjs.MarketCode.condition3IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MarketCode.mapOfGDgdjs_46MarketCode_46GDCloseBTNObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MarketCode.condition0IsTrue_0.val ) {
{
gdjs.MarketCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("Selling"), false);
}if ( gdjs.MarketCode.condition1IsTrue_0.val ) {
{
gdjs.MarketCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MarketCode.condition2IsTrue_0.val ) {
{
{gdjs.MarketCode.conditionTrue_1 = gdjs.MarketCode.condition3IsTrue_0;
gdjs.MarketCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12067740);
}
}}
}
}
if (gdjs.MarketCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.MarketCode.eventsList13 = function(runtimeScene) {

{



}


{


{
}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects1);
{gdjs.evtTools.firebaseTools.database.getVariable("Users/" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getVariables().get("FetchedData"), runtimeScene.getVariables().get("FetchedDataState"));
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects1[i].setString("0");
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "..\\Sounds\\Click_Sound.mp3");
}}

}


{



}


{


gdjs.MarketCode.condition0IsTrue_0.val = false;
{
gdjs.MarketCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("FetchedDataState")) == "ok";
}if (gdjs.MarketCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AmountSell"), gdjs.MarketCode.GDAmountSellObjects1);
{runtimeScene.getVariables().get("FetchedDataState").setString("");
}{for(var i = 0, len = gdjs.MarketCode.GDAmountSellObjects1.length ;i < len;++i) {
    gdjs.MarketCode.GDAmountSellObjects1[i].setString("0");
}
}
{ //Subevents
gdjs.MarketCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MarketCode.eventsList11(runtimeScene);
}


{


gdjs.MarketCode.eventsList12(runtimeScene);
}


};

gdjs.MarketCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MarketCode.GDBackgroundObjects1.length = 0;
gdjs.MarketCode.GDBackgroundObjects2.length = 0;
gdjs.MarketCode.GDBackgroundObjects3.length = 0;
gdjs.MarketCode.GDBackgroundObjects4.length = 0;
gdjs.MarketCode.GDCarrotsAmountObjects1.length = 0;
gdjs.MarketCode.GDCarrotsAmountObjects2.length = 0;
gdjs.MarketCode.GDCarrotsAmountObjects3.length = 0;
gdjs.MarketCode.GDCarrotsAmountObjects4.length = 0;
gdjs.MarketCode.GDPotatoAmountObjects1.length = 0;
gdjs.MarketCode.GDPotatoAmountObjects2.length = 0;
gdjs.MarketCode.GDPotatoAmountObjects3.length = 0;
gdjs.MarketCode.GDPotatoAmountObjects4.length = 0;
gdjs.MarketCode.GDTomatoAmountObjects1.length = 0;
gdjs.MarketCode.GDTomatoAmountObjects2.length = 0;
gdjs.MarketCode.GDTomatoAmountObjects3.length = 0;
gdjs.MarketCode.GDTomatoAmountObjects4.length = 0;
gdjs.MarketCode.GDStrawberryAmountObjects1.length = 0;
gdjs.MarketCode.GDStrawberryAmountObjects2.length = 0;
gdjs.MarketCode.GDStrawberryAmountObjects3.length = 0;
gdjs.MarketCode.GDStrawberryAmountObjects4.length = 0;
gdjs.MarketCode.GDCornAmountObjects1.length = 0;
gdjs.MarketCode.GDCornAmountObjects2.length = 0;
gdjs.MarketCode.GDCornAmountObjects3.length = 0;
gdjs.MarketCode.GDCornAmountObjects4.length = 0;
gdjs.MarketCode.GDCabbageAmoutnObjects1.length = 0;
gdjs.MarketCode.GDCabbageAmoutnObjects2.length = 0;
gdjs.MarketCode.GDCabbageAmoutnObjects3.length = 0;
gdjs.MarketCode.GDCabbageAmoutnObjects4.length = 0;
gdjs.MarketCode.GDCropsNameTxTObjects1.length = 0;
gdjs.MarketCode.GDCropsNameTxTObjects2.length = 0;
gdjs.MarketCode.GDCropsNameTxTObjects3.length = 0;
gdjs.MarketCode.GDCropsNameTxTObjects4.length = 0;
gdjs.MarketCode.GDCropsValueTxTObjects1.length = 0;
gdjs.MarketCode.GDCropsValueTxTObjects2.length = 0;
gdjs.MarketCode.GDCropsValueTxTObjects3.length = 0;
gdjs.MarketCode.GDCropsValueTxTObjects4.length = 0;
gdjs.MarketCode.GDCoinTxTObjects1.length = 0;
gdjs.MarketCode.GDCoinTxTObjects2.length = 0;
gdjs.MarketCode.GDCoinTxTObjects3.length = 0;
gdjs.MarketCode.GDCoinTxTObjects4.length = 0;
gdjs.MarketCode.GDSellStateObjects1.length = 0;
gdjs.MarketCode.GDSellStateObjects2.length = 0;
gdjs.MarketCode.GDSellStateObjects3.length = 0;
gdjs.MarketCode.GDSellStateObjects4.length = 0;
gdjs.MarketCode.GDMarketCropObjects1.length = 0;
gdjs.MarketCode.GDMarketCropObjects2.length = 0;
gdjs.MarketCode.GDMarketCropObjects3.length = 0;
gdjs.MarketCode.GDMarketCropObjects4.length = 0;
gdjs.MarketCode.GDEnterAmountFrameObjects1.length = 0;
gdjs.MarketCode.GDEnterAmountFrameObjects2.length = 0;
gdjs.MarketCode.GDEnterAmountFrameObjects3.length = 0;
gdjs.MarketCode.GDEnterAmountFrameObjects4.length = 0;
gdjs.MarketCode.GDSellBTNObjects1.length = 0;
gdjs.MarketCode.GDSellBTNObjects2.length = 0;
gdjs.MarketCode.GDSellBTNObjects3.length = 0;
gdjs.MarketCode.GDSellBTNObjects4.length = 0;
gdjs.MarketCode.GDNavBtnObjects1.length = 0;
gdjs.MarketCode.GDNavBtnObjects2.length = 0;
gdjs.MarketCode.GDNavBtnObjects3.length = 0;
gdjs.MarketCode.GDNavBtnObjects4.length = 0;
gdjs.MarketCode.GDAmountSellObjects1.length = 0;
gdjs.MarketCode.GDAmountSellObjects2.length = 0;
gdjs.MarketCode.GDAmountSellObjects3.length = 0;
gdjs.MarketCode.GDAmountSellObjects4.length = 0;
gdjs.MarketCode.GDCoinBarObjects1.length = 0;
gdjs.MarketCode.GDCoinBarObjects2.length = 0;
gdjs.MarketCode.GDCoinBarObjects3.length = 0;
gdjs.MarketCode.GDCoinBarObjects4.length = 0;
gdjs.MarketCode.GDcallbackObjects1.length = 0;
gdjs.MarketCode.GDcallbackObjects2.length = 0;
gdjs.MarketCode.GDcallbackObjects3.length = 0;
gdjs.MarketCode.GDcallbackObjects4.length = 0;
gdjs.MarketCode.GDCloseBTNObjects1.length = 0;
gdjs.MarketCode.GDCloseBTNObjects2.length = 0;
gdjs.MarketCode.GDCloseBTNObjects3.length = 0;
gdjs.MarketCode.GDCloseBTNObjects4.length = 0;

gdjs.MarketCode.eventsList13(runtimeScene);
return;

}

gdjs['MarketCode'] = gdjs.MarketCode;
