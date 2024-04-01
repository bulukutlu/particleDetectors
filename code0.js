gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDTitleObjects1= [];
gdjs.Start_32MenuCode.GDTitleObjects2= [];
gdjs.Start_32MenuCode.GDSubtitleObjects1= [];
gdjs.Start_32MenuCode.GDSubtitleObjects2= [];
gdjs.Start_32MenuCode.GDStartButtonObjects1= [];
gdjs.Start_32MenuCode.GDStartButtonObjects2= [];
gdjs.Start_32MenuCode.GDcoverObjects1= [];
gdjs.Start_32MenuCode.GDcoverObjects2= [];


gdjs.Start_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Komiku_-_70_-_Ending(chosic.com).mp3", true, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32MenuCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32MenuCode.GDStartButtonObjects1[k] = gdjs.Start_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-game-click-1114.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-game-click-1114.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32MenuCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32MenuCode.GDStartButtonObjects1[k] = gdjs.Start_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStartButtonObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.Start_32MenuCode.GDStartButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32MenuCode.GDStartButtonObjects1[k] = gdjs.Start_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Start_32MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStartButtonObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Start_32MenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Start_32MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDTitleObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "thickness", 10 * Math.abs(Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1)) + 5);
}
}}

}


};

gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Start_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Start_32MenuCode.GDSubtitleObjects1.length = 0;
gdjs.Start_32MenuCode.GDSubtitleObjects2.length = 0;
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32MenuCode.GDcoverObjects1.length = 0;
gdjs.Start_32MenuCode.GDcoverObjects2.length = 0;

gdjs.Start_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
