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
            for(var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url).not.toBe('');
            }
         });
         
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
         it('all have names', function() {
            for(var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name).not.toBe('');
            }
         });
    });


    /* The menu test suite tests the menu functions */
   
	describe('The menu', function() {
        var menu;

        beforeEach(function() {
            menu = $('.menu-icon-link');
        });
			
        /* This test ensures the menu element is
         * hidden by default.
         */
        
		it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
			});
			
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
         
         it('is visible when clicked, and disappears when clicked a second time', function() {
            if ($("body").hasClass("menu-hidden")) {
                menu.click();

                expect($("body").hasClass("menu-hidden")).toBe(false);
            } 

            if (!$("body").hasClass("menu-hidden")) {
                menu.click();

                expect($("body").hasClass("menu-hidden")).toBe(true);
            }
        });
	});
	
    /* Test suite "Initial Entries" */
   
   describe('Initial Entries', function() {
   	var entry;

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        
        /* Simulate the asynchronous function */
        beforeEach(function(done) {
            loadFeed(0, (function() {
                entry = $(".feed").html();
            }));

            done();
        });
               
        it('are present', function() {
            expect(entry).not.toBe(null);
        });
   	
   });

    /* Test suite "New Feed Selection" */

	describe('New Feed Selection', function() {
		var entry;

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function the content actually changes.
         */
        
        /* Simulate the asynchronous function */
        beforeEach(function(done) {
            loadFeed(1, (function() {
                entry = $(".feed").html();
            }));

            done();
        });

        it('content changes when a new feed is loaded', function(done) {
            loadFeed(2, done);

            expect($(".feed").html()).not.toEqual(entry);
        });
	
	});

}());
