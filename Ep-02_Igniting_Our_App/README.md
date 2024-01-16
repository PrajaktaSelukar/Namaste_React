# 1. What is npm (definitely not Node Package Manager) ?
Ans - It's a package manager for JavaScript and a default part of the Node.js ecosystem. NPM allows developers to discover, share, and install packages of reusable JavaScript code and manage project dependencies. Actually, NPM originally stood for "Node Package Manager." However, as the NPM ecosystem evolved and expanded beyond Node.js-specific packages, the acronym itself was changed to avoid the sole association with Node.js.

# 2. package.json is a configuration for npm (using npm init).

# 3. What are the different types of Dependencies?
a. Normal Dependencies (production):
dependencies includes packages that are necessary for the application to run in production. These packages are required for the application to function properly in its runtime environment.
Examples: Web frameworks (Express.js), utility libraries (Lodash), database connectors (Mongoose).

b. DevDependencies (development) (use -D to install dev dep):
devDependencies includes packages that are only needed during the development phase. They are not required for the production runtime of the application.
Examples: Testing frameworks (Jest, Mocha), build tools (Webpack, Gulp), code linters (ESLint), development utilities.

# 4. What is Bundler (Parcel, Webpack)? Why do we need it?
Ans. - A bundler in web development is a tool that combines various assets, such as JavaScript files, CSS stylesheets, images, and other resources, into a single or a few optimized files for deployment.

We need a bundler because if we send the entire code as it is, in the form of those multiple js, html, css files, this is really not optimum coz the browser needs to make lots of network calls to fetch all these numberous files. So instead, bundling up the code generates a limited no. of files to be fetched. This makes our app faster and more lightweight.

Popular Bundlers:
a. Webpack: One of the most popular bundlers that handles module bundling, asset management, and code transformation. 
b. Parcel: A fast, zero-config bundler that requires minimal setup. Parcel is a Beast that has many more superpowers as well!! It is really easy-to-configure.
c. Rollup: Known for its focus on ES6 module bundling.

# 5. What are ^ and ~ symbols?
Ans. In a package.json file used by Node.js projects, the symbols ^ and ~ are used within the version strings of dependencies to define version ranges. These symbols play a role in determining which versions of a package will be installed when running npm install. It's safe to put ^ symbol bcoz lot of things can break.

a. ^ (Caret Symbol) - Ex: "dependencies": { "package-name": "^1.2.3" }:
Usage: The caret symbol (^) before a version number specifies a compatible version range.
Behavior: When running npm install, the caret installs the latest compatible minor or patch release but keeps the major version fixed. For example, ^1.2.3 allows versions from 1.2.3 up to, but not including, 2.0.0.

b. ~ (Tilde Symbol) - Ex: "dependencies": { "package-name": "~1.2.3" }:
Usage: The tilde symbol (~) before a version number specifies a range that allows only for compatible patch-level changes.
Behavior: When running npm install, the tilde installs the latest compatible patch release but keeps the minor version fixed. For example, ~1.2.3 allows versions from 1.2.3 up to, but not including, 1.3.0.

# 6. Difference between package.json and package-lock.json.
# a. package.json:
Purpose: 
    The package.json file is a manifest file that contains metadata and configuration details about the project.
Contents:
    i. Project Metadata: Name, version, description, author, license, and other details about the project.
    ii. Dependencies: Lists the project's dependencies (both direct and indirect) and their versions.
    iii. Scripts: Custom scripts defined to execute specific tasks (e.g., build, test, start).
    iv. DevDependencies: Development-specific dependencies required for development and testing (not needed for production).
Behavior:
    Created manually or generated using npm init to set up a new project.
    Developers explicitly add or update dependencies in this file.
    Updated whenever developers add, update, or remove dependencies using npm install.

# b. package-lock.json:
Purpose: 
    The package-lock.json file is automatically generated by NPM to provide a detailed, deterministic, and locked-down representation of the project's dependency tree.
Contents:
    i. Dependency Tree: Contains an exact, nested, and complete list of all installed dependencies, including their versions and sub-dependencies.
    ii. Versions and Hashes: Provides specific versions and integrity hashes to ensure reproducible builds.
Behavior:
    Automatically generated by NPM when dependencies are installed or updated (npm install or npm update).
    Ensures deterministic and reproducible builds by fixing versions and preventing unexpected changes in dependencies across different environments or installations.
    Should not be manually modified, as it's intended to be a generated file that NPM maintains.

integrity is a hash inside package-lock.json


# 7. A transitive dependency refers to a dependency that is indirectly required by your project due to another dependency. Let's break down this concept:

a. Direct Dependency: These are the packages explicitly listed in your project's package.json file under the dependencies or devDependencies section.
b. Transitive Dependency: When a package A depends on another package B, and your project depends on package A, then package B becomes a transitive dependency of your project.

# 8. npx parcel index.html
npm - installs a package
npx - executes a package ( It allows you to run binaries from packages installed in your node_modules directory without having to install them globally or permanently.)

# 9. cdnLinks is not a good way to bring React in the app. It's better to use from package.json so that if version changes we won't have issues
    npm install react
    npm install react-dom

# 10. Inside App.js, you can use the import and export statements to control the module's dependencies and exports using type="module" in script tag
    <!--script type="module" src="./App.js"></script !-->
    Otherwise it will treat is as Normal App.js and import export won't be allowed

# 11. Parcel
    -   Dev build
    -   runs local server
    -   HMR - Hot Module Replacement => automatically reloads
    -   File watching Algorithm - written in C++
    -   Caching - Faster builds
    -   Image Optimization
    -   Minification of files
    -   Bundling
    -   Compress
    -   Consistent Hashing
    -   Code Splitting
    -   Differential Bundling - support older browsers
    -   Diagnostics
    -   Error Handling
    -   Loads in HTTPs mode using --https
    -   different dev and prod build
    -   Tree shaking - remove unused code
    Parcel makes React more fast
    Parcel reduced the build everytime it runs using parcel cache

# build prod
    npx parcel build index.html
    While running this command it gives error because in package.json we have main as App.js. So it confuses and throws error
     

