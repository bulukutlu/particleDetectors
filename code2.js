gdjs.CloudChamberCode = {};
gdjs.CloudChamberCode.GDcloudChamberObjects1= [];
gdjs.CloudChamberCode.GDcloudChamberObjects2= [];
gdjs.CloudChamberCode.GDNewShapePainterObjects1= [];
gdjs.CloudChamberCode.GDNewShapePainterObjects2= [];
gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1= [];
gdjs.CloudChamberCode.GDcloudChamber_9595topObjects2= [];
gdjs.CloudChamberCode.GDmyParticleObjects1= [];
gdjs.CloudChamberCode.GDmyParticleObjects2= [];
gdjs.CloudChamberCode.GDNewBitmapTextObjects1= [];
gdjs.CloudChamberCode.GDNewBitmapTextObjects2= [];


gdjs.CloudChamberCode.asyncCallback12710708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("cloudChamber_top"), gdjs.CloudChamberCode.GDcloudChamber_9595topObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("myParticle"), gdjs.CloudChamberCode.GDmyParticleObjects2);

{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects2.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects2[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomFloat(3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "particle");
}{for(var i = 0, len = gdjs.CloudChamberCode.GDcloudChamber_9595topObjects2.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDcloudChamber_9595topObjects2[i].getBehavior("Animation").setAnimationName("normal");
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "projector-button-push-6258-[AudioTrimmer.com].mp3", false, 30, 1);
}}
gdjs.CloudChamberCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1) asyncObjectsList.addObject("cloudChamber_top", obj);
for (const obj of gdjs.CloudChamberCode.GDmyParticleObjects1) asyncObjectsList.addObject("myParticle", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.CloudChamberCode.asyncCallback12710708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CloudChamberCode.asyncCallback12713460 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.CloudChamberCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.CloudChamberCode.asyncCallback12713460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CloudChamberCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("myParticle"), gdjs.CloudChamberCode.GDmyParticleObjects1);
{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "particle");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Komiku_-_04_-_Shopping_List(chosic.com).mp3", 0, true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.CloudChamberCode.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.CloudChamberCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDNewBitmapTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))) + " / " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "particle") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12709068);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cloudChamber_top"), gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1);
gdjs.copyArray(runtimeScene.getObjects("myParticle"), gdjs.CloudChamberCode.GDmyParticleObjects1);
{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects1[i].setAngle(gdjs.randomInRange(0, 180));
}
}{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects1[i].setCenterPositionInScene(gdjs.randomInRange(600, 1300),gdjs.randomInRange(150, 650));
}
}{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.random(8));
}
}{for(var i = 0, len = gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1[i].getBehavior("Animation").setAnimationName("lights");
}
}{for(var i = 0, len = gdjs.CloudChamberCode.GDmyParticleObjects1.length ;i < len;++i) {
    gdjs.CloudChamberCode.GDmyParticleObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.CloudChamberCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12712708);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "taxi-paper-meter-96222-[AudioTrimmer.com].mp3", false, 100, 1);
}
{ //Subevents
gdjs.CloudChamberCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.CloudChamberCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CloudChamberCode.GDcloudChamberObjects1.length = 0;
gdjs.CloudChamberCode.GDcloudChamberObjects2.length = 0;
gdjs.CloudChamberCode.GDNewShapePainterObjects1.length = 0;
gdjs.CloudChamberCode.GDNewShapePainterObjects2.length = 0;
gdjs.CloudChamberCode.GDcloudChamber_9595topObjects1.length = 0;
gdjs.CloudChamberCode.GDcloudChamber_9595topObjects2.length = 0;
gdjs.CloudChamberCode.GDmyParticleObjects1.length = 0;
gdjs.CloudChamberCode.GDmyParticleObjects2.length = 0;
gdjs.CloudChamberCode.GDNewBitmapTextObjects1.length = 0;
gdjs.CloudChamberCode.GDNewBitmapTextObjects2.length = 0;

gdjs.CloudChamberCode.eventsList2(runtimeScene);

return;

}

gdjs['CloudChamberCode'] = gdjs.CloudChamberCode;
