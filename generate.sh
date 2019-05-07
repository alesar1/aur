#!/bin/bash
set -e

AUR_INKSCAPE_GIT_UPSTREAM="https://aur.archlinux.org/inkscape-git.git"
LOCAL_TEMP_DIR="$(mktemp -d)"
git clone "${AUR_INKSCAPE_GIT_UPSTREAM}" "${LOCAL_TEMP_DIR}"
cat "${LOCAL_TEMP_DIR}/PKGBUILD" |
  gawk \
    'BEGIN {
        print "# Maintainer: Lucas Lugao <lugaosmurf@gmail.com>"
    }
    /^# Maintainer:/ {
        $2 = "Contributor:"
    }
    /gitlab/ {
        match($0, /(https[^'"'"'"]*)/, a)
        inkscape_upstream = a[1]
    }
    /^pkgver=/ {
        match($0, /^pkgver=(.*)/, a)
        inkscape_version = a[1]
    }
    /CMakeLists/ {
        $0 = sprintf("  %s \"%s\"", "printf %s", inkscape_version)
    }
    /^pkgdesc/ {
        gsub("\""," (shallow clone)\"", $NF)
    }
    /^pkgname/ {$0="pkgname=inkscape-shallow-git"}
    /^build()/ {
        printf("prepare(){\n  git clone --depth 1 " inkscape_upstream " \"$_gitname\"\n}\n\n")
    }
    !/^source/ && !/^sha1sums/ && !/^#/ {print}
    ' > PKGBUILD
makepkg --printsrcinfo > .SRCINFO

if [ ! -z "$(git status --porcelain)" ]; then
    git add . 
    NEW_VERSION="$(cat PKGBUILD | awk -F= '/pkgver/{printf("%s",$2)}')"
    git commit -m "Automated update to version ${NEW_VERSION} at $(date -u)"
    git push
fi

rm -r -f "${LOCAL_TEMP_DIR}"