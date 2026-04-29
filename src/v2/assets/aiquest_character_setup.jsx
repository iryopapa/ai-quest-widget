// ============================================================
// aiquest_character_setup.jsx
// AIQuest キャラクター用 アニメーション自動設定スクリプト
// 使い方: AE で対象キャラのコンポを開いた状態で
//   File > Scripts > Run Script File... から実行
// ============================================================

(function aiquestSetup() {

    // ---- アニメーション辞書 ----
    var E = {
        // 全キャラ共通: 上下のふわふわ浮遊
        floatY: [
            "freq = 0.6;",
            "amp  = 5;",
            "[value[0], value[1] + Math.sin(time * freq * Math.PI * 2) * amp]"
        ].join("\n"),

        // 全キャラ共通: 呼吸（スケールの微増減）
        breathe: [
            "freq = 0.8;",
            "amp  = 0.025;",
            "s = 1 + Math.sin(time * freq * Math.PI * 2) * amp;",
            "[value[0] * s, value[1] * s]"
        ].join("\n"),

        // 全キャラ共通: まばたき（目のscaleY 0->100 を3.5秒ごと）
        blink: [
            "blinkEvery    = 3.5;",
            "blinkDuration = 0.12;",
            "t = time % blinkEvery;",
            "if (t < blinkDuration * 0.5) {",
            "  scaleY = linear(t, 0, blinkDuration * 0.5, 100, 0);",
            "} else if (t < blinkDuration) {",
            "  scaleY = linear(t, blinkDuration * 0.5, blinkDuration, 0, 100);",
            "} else {",
            "  scaleY = 100;",
            "}",
            "[value[0], scaleY]"
        ].join("\n"),

        // たまご: 左右にころんと揺れる
        eggRock: [
            "amp  = 5;",
            "freq = 0.4;",
            "Math.sin(time * freq * Math.PI * 2) * amp"
        ].join("\n"),

        // ひよこ: 小さくぴょこぴょこ跳ねる
        chickHop: [
            "freq  = 0.9;",
            "jumpH = 8;",
            "t = (time * freq) % 1;",
            "bounce = t < 0.5 ? -Math.sin(t * Math.PI) * jumpH : 0;",
            "[value[0], value[1] + bounce]"
        ].join("\n"),

        // ひよこ: 小さな羽（腕）のぱたぱた
        wingL: [
            "freq = 2.0;",
            "amp  = 12;",
            "Math.sin(time * freq * Math.PI * 2) * amp"
        ].join("\n"),

        wingR: [
            "freq = 2.0;",
            "amp  = -12;",
            "Math.sin(time * freq * Math.PI * 2) * amp"
        ].join("\n"),

        // 子猫・うさぎ: ゆっくり左右に揺れる
        kittenSway: [
            "freq = 0.3;",
            "amp  = 3;",
            "Math.sin(time * freq * Math.PI * 2) * amp"
        ].join("\n"),

        // うさぎ: 耳の片方がぱたぱた
        rabbitEar: [
            "freq = 0.5;",
            "amp  = 8;",
            "Math.sin(time * freq * Math.PI * 2) * amp"
        ].join("\n"),

        // ユニコーン: ふわふわ浮遊（強め）
        unicornFloat: [
            "freq = 0.4;",
            "amp  = 10;",
            "[value[0], value[1] + Math.sin(time * freq * Math.PI * 2) * amp]"
        ].join("\n"),

        // ユニコーン: 角のキラキラ点滅
        sparkleOpacity: [
            "freq = 1.0;",
            "(Math.sin(time * freq * Math.PI * 2) + 1) / 2 * 50 + 50"
        ].join("\n")
    };

    // ---- レイヤー検索ユーティリティ ----
    function findLayer(comp, keywords) {
        for (var i = 1; i <= comp.numLayers; i++) {
            var name = comp.layer(i).name.toLowerCase();
            for (var j = 0; j < keywords.length; j++) {
                if (name.indexOf(keywords[j]) >= 0) return comp.layer(i);
            }
        }
        return null;
    }

    function applyExpr(layer, prop, expr) {
        try {
            layer.transform[prop].expression = expr;
            return true;
        } catch (e) {
            return false;
        }
    }

    app.beginUndoGroup("AIQuest Character Setup");

    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("コンポジションを開いてから実行してください");
        app.endUndoGroup();
        return;
    }

    // ---- キャラ判定（コンポ名 または ユーザー入力） ----
    var n = comp.name.toLowerCase();
    var charType = "";

    if      (n.indexOf("egg")     >= 0) charType = "egg";
    else if (n.indexOf("chick")   >= 0) charType = "chick";
    else if (n.indexOf("kitten")  >= 0) charType = "kitten";
    else if (n.indexOf("rabbit")  >= 0 || n.indexOf("bunny") >= 0) charType = "rabbit";
    else if (n.indexOf("unicorn") >= 0) charType = "unicorn";

    if (charType === "") {
        var input = prompt("キャラタイプ入力 (egg / chick / kitten / rabbit / unicorn):", "chick");
        if (!input) { app.endUndoGroup(); return; }
        charType = input.toLowerCase();
    }

    // ---- レイヤー収集 ----
    var L = {
        main  : findLayer(comp, ["main", "body", "egg", "character"]),
        head  : findLayer(comp, ["head"]),
        wingL : findLayer(comp, ["wing_l", "left_wing", "wingleft", "arm_l", "left_arm"]),
        wingR : findLayer(comp, ["wing_r", "right_wing", "wingright", "arm_r", "right_arm"]),
        eyeL  : findLayer(comp, ["eye_l", "left_eye", "eyeleft"]),
        eyeR  : findLayer(comp, ["eye_r", "right_eye", "eyeright"]),
        earL  : findLayer(comp, ["ear_l", "left_ear", "earleft"]),
        earR  : findLayer(comp, ["ear_r", "right_ear", "earright"]),
        horn  : findLayer(comp, ["horn"]),
        sparkle: findLayer(comp, ["sparkle", "shine"])
    };

    if (!L.main && comp.numLayers > 0) L.main = comp.layer(1);

    var applied = [];

    // ---- 全キャラ共通: 呼吸 ----
    if (L.main) {
        if (applyExpr(L.main, "scale", E.breathe)) applied.push("Breathe");
    }

    // ---- 全キャラ共通: まばたき ----
    if (L.eyeL && applyExpr(L.eyeL, "scale", E.blink)) applied.push("Blink L");
    if (L.eyeR && applyExpr(L.eyeR, "scale", E.blink)) applied.push("Blink R");

    // ---- キャラ別 ----
    switch (charType) {
        case "egg":
            if (L.main && applyExpr(L.main, "rotation", E.eggRock)) applied.push("Egg Rock");
            break;

        case "chick":
            if (L.main && applyExpr(L.main, "position", E.chickHop)) applied.push("Chick Hop");
            if (L.wingL && applyExpr(L.wingL, "rotation", E.wingL)) applied.push("Wing L flap");
            if (L.wingR && applyExpr(L.wingR, "rotation", E.wingR)) applied.push("Wing R flap");
            break;

        case "kitten":
            if (L.main && applyExpr(L.main, "rotation", E.kittenSway)) applied.push("Kitten Sway");
            break;

        case "rabbit":
        case "bunny":
            if (L.main && applyExpr(L.main, "position", E.floatY)) applied.push("Float");
            if (L.earL && applyExpr(L.earL, "rotation", E.rabbitEar)) applied.push("Ear flop");
            break;

        case "unicorn":
            if (L.main && applyExpr(L.main, "position", E.unicornFloat)) applied.push("Unicorn Float");
            if (L.sparkle && applyExpr(L.sparkle, "opacity", E.sparkleOpacity)) applied.push("Sparkle");
            break;

        default:
            alert("不明なキャラタイプ: " + charType);
            app.endUndoGroup();
            return;
    }

    app.endUndoGroup();

    var msg = "[" + charType + "] アニメーション設定完了\n\n適用:\n";
    for (var i = 0; i < applied.length; i++) msg += "  * " + applied[i] + "\n";
    if (applied.length === 0) msg += "  (該当レイヤーが見つかりませんでした)\n";
    msg += "\nスペースキーでプレビューしてください。";
    alert(msg);

})();
