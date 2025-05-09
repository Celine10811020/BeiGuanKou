function setup()
{
  noCanvas();

  Start = 0;
  PoemIndex = 0;
  SentenceNow = 1;
  Correct = -1;
  Successive = 0;
  SuccessiveMax = 0;
  Error = 0;

  Title = createP('宋詞大雜燴．其一');
  Title.addClass('title');

  SuccessiveNumber = createP('連擊：' + Successive + '/' + SuccessiveMax);
  SuccessiveNumber.addClass('successive');

  ErrorNumber = createP('失誤：' + Error);
  ErrorNumber.addClass('error');

  ButtonStart = createButton('開始');
  ButtonStart.mousePressed(buttonStart_Clicked);
  ButtonStart.addClass('start');

  PoemName = createP(' ');
  PoemName.addClass('poem');
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

  ButtonNext = createButton('繼續挑戰');
  ButtonNext.mousePressed(buttonNext_Clicked);
  ButtonNext.addClass('next');
  ButtonNext.hide();
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
  console.log(PoemIndex);

  if(Start)
  {
    if(SentenceNow == 1)
    {
      SentenceOne.hide();
      SentenceTwo.hide();
      SentenceThree.show();

      if(Correct == 1)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#0096DC');
      }else if(Correct == 0)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#C8141E');
      }
    }else if(SentenceNow == 2)
    {
      SentenceTwo.show();

      SentenceTwo.html(Sentence[StartIndex-2]);

      if(Correct == 1)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#0096DC');
      }else if(Correct == 0)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#C8141E');
      }
    }else if(SentenceNow != 0)
    {
      SentenceOne.show();

      SentenceOne.html(Sentence[StartIndex-3]);
      SentenceTwo.html(Sentence[StartIndex-2]);

      if(Correct == 1)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#0096DC');
      }else if(Correct == 0)
      {
        SentenceThree.html(Sentence[StartIndex-1]);
        $("p.three").css('color', '#C8141E');
      }
    }

    $("p.successive").text('連擊：' + Successive + '/' + SuccessiveMax);
    $("p.error").text('失誤：' + Error);
  }else
  {
    $("p.successive").text('連擊：0/0');
    $("p.error").text('失誤：0');
  }

  if(PoemIndex == Count+1)
  {
    PoemName.html("恭喜挑戰完成！！！");
    SentenceOne.hide();
    SentenceTwo.hide();
    SentenceThree.hide();

    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonRestart.show();
    ButtonOthers.show();
  }
}

function buttonStart_Clicked()
{
  initialization();

  ButtonStart.hide();
  ButtonNext.hide();
  ButtonRestart.hide();
  ButtonOthers.hide();

  PoemName.show();
  SentenceOne.hide();
  SentenceTwo.hide();
  SentenceThree.hide();

  Start = 0;
  PoemIndex = 0;
  SentenceNow = 1;
  Correct = -1;
  Successive = 0;
  SuccessiveMax = 0;
  Error = 0;

  setPoem();

  ButtonOne.show();
  ButtonTwo.show();
  ButtonThree.show();
  ButtonFour.show();

  setOpition();
}

function buttonOne_Clicked()
{
  Start = 1;
  PoemName.hide();

  if(StartIndex == EndIndex)
  {
    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonNext.show();
    ButtonRestart.show();
    ButtonOthers.show();
  }

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

  StartIndex++;
  SentenceNow++;

  setOpition();
}

function buttonTwo_Clicked()
{
  Start = 1;
  PoemName.hide();

  if(StartIndex == EndIndex)
  {
    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonNext.show();
    ButtonRestart.show();
    ButtonOthers.show();
  }

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

  StartIndex++;
  SentenceNow++;

  setOpition();
}

function buttonThree_Clicked()
{
  Start = 1;
  PoemName.hide();

  if(StartIndex == EndIndex)
  {
    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonNext.show();
    ButtonRestart.show();
    ButtonOthers.show();
  }

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

  StartIndex++;
  SentenceNow++;

  setOpition();
}

function buttonFour_Clicked()
{
  Start = 1;
  PoemName.hide();

  if(StartIndex == EndIndex)
  {
    ButtonOne.hide();
    ButtonTwo.hide();
    ButtonThree.hide();
    ButtonFour.hide();
    ButtonNext.show();
    ButtonRestart.show();
    ButtonOthers.show();
  }

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

  StartIndex++;
  SentenceNow++;

  setOpition();
}

function buttonNext_Clicked()
{
  PoemName.show();
  SentenceOne.hide();
  SentenceTwo.hide();
  SentenceThree.hide();

  setPoem();
  setOpition();

  ButtonOne.show();
  ButtonTwo.show();
  ButtonThree.show();
  ButtonFour.show();
  ButtonNext.hide();
  ButtonRestart.hide();
  ButtonOthers.hide();
}

function buttonOthers_Clicked()
{
  location.href = 'https://celine10811020.github.io/BeiGuanKou/';
}

function setPoem()
{
  if(PoemIndex == Count)
  {
    PoemIndex++;

    return;
  }

  PoemName.html(Poem[PoemIndex][0]);
  StartIndex = Poem[PoemIndex][1];
  EndIndex = Poem[PoemIndex][2];

  PoemIndex++;
  SentenceNow = 0;
}

function setOpition()
{
  if(PoemIndex == Count+1)
  {
    return;
  }

  var compare;

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[StartIndex]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.four").text(Sentence[SentenceRandom]);

  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[StartIndex]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.one").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.four").text(Sentence[SentenceRandom]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[StartIndex]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.one").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.four").text(Sentence[SentenceRandom]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[StartIndex]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.two").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.three").text(Sentence[SentenceRandom]);

    compare = 0;
    while(compare == 0)
    {
      SentenceRandom = Math.floor(Math.random() * SentenceCount);
      compare = Sentence[SentenceRandom].localeCompare(Sentence[StartIndex]);

      if(Sentence[StartIndex].length != Sentence[SentenceRandom].length)
      {
        compare = 0;
      }
    }
    $("button.one").text(Sentence[SentenceRandom]);
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
