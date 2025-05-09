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

  Title = createP('圓周率');
  Title.addClass('title');

  SuccessiveNumber = createP('連擊：' + Successive + '/' + SuccessiveMax);
  SuccessiveNumber.addClass('successive');

  ErrorNumber = createP('失誤：' + Error);
  ErrorNumber.addClass('error');

  ButtonStart = createButton('開始');
  ButtonStart.mousePressed(buttonStart_Clicked);
  ButtonStart.addClass('start');

  SentenceOne = createP(' ');
  SentenceOne.addClass('one');
  SentenceTwo = createP(' ');
  SentenceTwo.addClass('two');

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
    console.log(SentenceNow);

    if(SentenceNow == 2)
    {
      SentenceOne.html('3.' + Sentence[SentenceNow-2] + Sentence[SentenceNow-1]);
    }else if(SentenceNow == 3)
    {
      SentenceOne.html('3.' + Sentence[SentenceNow-3] + Sentence[SentenceNow-2] + Sentence[SentenceNow-1]);
    }else if(SentenceNow == 4)
    {
      SentenceOne.html('3.' + Sentence[SentenceNow-4] + Sentence[SentenceNow-3] + Sentence[SentenceNow-2] + Sentence[SentenceNow-1]);
    }else
    {
      SentenceOne.html(Sentence[SentenceNow-5] + Sentence[SentenceNow-4] + Sentence[SentenceNow-3] + Sentence[SentenceNow-2] + Sentence[SentenceNow-1]);
    }

    if(Correct == 1)
    {
      SentenceTwo.html(Sentence[SentenceNow]);
      $("p.two").css('color', '#0096DC');
    }else if(Correct == 0)
    {
      SentenceTwo.html(Sentence[SentenceNow]);
      $("p.two").css('color', '#C8141E');
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
  ButtonStart.hide();
  ButtonRestart.hide();
  ButtonOthers.hide();

  SentenceOne.html('3.' + Sentence[SentenceNow-1] + Sentence[SentenceNow]);
  SentenceTwo.html(' ');

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
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
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
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
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
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
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
    if(Successive > SuccessiveMax)
    {
      SuccessiveMax = Successive;
    }
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
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
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.two").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.three").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.four").text(RandomNumber);

  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.one").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.three").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.four").text(RandomNumber);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.two").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.one").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.four").text(RandomNumber);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.two").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.three").text(RandomNumber);

    compare = 0;
    while(compare == 0)
    {
      RandomNumber = Math.floor(Math.random() * 10);
      if(RandomNumber != Sentence[SentenceNow+1])
      {
        compare = 1;
      }
    }
    $("button.one").text(RandomNumber);
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
