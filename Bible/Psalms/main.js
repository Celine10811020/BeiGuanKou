function setup()
{
  noCanvas();

  initialization();

  Start = 0;
  SentenceNow = 1;
  Correct = -1;
  Successive = 0;
  SuccessiveMax = 0;
  Error = 0;
  TimeLeft = 30;
  LastMillis = 0;
  GameOverByTime = 0;

  Title = createP('詩篇全篇');
  Title.addClass('title');

  SuccessiveNumber = createP('連擊：' + Successive + '/' + SuccessiveMax);
  SuccessiveNumber.addClass('successive');

  ErrorNumber = createP('失誤：' + Error);
  ErrorNumber.addClass('error');

  TimeNumber = createP('時間：' + Math.ceil(TimeLeft) + ' 秒');
  TimeNumber.addClass('time');

  ButtonStart = createButton('開始');
  ButtonStart.mousePressed(buttonStart_Clicked);
  ButtonStart.addClass('start');

  SentenceOne = createP(' ');
  SentenceOne.addClass('one');
  SentenceTwo = createP(' ');
  SentenceTwo.addClass('two');
  SentenceThree = createP(' ');
  SentenceThree.addClass('three');

  ButtonOne = createButton('1');
  ButtonOne.mousePressed(buttonOne_Clicked);
  ButtonOne.addClass('one');
  ButtonOne.hide();
  ButtonTwo = createButton('2');
  ButtonTwo.mousePressed(buttonTwo_Clicked);
  ButtonTwo.addClass('two');
  ButtonTwo.hide();
  ButtonThree = createButton('3');
  ButtonThree.mousePressed(buttonThree_Clicked);
  ButtonThree.addClass('three');
  ButtonThree.hide();
  ButtonFour = createButton('4');
  ButtonFour.mousePressed(buttonFour_Clicked);
  ButtonFour.addClass('four');
  ButtonFour.hide();

  ButtonRestart = createButton('重新挑戰');
  ButtonRestart.mousePressed(buttonStart_Clicked);
  ButtonRestart.addClass('restart');
  ButtonRestart.hide();
  ButtonOthers = createButton('其他挑戰');
  ButtonOthers.mousePressed(buttonOthers_Clicked);
  ButtonOthers.addClass('others');
  ButtonOthers.hide();
}

function draw()
{
  if(Start)
  {
    if(LastMillis == 0)
    {
      LastMillis = millis();
    }
    var now = millis();
    var dt = (now - LastMillis) / 1000.0;
    LastMillis = now;

    TimeLeft -= dt;

    TimeNumber.html('時間：' + Math.max(0, Math.ceil(TimeLeft)) + ' 秒');

    if(TimeLeft <= 0)
    {
      endGameByTime();
      return;
    }

    SentenceOne.html(Sentence[SentenceNow-2]);
    SentenceTwo.html(Sentence[SentenceNow-1]);

    if(Correct == 1)
    {
      SentenceThree.html(Sentence[SentenceNow]);
      $("p.three").css('color', '#0096DC');
    }else if(Correct == 0)
    {
      SentenceThree.html(Sentence[SentenceNow]);
      $("p.three").css('color', '#C8141E');
    }

    $("p.successive").text('連擊：' + Successive + '/' + SuccessiveMax);
    $("p.error").text('失誤：' + Error);
  }

  if(SentenceNow == Count-1)
  {
    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonRestart.show();
    ButtonOthers.show();

    SentenceNow = 1;
    Start = 0;
  }
}

function buttonStart_Clicked()
{
  TimeLeft = 30;
  TimeNumber.html('時間：' + Math.max(0, Math.ceil(TimeLeft)) + ' 秒');
  
  LastMillis = 0;
  GameOverByTime = 0;

  ButtonStart.hide();
  ButtonRestart.hide();
  ButtonOthers.hide();

  SentenceOne.html(Sentence[SentenceNow-1]);
  SentenceTwo.html(Sentence[SentenceNow]);
  SentenceThree.html(' ');

  ButtonOne.show();
  ButtonTwo.show();
  ButtonThree.show();
  ButtonFour.show();

  setOpition();
}

function buttonOne_Clicked()
{
  Start = 1;

  if(Answer == 1)
  {
    Successive++;
    Correct = 1;
    TimeLeft += 3;
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
    TimeLeft -= 5;
    if(TimeLeft <= 0)
    {
      TimeNumber.html('時間：0 秒');
      endGameByTime();
      return;
    }
  }

  SentenceNow++;

  setOpition();
}

function buttonTwo_Clicked()
{
  Start = 1;

  if(Answer == 2)
  {
    Successive++;
    Correct = 1;
    TimeLeft += 3;
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
    TimeLeft -= 5;
    if(TimeLeft <= 0)
    {
      TimeNumber.html('時間：0 秒');
      endGameByTime();
      return;
    }
  }

  SentenceNow++;

  setOpition();
}

function buttonThree_Clicked()
{
  Start = 1;

  if(Answer == 3)
  {
    Successive++;
    Correct = 1;
    TimeLeft += 3;
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
    TimeLeft -= 5;
    if(TimeLeft <= 0)
    {
      TimeNumber.html('時間：0 秒');
      endGameByTime();
      return;
    }
  }

  SentenceNow++;

  setOpition();
}

function buttonFour_Clicked()
{
  Start = 1;

  if(Answer == 4)
  {
    Successive++;
    Correct = 1;
    TimeLeft += 3;
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
    TimeLeft -= 5;
    if(TimeLeft <= 0)
    {
      TimeNumber.html('時間：0 秒');
      endGameByTime();
      return;
    }
  }

  SentenceNow++;

  setOpition();
}

function buttonOthers_Clicked()
{
  location.href = 'https://celine10811020.github.io/BeiGuanKou/';
}

function setOpition()
{
  var compare;

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.four").text(Sentence[SentenceRandom]);

  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.one").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.four").text(Sentence[SentenceRandom]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.one").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.four").text(Sentence[SentenceRandom]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * Count);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[SentenceNow+1]);
    }
    $("button.one").text(Sentence[SentenceRandom]);
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function endGameByTime()
{
  GameOverByTime = 1;

  ButtonOne.hide();
  ButtonTwo.hide();
  ButtonThree.hide();
  ButtonFour.hide();
  ButtonRestart.show();
  ButtonOthers.show();

  SentenceThree.html('時間到！遊戲結束！！');
  $("p.three").css('color', '#C8141E');

  Start = 0;
  SentenceNow = 1;
}
