const rightImg = chrome.extension.getURL("imgs/right.svg");
const leftImg = chrome.extension.getURL("imgs/left.svg");

const nextSkip = new KeyboardEvent( "keydown", { keyCode: 76 })
const backSkip = new KeyboardEvent( "keydown", { keyCode: 74 })

//ボタンをプレイヤーに挿入する
const setButton = () => {
    //10秒進
    $(`<button id="nextSkip-button" class="ytp-button"><img src="${rightImg}" id="skip-button-icon"></button>`)
        .insertAfter("button.ytp-play-button");
    $("#nextSkip-button")
        .on("click", () => {
            
        // シークバーの移動
        document.dispatchEvent(nextSkip);
    });

    //10秒戻る
    $(`<button id="backSkip-button" class="ytp-button"><img src="${leftImg}" id="skip-button-icon"></button>`)
        .insertBefore("button.ytp-play-button");
    $("#backSkip-button")
        .on("click", () => {
            
        // シークバーの移動
        document.dispatchEvent(backSkip);
    });

}

setButton();
