# plain old javascript

this folder is for those javascript libs that are not available as Common/SystemJs, AMD or UMD modules.
and where we also fail to integrate via bower because the package doesn't exists and the github repo doesn't contain
any final built solution (and we don't want to end-up crawling trough hundrets lines of code and importing dozens of files)

well, we could take our time to fork the repo, build the branch/tag of desire and commit the final files to our fork - and
integrate trough bower in the end :)

but in some cases this is just the easiest way, like for the following:

* medium-editor - it is included as npm module but it is plain-old-js too, but imported as direct require so it is member of the bundle: https://libraries.io/npm/medium-editor

> we integrate such libraries with a cool `require('script!./file.js')` call directly in our .ts files - this will work trough
the webpack "script-loader" and act like a normal <script> tag which would be in your index.html

### thoughts

it's a good work-around but we should see it as a TODO to get rid of any libs here - rework it as a fork trough bower and
try to wrap it around an AMD module style to get a full integration into our bundle -> because all of this includes will cause
additional requests (at least it will mostly/only be in the editor case on our cloud, not in the published website)

on the other side, with http2.0, the amount of requests will become irrelevant anyways...