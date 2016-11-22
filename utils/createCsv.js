define(['./downloadFile.js', './UAparser.js'], function(downloadFile, UAParser){
    
    function createCsv(dataArr){
        var parser = new UAParser();
        var ua = parser.getResult();
        var fileName = [ua.browser.name, ua.browser.version, ua.os.name, +new Date(), '.csv'].join('-');
        var browserData = [
            ua.browser.name,
            ua.browser.version,
            ua.engine.name,
            ua.engine.version,
            ua.os.name,
            ua.os.version
        ];

        var csvContent = browserData.concat(dataArr).join('\t');
        console.log(csvContent)

        downloadFile(fileName,csvContent); 
    }

    return createCsv;
});
