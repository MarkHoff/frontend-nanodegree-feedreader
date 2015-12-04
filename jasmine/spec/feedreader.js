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
                expect(element.url.length).toBeGreaterThan(0);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('all have names', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).toBeGreaterThan(0);
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
        /* Calls the `loadFeed` function with a callback `done`
         * to ensure that it's complete.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Once `loadFeed` function is called and completes its work,
         * there is at least one .entry element within the .feed
         * container.
         */
        it('has at least one entry', function(done) {
            var entries = $('.feed').find('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    /* Test suite 'New Feed Selection' */
    describe('New Feed Selection', function() {
        var feed1, feed2;

        /* Calls the `loadFeed` function with callbacks to ensure that
         * they're complete.
         */
        beforeEach(function(done) {
            /* Make sure that there are at least two feeds to test */
            expect(allFeeds.length >= 2).toBe(true);

            /* Load the first feed at index 0 */
            loadFeed(0, function() {
                /* Set variable feed1 to the contents of the first feed */
                feed1 = $('.feed').find('.entry').text();
                /* Load second feed using a different index */
                loadFeed(1, function() {
                    /* Set variable feed2 to the contents of a different feed index */
                    feed2 = $('.feed').find('.entry').text();
                    done();
                });
            });
        });

        /* Tests that feed1 is not equal to feed2, which means
         * that the content has changed, which is what is expected.
         */
        it('changes content', function(done) {
            //expect(feed1 != feed2).toBe(true);
            expect(feed1).not.toEqual(feed2);
            done();
        });
    });

}());