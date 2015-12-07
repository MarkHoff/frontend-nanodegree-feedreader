<html>
<h1>Project 6 - Testing Using Jasmine</h1>

<p>For this project, I updated the /jasmine/spec/feedreader.js file to create the required tests to verify the functionality of a web-based application that reads RSS feeds.

Before I could write any of the tests, however, I had to familiarize myself with the structure and processes included in the web app. To do this, I had to examine the index.html, style.css, and app.js 
files to really understand what the site was supposed to do and how the designer went about making that happen.</br></br>

The main purpose of the app is to call the Google Feed Reader API.  This is mainly accomplished in the loadFeed function of the app.js file.</br></br>

There are also some functions associated with the index.html and style.css files as well, such as the appearing/disappearing menu.</br></br>

The feedreader.js Jasmine file consists of four test suites:</p>

<ul>
<li>RSS Feeds</li>
<li>The Menu</li>
<li>Initial Entries</li>
<li>New Feed Selection</li>
</ul>

<p>Each test suite consists of at least one test.  The tests range from the very simple (as in the RSS Feeds test suite) to relatively complex, such as the New Feed Selection test suite, which requires a simulation of an asynchronous call to the Google API.  
The last three test suites require some initial setup, so I created a beforeEach function to set up a variable that was created before the tests could be run.</br></br>

The tests were very instructive in teaching me how Jasmine runs and how valuable it can be to test new functionality as well as regression testing existing functionality to make sure nothing
is broken when code changes are made.</br></br>

To run the Jasmine application for this project do the following:</p>

<ol>
<li>Open index.html in this project.</li>
<li>On the top half of the web page you should see a header bar with some RSS feed topics below it.</li>
<li>Click on the menu icon in the header bar, which should make a menu appear from the left side.</li>
<li>Click on any of the RSS links to refresh the page with a new set of links.  The heading should also match the menu links.</li>
<li>On the bottom half of the web page are the Jasmine test restults.  The status bar across the top of the Jasmine output should be green.</li>
<li>Inside the status bar should show 6 specs and 0 failures (hopefully).  If not, the bar will be red and it will show how many specs failed.</li>
<li>If all tests pass, then the test suite descriptions will show below the status bar in black, with the individual tests in green below it.</li>
<li>The tests can be run individually by clicking on each link, or you can run all by clicking the 'run all' link above the status bar.</li>
</ol>
</html>