# Readme

This project includes the PKDBUILD file used for the aur repository to download the [Pharo Launcher](https://github.com/pharo-project/pharo-launcher/) in archlinux.

The aur repository is [here](https://aur.archlinux.org/packages/pharo-launcher/).

Please add commentaries to the aur repository for any issues.

## Build locally

To build locally the project, first clone this project.
Then

```sh
makepkg -si
```

## Update .SRCInfo

```sh
makepkg --printsrcinfo > .SRCINFO
```
