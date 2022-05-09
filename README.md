# promo-button, by [Tincre`.dev`](https://tincre.dev/promo)

One button to rule them all. At least all the ads ones. Seriously, don't 
do ads any other way; the rest just suck. 

## Making ads easy again

A [React](https://react.org) library to quickly add the button that powers
[b00st.com](https://b00st.com) to your apps, sites, and web properties. 

### Installation

Use your favorite package manager to rock installation of the promo button.

#### Yarn
```
yarn add @tincre/promo-button # -D if you want this as a dev dep
```
#### Npm

```
npm install @tincre/promo-button # --save-dev if you want it as a dev dep
```

### License 

This code is free to use for your commercial or personal projects. It is open-source 
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license 
directly via [LICENSE](/LICENSE) herein.

### Development 

#### Releases 

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to get the job done.

Currently, only @thinkjrs has the ability to release. The following section 
is written for memory.

##### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices. 

> Ensure that tests :white_check_mark: pass during this process prior to
releasing via npm.

##### Test release 

To do a proper release, ensure you're in the base repo directory and run 
`npm publish . --access public --dry-run`.

##### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`. 

:tada: That's it! :tada:
