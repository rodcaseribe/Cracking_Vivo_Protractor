describe('Modem VIVO', function() {
    browser.waitForAngularEnabled(false);
    it('Login Poortal', function() {
        browser.get('http://192.168.0.200/login_frame.html');
        browser.sleep(5000);
        element(by.id('user')).sendKeys('XXXXXXX');
        element(by.id('pass')).sendKeys('XXXXXXX');
        element(by.id('acceptLogin')).click();
    });
    it('Firewall - regra0', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[0].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra1', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[1].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra2', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[2].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra3', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[3].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra4', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[4].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra5', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[5].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra6', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[6].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    it('Firewall - regra7', function() {
        browser.sleep(5000);
        browser.get('http://192.168.0.200/webs/settings-local-network.html');
        element(by.id('tabtitle-2')).click();
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('edit')[7].click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementById('PortForwardingAddText').click()");
        browser.sleep(5000);
        browser.executeScript("document.getElementsByClassName('btn-default-orange-small')[1].click()");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('http://192.168.0.200/webs/settings-local-network.html#');
    });
    
});
