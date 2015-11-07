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
is broken when code changes are made.</p>
</html>