const Games = {
    翻牌遊戲: "FlopGame/index",
    踩地雷: "SteppingMines/index",
    莊家AI: "Dealer/index",
    OOXX棋盤: "Chessboard/index",
    泡泡版: "PunchHoles/index",
    賓果: "Bingo/index",
    終極密碼: "UltimateCode/index",
    無限九宮格: "InfiniteNine/index",
    九宮格拼圖: "Sliding/index",
    俄羅斯輪盤: "RussianRoulette/index",
    // 拉霸抽獎1: "SlotGame/index",
    拉霸抽獎2: "SlotGame2/index",
    翻牌記憶: "FlopMemory/index",
    玻璃橋: "GlassBridge/index",
    數字猜謎: "1A2B/index",
    四聖水: "StackCup/index",
    八方陣: "OctagonalFormation/index",
    力拔山河: "TugOfWar/index",
    九樓電梯: "NineElevators/index",
    記憶Tempo: "MemoryTempo/index",
    四子棋: "Gobang/index",
    雙陸棋: "Backgammon/index",
    鴨馬壓碼: "PlaceBet/index",
    傳炸彈: "PassBomb/index",
    眼明手快: "TimingGame/index",
};
const keys = Object.getOwnPropertyNames(Games);
const GameList = document.getElementById("GameList");

$(function () {
    fillGameList();
    fillTopGames();
})
function getRandomGames() {
    var gameList = $(".GameList .bottom-btn"); // 获取所有游戏列表
    var randomGames = [];

    while (randomGames.length <= 1) {
        var randomIndex = Math.floor(Math.random() * gameList.length);
        var selectedGame = gameList.eq(randomIndex);

        // 确保游戏不重复
        if (!randomGames.includes(selectedGame)) {
            randomGames.push(selectedGame);
        }
    }

    return randomGames;
}

function fillTopGames() {
    var topGameLinks = $(".top-div .top-btn");

    var randomGames = getRandomGames();
    randomGames.forEach(function (game, index) {
        var gameName = game.text(); // 获取游戏名字
        var gameHref = game.attr("href"); // 获取游戏链接
        var topGameLink = topGameLinks.eq(index);

        topGameLink.text(gameName); // 设置游戏名字
        topGameLink.attr("href", gameHref); // 设置游戏链接
    });
}

function fillGameList() {
    var GameHtml = "";
    for (let index = 0; index < Object.keys(Games).length; index++) {
        GameHtml += `<a class="btn btn-info bottom-btn col-4" href="${Games[keys[index]]}.html" index="${index + 1}">${keys[index]}</a>`;
    }
    GameList.innerHTML = GameHtml;
}
