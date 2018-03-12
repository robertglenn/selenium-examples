# Purpose of this repo
I personally have trouble finding useful examples (beyond 'hello world' or snippets) of behavior tests.

There are definitedly some great resources out there that build off of selenium-webdriver, but many of them include other third-party libraries (which, at best, obscures behavior).

I hope to provide real-world examples of behavior tests for popular websites to better showcase how to write behavior tests with as few "magic" libraries as possible.

## How To Run:
* `npm install`
* `npm test`

# Automated Behavior Testing
Automated behavior testing replaces the vast majority of manual user acceptance testing (UAT) for the web, by simulating a user's interactions with a web page.

### Useful Links
* [Cucumber](https://cucumber.io/) - "automated acceptance tests written in a behavior-driven development (BDD) style" (from [Wikipedia](https://en.wikipedia.org/wiki/Cucumber_(software)))
* [Selenium](http://www.seleniumhq.org/) - "a portable software-testing framework for web applications" (from [Wikipedia](https://en.wikipedia.org/wiki/Selenium_(software)))
* Check out the [Webdriver Javascript API](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)

# Thoughts
Manual user acceptance testing (UAT) can be extremely expensive, but is often considered to be worth the price as it is intended to mitigate the occurrance of costly defects. However, with technologies like [Selenium](http://www.seleniumhq.org/) and [Cucumber](https://cucumber.io/), you can encode acceptance criteria (AC) as test scenarios, and execute them against real-live instances of common web browsers.

With selenium/cucumber and the use of continuous integration, delivery and deployment (CI/CD) tools, you can require a battery of automated UAT tests (also referred to as "functional", "behavioral", "regression", or "BDD" tests) to succeed before continuing along various branches of a pipeline. It is also possible to trigger the BDD tests as part of a source control hook, allowing you to begin validating your code even on your local machine, further avoiding the chance of bugs infiltrating a shared repo.

### Development
(beware, this uses non-standard, but perhaps sensible, distinctions; I'm not sure anyone, other than myself, use these definitions)
Generally, there really are two types of functional tests: behavioral and regression.

Behavioral tests are the signature tool of "Behavior Driven Development" which suggests you write behavioral tests as part of the Definition of Done for a story (in the parlance of Scrum/XP). Behavioral tests are expected to encode the acceptance criteria of the story, the intended behavior of the system under test (in this case, you specifically exposed with a web interface).

It is perhaps considered customary to author such tests prior to authoring the code that achieve's their advertised behavior. I would offer that doing so may lead you to writing more similar tests, and perhaps more similar code, which, arguably, is a positive thing, as it promotes consistency.

Regression tests are somewhat the opposite. They commonly encode the "expected behavior" of a bug report (i.e. what you _would_ expect to happen, were the system behaving properly). They are essentially written the same way as behavioral tests, both in content and mechanics.

I would say these tests are really one in the same, simply viewed thru different lenses of purpose. Probably, the former is thought of more in the "green field" (or new codebase) space, whereas the latter might be more in the so-called "brown field" (legacy codebase) space.

#### Selenium IDE
The [Selenium IDE](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/) plugin for Firefox is also certainly worth mentioning. I find the tool is ideal for preparing a migration from one front-end web technology to another (including beyond simply one JavaScript view library to another), when an adequate test suite is unavailable. It's also highly worth considering if you are attempting to introduce behavior tests for the first time.

With the plugin, you can record interactions with a live web page, and then export the scenarios into a selection of popular languages. Beyond the obvious benefits gained from these recordings (i.e. having tests), the resulting test code may also obviate some weirdness in your page's DOM topology (e.g. elements found by long css selectors), which may be worth addressing to promote consistency and simplicity.

### Refactor Your Tests
It is not easy to adhere to a practice of driving your development with tests written in a Red-Green-Refactor fashion (i.e. writing the test first, even before implementing the function under test). Moreover, it is not uncommon to let slip the quality of your test suite over time, allowing duplication, cruft, and dead code.

It is imparative to proactively refactor, prune and improve your test suite, especially your functional tests.

By continuously refactoring, you will keep a lean test suite, and will be able to build off of it quickly, leveraging old code to accelerate the authoring of new. You probably would even find you have a higher degree of uniformity across actual system elements, as you are attending to the upkeep of two codebases (your project and your tests), and will thus treasure consistency, which in turn, arguably, provides a better experience for your consumers, anyway.

### Conclusion
Whatever you call them, my personal advice is to write them. Tie them to the definition of done for a unit of work. Run them as part of your CI/CD pipeline. Refactor them so that you don't find yourself looking for the same login element at the beginning of every test.

# Gotchas
* Some characters confuse and enrage selenium and/or cucumber.
  * cucumber does not seem to like parentheses in feature definitions

# Shout outs
* I'm using [Matt-B/cucumber-js-selenium-webdriver-example](https://github.com/Matt-B/cucumber-js-selenium-webdriver-example) heavily as an example, at least to get off the ground.
