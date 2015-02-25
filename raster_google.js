var page = require('webpage').create();
page.viewportSize = { width: 1200, height: 1200 };
page.open('http://192.168.0.5:8080/month.html', function () {
    page.render('gchart.png');
    phantom.exit();
});