console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }




function getFileFromServer(url, doneCallback) {
  var xhr;

  xhr = new XMLHttpRequest();
  //xhr.onreadystatechange = handleStateChange;
  xhr.open("GET", url, true);
  xhr.send();

  xhr.responseType = 'arraybuffer';

  xhr.onload = function() {
    doneCallback(this);
  };
}





function prepare(buffer) {
  var offlineContext = new OfflineAudioContext(1, buffer.length, buffer.sampleRate);
  var source = offlineContext.createBufferSource();
  source.buffer = buffer;
  var filter = offlineContext.createBiquadFilter();
  filter.type = "lowpass";
  source.connect(filter);
  filter.connect(offlineContext.destination);
  source.start(0);
  offlineContext.startRendering();
  offlineContext.oncomplete = function(e) {
    process(e);
  };
}

function process(e) {
  var filteredBuffer = e.renderedBuffer;
  //If you want to analyze both channels, use the other channel later
  var data = filteredBuffer.getChannelData(0);
  var max = arrayMax(data);
  var min = arrayMin(data);
  var threshold = min + (max - min) * 0.98;
  var peaks = getPeaksAtThreshold(data, threshold);
  var intervalCounts = countIntervalsBetweenNearbyPeaks(peaks);
  var tempoCounts = groupNeighborsByTempo(intervalCounts);
  tempoCounts.sort(function(a, b) {
    return b.count - a.count;
  });
  if (tempoCounts.length) {
    output.innerHTML = tempoCounts[0].tempo;
  }
}

// http://tech.beatport.com/2014/web-audio/beat-detection-using-web-audio/
function getPeaksAtThreshold(data, threshold) {
  var peaksArray = [];
  var length = data.length;
  for (var i = 0; i < length;) {
    if (data[i] > threshold) {
      peaksArray.push(i);
      // Skip forward ~ 1/4s to get past this peak.
      i += 10000;//10000
    }
    i++;
  }
  //console.log("test2");
  return peaksArray;
}

function countIntervalsBetweenNearbyPeaks(peaks) {
  var intervalCounts = [];
  peaks.forEach(function(peak, index) {
    for (var i = 0; i < 10; i++) {
      var interval = peaks[index + i] - peak;
      var foundInterval = intervalCounts.some(function(intervalCount) {
        if (intervalCount.interval === interval) return intervalCount.count++;
      });
      //Additional checks to avoid infinite loops in later processing
      if (!isNaN(interval) && interval !== 0 && !foundInterval) {
        intervalCounts.push({
          interval: interval,
          count: 1
        });
      }
    }
  });
  return intervalCounts;
}

function groupNeighborsByTempo(intervalCounts) {
  var tempoCounts = [];
  intervalCounts.forEach(function(intervalCount) {
    //Convert an interval to tempo
    var theoreticalTempo = 60 / (intervalCount.interval / 44100);
    theoreticalTempo = Math.round(theoreticalTempo);
    if (theoreticalTempo === 0) {
      return;
    }
    // Adjust the tempo to fit within the 90-180 BPM range
    while (theoreticalTempo < 90) theoreticalTempo *= 2;
    while (theoreticalTempo > /*180*/200) theoreticalTempo /= 2;

    var foundTempo = tempoCounts.some(function(tempoCount) {
      if (tempoCount.tempo === theoreticalTempo) return tempoCount.count += intervalCount.count;
    });
    if (!foundTempo) {
      tempoCounts.push({
        tempo: theoreticalTempo,
        count: intervalCount.count
      });
    }
  });
  return tempoCounts;
}

// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
function arrayMin(arr) {
  var len = arr.length,
    min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function arrayMax(arr) {
  var len = arr.length,
    max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

//audioTag = document.querySelector('#audio'),
//playButton = document.querySelector('#play');

function updateProgressState() {
  if (song.paused) {
    return;
  }
  progressIndicator = document.querySelector('#progress');
  if (progressIndicator && song.duration) {
    
    //var test = (song.currentTime * 100 / song.duration)*-10;
    //var test = progressIndicator.x.baseVal.value*-1;
    //var test = progressIndicator.x.baseVal.value*-1;
    //console.log(test);
    //panZoomInstance.zoomAtPoint(4, {x: test, y: 0})
    //panZoomInstance.pan({x: test, y: 0})
    
    progressIndicator.setAttribute('x', (song.currentTime * 100 / song.duration) + '%');
  }
  requestAnimationFrame(updateProgressState);
}





var song = new Audio("like_a_g6.mp3");
//song.play();

song.addEventListener('play', updateProgressState);
song.addEventListener('playing', updateProgressState);

var peaks;
var realPeaks = [];// = peaks[i] / 44100;

var panZoomInstance;
var progressIndicator;

$("#loadTest").on('click', function() {

  getFileFromServer(song.src, function(request) {
    // Create offline context
    var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    var offlineContext = new OfflineContext(1, 2, 44100);
    
    offlineContext.decodeAudioData(request.response, function(buffer) {
      // Create buffer source
      var source = offlineContext.createBufferSource();
      source.buffer = buffer;
      // Create filter
      var filter = offlineContext.createBiquadFilter();
      filter.type = "lowpass";
      // Pipe the song into the filter, and the filter into the offline context
      source.connect(filter);
      filter.connect(offlineContext.destination);
      // Schedule the song to start playing at time:0
      source.start(0);
      
      var initialThreshold = 0.99,
        threshold = initialThreshold,
        minThreshold = 0.3,
        minPeaks = 125*6;

      do {
        peaks = getPeaksAtThreshold(buffer.getChannelData(0), threshold);
        threshold -= 0.05;
      } while (peaks.length < minPeaks && threshold >= minThreshold);
      
      for(var i = 0; i < peaks.length; i++) {
        var realTime = (peaks[i]/44100)
        realPeaks.push(realTime);
      }

      var svg = document.querySelector('#svg');
      svg.innerHTML = '';
      var svgNS = 'http://www.w3.org/2000/svg';
      peaks.forEach(function(peak) {
        var rect = document.createElementNS(svgNS, 'rect');
        rect.setAttributeNS(null, 'x', (100 * peak / buffer.length) + '%');
        rect.setAttributeNS(null, 'y', 0);
        rect.setAttributeNS(null, 'width', 0.2);
        rect.setAttributeNS(null, 'height', '100%');
        svg.appendChild(rect);
      });

      var rect = document.createElementNS(svgNS, 'rect');
      rect.setAttributeNS(null, 'id', 'progress');
      rect.setAttributeNS(null, 'y', 0);
      rect.setAttributeNS(null, 'width', 0.2);
      rect.setAttributeNS(null, 'height', '100%');
      rect.setAttributeNS(null, 'style', 'fill:#FF0000');
      svg.appendChild(rect);
      
      
      panZoomInstance = svgPanZoom('#svg', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.1
      });

      // zoom out
      panZoomInstance.zoom(3);
      panZoomInstance.pan({x: 0, y: 0})
      
      
      song.play();
    });
  });

});







/*var peaks;







var previewUrl = "test.mp3";

var context = new(window.AudioContext || window.webkitAudioContext)();
var request = new XMLHttpRequest();
request.open('GET', previewUrl, true);
console.log(previewUrl);
request.responseType = 'arraybuffer';
request.onload = function() {

  // Create offline context
  var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  var offlineContext = new OfflineContext(1, 2, 44100);

  offlineContext.decodeAudioData(request.response, function(buffer) {
    // Create buffer source
    var source = offlineContext.createBufferSource();
    source.buffer = buffer;
    // Create filter
    var filter = offlineContext.createBiquadFilter();
    filter.type = "lowpass";
    // Pipe the song into the filter, and the filter into the offline context
    source.connect(filter);
    filter.connect(offlineContext.destination);
    // Schedule the song to start playing at time:0
    source.start(0);

    var initialThreshold = 0.9,
      threshold = initialThreshold,
      minThreshold = 0.3,
      minPeaks = 30;

    do {
      peaks = getPeaksAtThreshold(buffer.getChannelData(0), threshold);
      threshold -= 0.05;
    } while (peaks.length < minPeaks && threshold >= minThreshold);

    var svg = document.querySelector('#svg');
    svg.innerHTML = '';
    var svgNS = 'http://www.w3.org/2000/svg';
    peaks.forEach(function(peak) {
      var rect = document.createElementNS(svgNS, 'rect');
      rect.setAttributeNS(null, 'x', (100 * peak / buffer.length) + '%');
      rect.setAttributeNS(null, 'y', 0);
      rect.setAttributeNS(null, 'width', 1);
      rect.setAttributeNS(null, 'height', '100%');
      svg.appendChild(rect);
    });

    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttributeNS(null, 'id', 'progress');
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'width', 1);
    rect.setAttributeNS(null, 'height', '100%');
    svg.appendChild(rect);

    //svg.innerHTML = svg.innerHTML; // force repaint in some browsers

    //var intervals = countIntervalsBetweenNearbyPeaks(peaks);

    //var groups = groupNeighborsByTempo(intervals, buffer.sampleRate);

    /*var top = groups.sort(function(intA, intB) {
    return intB.count - intA.count;
    }).splice(0, 5);*/

//result.style.display = 'block';
/*});
};
request.send();*/