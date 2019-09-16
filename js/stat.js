var CLOUD_WIDTH = 470;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
ctx.fillStyle = color;
ctx.fillRect(x, y, CLOUD_WIDTH,CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.strokeText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  // ctx.fillStyle = ' rgba(255, 0, 0, 1)';
  ctx.fillStyle ='hsl(240, 100%, 50%)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 10 + BAR_HEIGHT);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 8, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 7);
  };










  // ctx.fillStyle = '#000';
  // ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 10 + BAR_HEIGHT);
  // ctx.fillStyle ='hsl(240, 100%, ' + Math.random() + ')';
  // ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 8, BAR_WIDTH, BAR_HEIGHT);

  // ctx.fillStyle = '#000';
  // ctx.fillText(playerName, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 10 + BAR_HEIGHT);
  //
  // ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 8, BAR_WIDTH, BAR_HEIGHT);

  // ctx.fillStyle = '#000';
  // ctx.fillText(playerName, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 10 + BAR_HEIGHT);
  // ctx.fillStyle ='hsl(240, 100%, ' + Math.random() + ')';
  // ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * playerIndex, CLOUD_Y + GAP * 8, BAR_WIDTH, BAR_HEIGHT);
};
