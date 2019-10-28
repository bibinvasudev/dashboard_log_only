var ws_machineData = new WebSocket('ws://localhost:8080/param');
var machineData = {
    'MemoryStats': '45',
    'DiskUsage': '12,122',
    'MemoryUsage': '526',
    'CPUUtilisation': '2,222',
    'MapPlotValue': '12%'
}



ws_machineData.onmessage = function (msg) {
    var jsonObject = JSON.parse(msg);

    machineData.MemoryStats = jsonObject.MemoryStats
    machineData.DiskUsage = jsonObject.DiskUsage
    machineData.MemoryUsage = jsonObject.MemoryUsage
    machineData.CPUUtilisation = jsonObject.CPUUtilisation
    machineData.MapPlotValue = jsonObject.MapPlotValue
}

// var ws_machineDataConnectSetIntervalId = setInterval(() => {
//     if (_isWSOpenAndReady()) {
//         //ws_machineData.send()
//         clearInterval(ws_machineDataConnectSetIntervalId);
//     }
// }, 1000);

// function sendQuery(query) {
//     var query = document.querySelector('.query-input').value;
//     ws.send(query)
// }

function _isWSOpenAndReady() {
    return 1 === ws_machineData.readyState;
}

setInterval(() => {
    document.querySelector('.info-box-number.MemoryStats').innerHTML = machineData.MemoryStats;
    document.querySelector('.info-box-number.DiskUsage').innerHTML = machineData.DiskUsage;
    document.querySelector('.info-box-number.MemoryUsage').innerHTML = machineData.MemoryUsage;
    document.querySelector('.info-box-number.CPUUtilisation').innerHTML = machineData.CPUUtilisation;
}, 1000);