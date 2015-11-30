/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
	
    /* The RSS Feeds test suite tests the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   
    describe('RSS Feeds', function() {
                        
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('all have URLs', function() {
           allFeeds.forEach(function(element) {
           	expect(element.url).toBeDefined();
           	expect(element.url).not.toBe('');
           });
         });
         
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
         it('all have names', function() {           
           allFeeds.forEach(function(element) {
           	expect(element.name).toBeDefined();
           	expect(element.name).not.toBe('');
           });
         });
    });

    /* The menu test suite tests the menu functions */
   
	describe('The menu', function() {
        var menu = $('.menu-icon-link');
			
        /* This test ensures the menu element is
         * hidden by default.
         */
        
		it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
			});
			
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
         
         it('is visible when clicked, and disappears when clicked a second time', function() {
          //Click the menu one time, expect menu to appear
                menu.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
          //Click the menu a second time, expect the menu to disappear 
                menu.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
           
        });
	});
	
    /* Test suite 'Initial Entries' */
   
   describe('Initial Entries', function() {
   	var entry;

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        /* Simulate the asynchronous function */
        beforeEach(function(done) {
                //entry = $('.feed').html();  
                loadFeed(0, done);	
        });
               
        it('should have at least one entry', function(done) {
            expect($('.feed').html().length).toBeGreaterThan(0);
            done(); 
        });
   	
   });

    /* Test suite 'New Feed Selection' */

	describe('New Feed Selection', function() {
		var entry;

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function the content actually changes.
         */
        
        /* Simulate the asynchronous function.
         * Load the feed, set it equal to variable 'entry'
         * and then reload the feed with another feed id
         * The two load feeds should not be equal */
        beforeEach(function(done) {
        	loadFeed(0, done);
        	entry = $('.feed').html();
        	loadFeed(1, done);
        });	
               
        it('content changes when a new feed is loaded', function(done) {
            loadFeed(2, done);
            expect($('.feed').html()).not.toEqual(entry);
            done();
        });
	});
}());
