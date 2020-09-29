# Maintainer: Sumner Evans <sumner.evans98 at gmail dot com>

pkgbase='sublime-music-git'
pkgname=('sublime-music-git')
_module='sublime-music'
pkgver=v0.11.9.r0.gd454b90
pkgrel=2
pkgdesc='A native Subsonic/Airsonic/*sonic client for Linux. Build using Python and GTK+.'
url='https://sublimemusic.app'
provides=('sublime-music')
conflicts=('sublime-music')
depends=(
    'python'
    'python-bleach'
    'python-dataclasses-json'
    'python-dateutil'
    'python-deepdiff'
    'python-fuzzywuzzy'
    'python-gobject'
    'python-levenshtein'
    'python-mpv'
    'python-peewee'
    'python-requests'
    'python-semver'
)
optdepends=(
    'libnm-glib: for changing the Subsonic server address depending on what SSID you are connected to'
    'libnotify: for system song notification support'
    'python-keyring: support for storing passwords in the system keyring'
    'python-pychromecast: support for casting to Chromecast devices'
    'python-bottle: support for casting downloaded files to Chromecasts on the same LAN'
)
makedepends=(
    'python-setuptools'
    'python-sphinx'
)
license=('GPL3')
arch=('any')
source=(
    'sublime-music-git::git+https://gitlab.com/sublime-music/sublime-music.git'
)
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
    cd "${srcdir}/${pkgname}"
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    # Move all of the package data resources to ${pkgdir}/usr/share/sublime-music
    data_dir=${pkgdir}/usr/share/sublime-music
    mkdir -p $data_dir/adapters/subsonic $data_dir/dbus $data_dir/ui
    pushd ${pkgdir}/usr/lib/python3.8/site-packages/sublime_music
    mv adapters/icons $data_dir/adapters
    mv adapters/images $data_dir/adapters
    mv adapters/subsonic/icons $data_dir/adapters/subsonic
    mv dbus/mpris_specs $data_dir/dbus
    mv ui/icons $data_dir/ui
    mv ui/images $data_dir/ui
    popd

    desktop-file-install --dir=${pkgdir}/usr/share/applications sublime-music.desktop

    pushd docs
    make man
    install -Dm644 ./_build/man/sublime-music.1 "${pkgdir}/usr/share/man/man1/sublime-music.1"
    popd

    pushd logo/rendered
    install -Dm644 16.png ${pkgdir}/usr/share/icons/hicolor/16x16/apps/sublime-music.png
    install -Dm644 22.png ${pkgdir}/usr/share/icons/hicolor/22x22/apps/sublime-music.png
    install -Dm644 32.png ${pkgdir}/usr/share/icons/hicolor/32x32/apps/sublime-music.png
    install -Dm644 36.png ${pkgdir}/usr/share/icons/hicolor/36x36/apps/sublime-music.png
    install -Dm644 48.png ${pkgdir}/usr/share/icons/hicolor/48x48/apps/sublime-music.png
    install -Dm644 64.png ${pkgdir}/usr/share/icons/hicolor/64x64/apps/sublime-music.png
    install -Dm644 72.png ${pkgdir}/usr/share/icons/hicolor/72x72/apps/sublime-music.png
    install -Dm644 96.png ${pkgdir}/usr/share/icons/hicolor/96x96/apps/sublime-music.png
    install -Dm644 128.png ${pkgdir}/usr/share/icons/hicolor/128x128/apps/sublime-music.png
    install -Dm644 192.png ${pkgdir}/usr/share/icons/hicolor/192x192/apps/sublime-music.png
    install -Dm644 512.png ${pkgdir}/usr/share/icons/hicolor/512x512/apps/sublime-music.png
    install -Dm644 1024.png ${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/sublime-music.png
    popd
}
