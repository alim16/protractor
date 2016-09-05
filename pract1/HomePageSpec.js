var HomePage = function(){
    this.centerStageButtons = element(by.css(".center.stage-buttons"));
    
    this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
    this.viewOnGitHubButton = this.centerStageButtons.element(by.css(".btn-primary"));
    
    this.viewOnGitHubButton = this.centerStageButtons.element(by.css(".btn-warning"));
};

describe('angularjs.org', function(){
    beforeEach(function{
               browser.get('https://angularjs.org/');
               
               });
    it('should have three buttons', function(){
        expect(homePag.viewOnGitHubButton.isDisplayed()).toBe(true);
    });

});