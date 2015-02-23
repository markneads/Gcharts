var page = require('webpage').create();
page.viewportSize = { width: 1200, height: 1200 };
page.open('http://localhost:63342/googlecharts/file.html?Use_Id=busyengines_d_20150214.csv', function () {
    page.render('1.png');
    phantom.exit();
});