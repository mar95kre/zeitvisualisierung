//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"

var num = 60;

function setup() {
  createCanvas(800, 800);
  stroke(255);  

}

function draw() {
  
  var now = clock()

  background('#fae');
  stroke('#0303f7');
  strokeWeight(5);
  
  //var s = now.sec
  //var m = now.min
  //var h = now.hours
  
  let s = now.sec
  let m = now.min
  let h = now.hours
  
  let mover1S = 1
  let mover2S = 2
  let mover3S = 3
  let mover4S = 4
  let mover5S = 5
  let mover6S = 6
  let mover7S = 7
  let mover8S = 8
  let mover9S = 9
  let mover10S = 10
  let mover11S = 11
  let mover12S = 12
  let mover13S = 13
  let mover14S = 14
  let mover15S = 15
  let mover16S = 16
  let mover17S = 17
  let mover18S = 18
  let mover19S = 19
  let mover20S = 20
  let mover21S = 21
  let mover22S = 22
  let mover23S = 23
  let mover24S = 24
  let mover25S = 25
  let mover26S = 26
  let mover27S = 27
  let mover28S = 28
  let mover29S = 29
  let mover30S = 30
  let mover31S = 31
  let mover32S = 32
  let mover33S = 33
  let mover34S = 34
  let mover35S = 35
  let mover36S = 36
  let mover37S = 37
  let mover38S = 38
  let mover39S = 39
  let mover40S = 40
  let mover41S = 41
  let mover42S = 42
  let mover43S = 43
  let mover44S = 44
  let mover45S = 45
  let mover46S = 46
  let mover47S = 47
  let mover48S = 48
  let mover49S = 49
  let mover50S = 50
  let mover51S = 51
  let mover52S = 52
  let mover53S = 53
  let mover54S = 54
  let mover55S = 55
  let mover56S = 56
  let mover57S = 57
  let mover58S = 58
  let mover59S = 59
  let mover60S = 60

  let mover1M = 1
  let mover2M = 2
  let mover3M = 3
  let mover4M = 4
  let mover5M = 5
  let mover6M = 6
  let mover7M = 7
  let mover8M = 8
  let mover9M = 9
  let mover10M = 10
  let mover11M = 11
  let mover12M = 12
  let mover13M = 13
  let mover14M = 14
  let mover15M = 15
  let mover16M = 16
  let mover17M = 17
  let mover18M = 18
  let mover19M = 19
  let mover20M = 20
  let mover21M = 21
  let mover22M = 22
  let mover23M = 23
  let mover24M = 24
  let mover25M = 25
  let mover26M = 26
  let mover27M = 27
  let mover28M = 28
  let mover29M = 29
  let mover30M = 30
  let mover31M = 31
  let mover32M = 32
  let mover33M = 33
  let mover34M = 34
  let mover35M = 35
  let mover36M = 36
  let mover37M = 37
  let mover38M = 38
  let mover39M = 39
  let mover40M = 40
  let mover41M = 41
  let mover42M = 42
  let mover43M = 43
  let mover44M = 44
  let mover45M = 45
  let mover46M = 46
  let mover47M = 47
  let mover48M = 48
  let mover49M = 49
  let mover50M = 50
  let mover51M = 51
  let mover52M = 52
  let mover53M = 53
  let mover54M = 54
  let mover55M = 55
  let mover56M = 56
  let mover57M = 57
  let mover58M = 58
  let mover59M = 59
  let mover60M = 60

  let mover1H = 1
  let mover2H = 2
  let mover3H = 3
  let mover4H = 4
  let mover5H = 5
  let mover6H = 6
  let mover7H = 7
  let mover8H = 8
  let mover9H = 9
  let mover10H = 10
  let mover11H = 11
  let mover12H = 12
  let mover13H = 13
  let mover14H = 14
  let mover15H = 15
  let mover16H = 16
  let mover17H = 17
  let mover18H = 18
  let mover19H = 19
  let mover20H = 20
  let mover21H = 21
  let mover22H = 22
  let mover23H = 23
  let mover24H = 24

  console.log(h)
  

  //sekunden linien 

  //1-10


if (s >= 1) {mover1S = 790
}
else {mover1S = 600
}

if (s >= 2) {mover2S = 780
  //stroke('fffff')
}
else {mover2S = 590
  //stroke('#0303f7')
}

if (s >= 3) {mover3S = 770}
else {mover3S = 580}

if (s >= 4) {mover4S = 760}
else {mover4S = 570}

if (s >= 5) {mover5S = 750}
else {mover5S = 560}

if (s >= 6) {mover6S = 740}
else {mover6S = 550}

if (s >= 7) {mover7S = 730}
else {mover7S = 540}

if (s >= 8) {mover8S = 720}
else {mover8S = 530}

if (s >= 9) {mover9S = 710}
else {mover9S = 520}

if (s >= 10) {mover10S = 700}
else {mover10S = 510}

  //11-20
if (s >= 11) {mover11S = 690}
else {mover11S = 500}

if (s >= 12) {mover12S = 680}
else {mover12S = 490}

if (s >= 13) {mover13S = 670}
else {mover13S = 480}

if (s >= 14) {mover14S = 660}
else {mover14S = 470}

if (s >= 15) {mover15S = 650}
else {mover15S = 460}

if (s >= 16) {mover16S = 640}
else {mover16S = 450}

if (s >= 17) {mover17S = 630}
else {mover17S = 440}

if (s >= 18) {mover18S = 620}
else {mover18S = 430}

if (s >= 19) {mover19S = 610}
else {mover19S = 420}

if (s >= 20) {mover20S = 600}
else {mover20S = 410}

  //21-30
if (s >= 21) {mover21S = 590}
else {mover21S = 400}

if (s >= 22) {mover22S = 580}
else {mover22S = 390}

if (s >= 23) {mover23S = 570}
else {mover23S = 380}

if (s >= 24) {mover24S = 560}
else {mover24S = 370}

if (s >= 25) {mover25S = 550}
else {mover25S = 360}

if (s >= 26) {mover26S = 540}
else {mover26S = 350}

if (s >= 27) {mover27S = 530}
else {mover27S = 340}

if (s >= 28) {mover28S = 520}
else {mover28S = 330}

if (s >= 29) {mover29S = 510}
else {mover29S = 320}

if (s >= 30) {mover30S = 500}
else {mover30S = 310}

  //31-40
if (s >= 31) {mover31S = 490}
else {mover31S = 300}
  
if (s >= 32) {mover32S = 480}
else {mover32S = 290}
  
if (s >= 33) {mover33S = 470}
else {mover33S = 280}
  
if (s >= 34) {mover34S = 460}
else {mover34S = 270}
  
if (s >= 35) {mover35S = 450}
else {mover35S = 260}
  
if (s >= 36) {mover36S = 440}
else {mover36S = 250}
  
if (s >= 37) {mover37S = 430}
else {mover37S = 240}
  
if (s >= 38) {mover38S = 420}
else {mover38S = 230}
  
if (s >= 39) {mover39S = 410}
else {mover39S = 220}
  
if (s >= 40) {mover40S = 400}
else {mover40S = 210}

  //41-50
if (s >= 41) {mover41S = 390}
else {mover41S = 200}
  
if (s >= 42) {mover42S = 380}
else {mover42S = 190}
  
if (s >= 43) {mover43S = 370}
else {mover43S = 180}
  
if (s >= 44) {mover44S = 360}
else {mover44S = 170}

if (s >= 45) {mover45S = 350}
else {mover45S = 160}
  
if (s >= 46) {mover46S = 340}
else {mover46S = 150}
  
if (s >= 47) {mover47S = 330}
else {mover47S = 140}
  
if (s >= 48) {mover48S = 320}
else {mover48S = 130}
  
if (s >= 49) {mover49S = 310}
else {mover49S = 120}
  
if (s >= 50) {mover50S = 300}
else {mover50S = 110}

  //51-60
if (s >= 51) {mover51S = 290}
else {mover51S = 100}
  
if (s >= 52) {mover52S = 280}
else {mover52S = 90}
  
if (s >= 53) {mover53S = 270}
else {mover53S = 80}
  
if (s >= 54) {mover54S = 260}
else {mover54S = 70}
  
if (s >= 55) {mover55S = 250}
else {mover55S = 60}
  
if (s >= 56) {mover56S = 240}
else {mover56S = 50}
  
if (s >= 57) {mover57S = 230}
else {mover57S = 40}
  
if (s >= 58) {mover58S = 220}
else {mover58S = 30}

if (s >= 59) {mover59S = 210}
else {mover59S = 20}
  
if (s >= 60) {mover60S = 200}
else {mover60S = 10}


stroke('#0303f7')

line (10, mover1S, 395, mover1S)
line (10, mover2S, 395, mover2S)
line (10, mover3S, 395, mover3S)
line (10, mover4S, 395, mover4S)
line (10, mover5S, 395, mover5S)
line (10, mover6S, 395, mover6S)
line (10, mover7S, 395, mover7S)
line (10, mover8S, 395, mover8S)
line (10, mover9S, 395, mover9S)
line (10, mover10S, 395, mover10S)
line (10, mover11S, 395, mover11S)
line (10, mover12S, 395, mover12S)
line (10, mover13S, 395, mover13S)
line (10, mover14S, 395, mover14S)
line (10, mover15S, 395, mover15S)
line (10, mover16S, 395, mover16S)
line (10, mover17S, 395, mover17S)
line (10, mover18S, 395, mover18S)
line (10, mover19S, 395, mover19S)
line (10, mover20S, 395, mover20S)
line (10, mover21S, 395, mover21S)
line (10, mover22S, 395, mover22S)
line (10, mover23S, 395, mover23S)
line (10, mover24S, 395, mover24S)
line (10, mover25S, 395, mover25S)
line (10, mover26S, 395, mover26S)
line (10, mover27S, 395, mover27S)
line (10, mover28S, 395, mover28S)
line (10, mover29S, 395, mover29S)
line (10, mover30S, 395, mover30S)
line (10, mover31S, 395, mover31S)
line (10, mover32S, 395, mover32S)
line (10, mover33S, 395, mover33S)
line (10, mover34S, 395, mover34S)
line (10, mover35S, 395, mover35S)
line (10, mover36S, 395, mover36S)
line (10, mover37S, 395, mover37S)
line (10, mover38S, 395, mover38S)
line (10, mover39S, 395, mover39S)
line (10, mover40S, 395, mover40S)
line (10, mover41S, 395, mover41S)
line (10, mover42S, 395, mover42S)
line (10, mover43S, 395, mover43S)
line (10, mover44S, 395, mover44S)
line (10, mover45S, 395, mover45S)
line (10, mover46S, 395, mover46S)
line (10, mover47S, 395, mover47S)
line (10, mover48S, 395, mover48S)
line (10, mover49S, 395, mover49S)
line (10, mover50S, 395, mover50S)
line (10, mover51S, 395, mover51S)
line (10, mover52S, 395, mover52S)
line (10, mover53S, 395, mover53S)
line (10, mover54S, 395, mover54S)
line (10, mover55S, 395, mover55S)
line (10, mover56S, 395, mover56S)
line (10, mover57S, 395, mover57S)
line (10, mover58S, 395, mover58S)
line (10, mover59S, 395, mover59S)
line (10, mover60S, 395, mover60S)


//farben ändern 




//minuten linien 

//1-10
if (m >= 1) {mover1M = 790}
else {mover1M = 600}

if (m >= 2) {mover2M = 780}
else {mover2M = 590}

if (m >= 3) {mover3M = 770}
else {mover3M = 580}

if (m >= 4) {mover4M = 760}
else {mover4M = 570}

if (m >= 5) {mover5M = 750}
else {mover5M = 560}

if (m >= 6) {mover6M = 740}
else {mover6M = 550}

if (m >= 7) {mover7M = 730}
else {mover7M = 540}

if (m >= 8) {mover8M = 720}
else {mover8M = 530}

if (m >= 9) {mover9M = 710}
else {mover9M = 520}

if (m >= 10) {mover10M = 700}
else {mover10M = 510}

  //11-20
if (m >= 11) {mover11M = 690}
else {mover11M = 500}

if (m >= 12) {mover12M = 680}
else {mover12M = 490}

if (m >= 13) {mover13M = 670}
else {mover13M = 480}

if (m >= 14) {mover14M = 660}
else {mover14M = 470}

if (m >= 15) {mover15M = 650}
else {mover15M = 460}

if (m >= 16) {mover16M = 640}
else {mover16M = 450}

if (m >= 17) {mover17M = 630}
else {mover17M = 440}

if (m >= 18) {mover18M = 620}
else {mover18M = 430}

if (m >= 19) {mover19M = 610}
else {mover19M = 420}

if (m >= 20) {mover20M = 600}
else {mover20M = 410}

  //21-30
if (m >= 21) {mover21M = 590}
else {mover21M = 400}

if (m >= 22) {mover22M = 580}
else {mover22M = 390}

if (m >= 23) {mover23M = 570}
else {mover23M = 380}

if (m >= 24) {mover24M = 560}
else {mover24M = 370}

if (m >= 25) {mover25M = 550}
else {mover25M = 360}

if (m >= 26) {mover26M = 540}
else {mover26M = 350}

if (m >= 27) {mover27M = 530}
else {mover27M = 340}

if (m >= 28) {mover28M = 520}
else {mover28M = 330}

if (m >= 29) {mover29M = 510}
else {mover29M = 320}

if (m >= 30) {mover30M = 500}
else {mover30M = 310}

  //31-40
if (m >= 31) {mover31M = 490}
else {mover31M = 300}
  
if (m >= 32) {mover32M = 480}
else {mover32M = 290}
  
if (m >= 33) {mover33M = 470}
else {mover33M = 280}
  
if (m >= 34) {mover34M = 460}
else {mover34M = 270}
  
if (m >= 35) {mover35M = 450}
else {mover35M = 260}
  
if (m >= 36) {mover36M = 440}
else {mover36M = 250}
  
if (m >= 37) {mover37M = 430}
else {mover37M = 240}
  
if (m >= 38) {mover38M = 420}
else {mover38M = 230}
  
if (m >= 39) {mover39M = 410}
else {mover39M = 220}
  
if (m >= 40) {mover40M = 400}
else {mover40M = 210}

  //41-50
if (m >= 41) {mover41M = 390}
else {mover41M = 200}
  
if (m >= 42) {mover42M = 380}
else {mover42M = 190}
  
if (m >= 43) {mover43M = 370}
else {mover43M = 180}
  
if (m >= 44) {mover44M = 360}
else {mover44M = 170}

if (m >= 45) {mover45M = 350}
else {mover45M = 160}
  
if (m >= 46) {mover46M = 340}
else {mover46M = 150}
  
if (m >= 47) {mover47M = 330}
else {mover47M = 140}
  
if (m >= 48) {mover48M = 320}
else {mover48M = 130}
  
if (m >= 49) {mover49M = 310}
else {mover49M = 120}
  
if (m >= 50) {mover50M = 300}
else {mover50M = 110}

  //51-60
if (m >= 51) {mover51M = 290}
else {mover51M = 100}
  
if (m >= 52) {mover52M = 280}
else {mover52M = 90}
  
if (m >= 53) {mover53M = 270}
else {mover53M = 80}
  
if (m >= 54) {mover54M = 260}
else {mover54M = 70}
  
if (m >= 55) {mover55M = 250}
else {mover55M = 60}
  
if (m >= 56) {mover56M = 240}
else {mover56M = 50}
  
if (m >= 57) {mover57M = 230}
else {mover57M = 40}
  
if (m >= 58) {mover58M = 220}
else {mover58M = 30}

if (m >= 59) {mover59M = 210}
else {mover59M = 20}
  
if (m >= 60) {mover60M = 200}
else {mover60M = 10}


line (405, mover1M, 790, mover1M)
line (405, mover2M, 790, mover2M)
line (405, mover3M, 790, mover3M)
line (405, mover4M, 790, mover4M)
line (405, mover5M, 790, mover5M)
line (405, mover6M, 790, mover6M)
line (405, mover7M, 790, mover7M)
line (405, mover8M, 790, mover8M)
line (405, mover9M, 790, mover9M)
line (405, mover10M, 790, mover10M)
line (405, mover11M, 790, mover11M)
line (405, mover12M, 790, mover12M)
line (405, mover13M, 790, mover13M)
line (405, mover14M, 790, mover14M)
line (405, mover15M, 790, mover15M)
line (405, mover16M, 790, mover16M)
line (405, mover17M, 790, mover17M)
line (405, mover18M, 790, mover18M)
line (405, mover19M, 790, mover19M)
line (405, mover20M, 790, mover20M)
line (405, mover21M, 790, mover21M)
line (405, mover22M, 790, mover22M)
line (405, mover23M, 790, mover23M)
line (405, mover24M, 790, mover24M)
line (405, mover25M, 790, mover25M)
line (405, mover26M, 790, mover26M)
line (405, mover27M, 790, mover27M)
line (405, mover28M, 790, mover28M)
line (405, mover29M, 790, mover29M)
line (405, mover30M, 790, mover30M)
line (405, mover31M, 790, mover31M)
line (405, mover32M, 790, mover32M)
line (405, mover33M, 790, mover33M)
line (405, mover34M, 790, mover34M)
line (405, mover35M, 790, mover35M)
line (405, mover36M, 790, mover36M)
line (405, mover37M, 790, mover37M)
line (405, mover38M, 790, mover38M)
line (405, mover39M, 790, mover39M)
line (405, mover40M, 790, mover40M)
line (405, mover41M, 790, mover41M)
line (405, mover42M, 790, mover42M)
line (405, mover43M, 790, mover43M)
line (405, mover44M, 790, mover44M)
line (405, mover45M, 790, mover45M)
line (405, mover46M, 790, mover46M)
line (405, mover47M, 790, mover47M)
line (405, mover48M, 790, mover48M)
line (405, mover49M, 790, mover49M)
line (405, mover50M, 790, mover50M)
line (405, mover51M, 790, mover51M)
line (405, mover52M, 790, mover52M)
line (405, mover53M, 790, mover53M)
line (405, mover54M, 790, mover54M)
line (405, mover55M, 790, mover55M)
line (405, mover56M, 790, mover56M)
line (405, mover57M, 790, mover57M)
line (405, mover58M, 790, mover58M)
line (405, mover59M, 790, mover59M)
line (405, mover60M, 790, mover60M)



// class Linie {
//   constructor(){
//      this.y = 10
//   }

//   move () {
//     this.y = this.y + 200;
//   }

//   show () {
//     line (400, this.y, 800, this.y)
//   }
// }




//stunden linien

if (h >= 1) {mover1H = 790}
else {mover1H = 240}

if (h >= 2) {mover2H = 780}
else {mover2H = 230}

if (h >= 3) {mover3H = 770}
else {mover3H = 220}

if (h >= 4) {mover4H = 760}
else {mover4H = 210}

if (h >= 5) {mover5H = 750}
else {mover5H = 200}

if (h >= 6) {mover6H = 740}
else {mover6H = 190}

if (h >= 7) {mover7H = 730}
else {mover7H = 180}

if (h >= 8) {mover8H = 720}
else {mover8H = 170}

if (h >= 9) {mover9H = 710}
else {mover9H = 160}

if (h >= 10) {mover10H = 700}
else {mover10H = 150}

  //11-20
if (h >= 11) {mover11H = 690}
else {mover11H = 140}

if (h >= 12) {mover12H = 680}
else {mover12H = 130}

if (h >= 13) {mover13H = 670}
else {mover13H = 120}

if (h >= 14) {mover14H = 660}
else {mover14H = 110}

if (h >= 15) {mover15H = 650}
else {mover15H = 100}

if (h >= 16) {mover16H = 640}
else {mover16H = 90}

if (h >= 17) {mover17H = 630}
else {mover17H = 80}

if (h >= 18) {mover18H = 620}
else {mover18H = 70}

if (h >= 19) {mover19H = 610}
else {mover19H = 60}

if (h >= 20) {mover20H = 600}
else {mover20H = 50}

  //21-24
if (h >= 21) {mover21H = 590}
else {mover21H = 40}

if (h >= 22) {mover22H = 580}
else {mover22H = 30}

if (h >= 23) {mover23H = 570}
else {mover23H = 20}

if (h >= 24) {mover24H = 560}
else {mover24H = 10}

stroke('fffff')

line (mover1H, 10, mover1H, 790)
line (mover2H, 10, mover2H, 790)
line (mover3H, 10, mover3H, 790)
line (mover4H, 10, mover4H, 790)
line (mover5H, 10, mover5H, 790)
line (mover6H, 10, mover6H, 790)
line (mover7H, 10, mover7H, 790)
line (mover8H, 10, mover8H, 790)
line (mover9H, 10, mover9H, 790)
line (mover10H, 10, mover10H, 790)
line (mover11H, 10, mover11H, 790)
line (mover12H, 10, mover12H, 790)
line (mover13H, 10, mover13H, 790)
line (mover14H, 10, mover14H, 790)
line (mover15H, 10, mover15H, 790)
line (mover16H, 10, mover16H, 790)
line (mover17H, 10, mover17H, 790)
line (mover18H, 10, mover18H, 790)
line (mover19H, 10, mover19H, 790)
line (mover20H, 10, mover20H, 790)
line (mover21H, 10, mover21H, 790)
line (mover22H, 10, mover22H, 790)
line (mover23H, 10, mover23H, 790)
line (mover24H, 10, mover24H, 790)



//sekunden linien

//for (var i = 0; i < 60; i++) {
  //var test = line(0, 10*i+s, 400, 10*i+s)
  //console.log (i)
//}

//minuten linien

//for (var i = 0; i < 60; i++) {
  //var test = line(400, 10*i+m, 800, 10*i+m)
  //console.log (i)
//}

//stunden linien

//for (var i = 0; i < 12; i++) {
  //var test = line(10*i+h, 0, 10*i+h, 800)
  //console.log (i)
//}


}
