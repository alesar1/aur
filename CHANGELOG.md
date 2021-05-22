# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2021-05-22

### Added
* Add record key to `list records` output (#44)
* Add `--project` filter to `list records` (#62)

### Changed
* Make command syntax and help sensible to `use12hours` in `config.yaml` (#44, #54)

### Fixed
* Fix Docker image labels (#35)

## [0.4.0] - 2021-05-20

### Added
* Add support for Bash autocompletion (#25)
* Add support for Snap (#31)
* Add filter for billable records (#33)

### Changed
* Use non-error output for `timetrace version` (#45)
* Colorize and stylize tables (#26, #48, #49)

## [0.3.1] - 2021-05-18

### Changed
* Introduce the `today` and `yesterday` aliases for `timetrace list records` (#32)
* Preview the target record and ask for confirmation when deleting a record (#37)

## [0.3.0] - 2021-05-17

### Added
* `timetrace delete record` command (#22)

### Changed
* Add project name to the output of `list records` (#24)

## [0.2.1] - 2021-05-16

### Changed
* Beautified output of time durations (#20)

### Fixed
* Fix `timetrace status` if there was no time tracking yet (#18)

## [0.2.0] - 2021-05-16

### Added
* `timetrace list records` command (#16)

## [0.1.4] - 2021-05-14

### Fixed
* Fix calculation of total tracked time

## [0.1.3] - 2021-05-14

### Fixed
* Fix determination of latest stored record

## [0.1.2] - 2021-05-14

### Fixed
* Support slashes and back-slashes in project keys (#9)

## [0.1.1] - 2021-05-14

### Fixed
* Fix status report for situations where time tracking is not active (#7)

## [0.1.0] - 2021-05-13

### The initial timetrace release.
