# @asl-19/js-dom-utils changelog

## Unreleased

Development tooling only:

- Update ESLint to 10, @asl-19/eslint-config to 1.0 and happy-dom to 21

## 1.1.0 [2026-10-14]

- `announce`: Insert text with `textContent` instead of `innerHTML`, so announcement text is no longer parsed as HTML
- `announce`: Fix `ReferenceError` in browsers without a `process` global
- `announce`: Delay the first announcement 100 ms after creating its live region (screen readers may ignore changes to a just-inserted live region), and remove announcements after 3 seconds
- `announce`: Replace deprecated `clip` with `clip-path`, and document parameters
- `focusElement`: Only add `tabindex="-1"` if the element isn’t already focusable, rather than overwriting an existing `tabindex` and removing it on blur

### Development

- Replace API Extractor and API Documenter with TypeDoc
- Add Vitest tests (happy-dom) for `announce` and `focusElement`
- Replace npm-run-all with npm-run-all2, remove package-changed and npm-check-updates, and add `outdated` scripts
- Add publint and a docs freshness check to `lint-test`
- Manage Node.js 24 and pinact with mise
- Add npm supply-chain gates (`.npmrc`, `devEngines`, `allowScripts`)
- Update TypeScript to 6.0, @asl-19/eslint-config to 0.11 and Prettier to 3.9, and compile with `module: "nodenext"`
- Pin GitHub Actions to commit SHAs, limit the workflow token to read-only, and run CI on pull requests
- Add agent instructions (`AGENTS.md`) and Claude Code permission settings

## [1.0.0](https://github.com/ASL-19/js-dom-utils/pulls?q=is%3Apr+milestone%3A1.0.0) [2025-08-15]

- Update dependencies [[#18](https://github.com/ASL-19/js-dom-utils/pull/18)]
- Migrate to ESM [[#19](https://github.com/ASL-19/js-dom-utils/pull/19)]

## [0.2.1](https://github.com/ASL-19/js-dom-utils/pulls?q=is%3Apr+milestone%3A0.2.1) [2023-08-28]

- Allowed null element to be passed to `focusElement` (will now log error if element is null) [[#14](https://github.com/ASL-19/js-dom-utils/pull/14)]

## 0.2.0 [2023-03-22]

- Updated `focusElement` to add options argument
- Added `announce`

## [0.1.3](https://github.com/ASL-19/js-dom-utils/issues?q=is%3Aclosed+milestone%3A0.1.3) [2020-10-21]

### Changes

- Add eslint-plugin-tsdoc [[#2](https://github.com/ASL-19/js-dom-utils/pull/2)]
- Switch to @asl-19/eslint-config, upgrade dependencies [[#4](https://github.com/ASL-19/js-dom-utils/pull/4)]
- Upgrade dependencies [[#6](https://github.com/ASL-19/js-dom-utils/pull/6)]

## 0.1.2 [2020-06-02]

First open-source release
