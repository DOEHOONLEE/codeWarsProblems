/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let secConv = ((seconds / 3600)+"");
  let MMConv = (seconds/3600 - Math.floor(seconds/3600)) * 60;
  let SSConv = (MMConv - Math.floor(MMConv)) * 60;
  let HH = (secConv < 2) ? secConv = "0"+(secConv+"")[0] : secConv | 0;
  let MM = (MMConv < 2) ? "0"+(MMConv+"")[0] : MMConv | 0;
  let SS = (Math.round(SSConv) > 10) ? Math.round(SSConv) : "0"+(Math.round(SSConv)+"");
  
  return (`${HH}:${MM}:${SS}`);
}

function humanReadable(seconds) {
  let secConv = ((seconds / 3600)+"");
  let MMConv = ((secConv - Math.floor(secConv)) * 60)+"";
  let SSConv = ((MMConv - Math.floor(MMConv)) * 60)+"";
  let HH = (secConv < 2) ? secConv = "0"+secConv[0] : secConv | 0;
  let MM = (MMConv < 2) ? "0"+MMConv[0] : MMConv | 0;
  let SS = (Math.round(SSConv) > 10) ? Math.round(SSConv) : "0"+Math.round(SSConv);
  
  return (`${HH}:${MM}:${SS}`);
}

function humanReadable(seconds) {
    let SS = (seconds % 60);
    let MM = ((seconds / 60 ) | 0) % 60;
    let HH = (seconds / 3600) | 0;
    
    return (`${HH < 10 ? "0"+HH : HH}:${MM < 10 ? "0"+MM : MM}:${SS < 10 ? "0"+SS : SS}`);
}