# Maintainer: Martin Dünkelmann<nc-duenkekl3@netcologne.de>
# Contributor: Shaoyu Tseng<zandimna@autistici.org>
# Contributor: Daniel Egeberg <daniel.egeberg@gmail.com
# Contributor: Sławomir Kowalski <suawekk+aur@gmail.com>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Timm Preetz <timm@preetz.us>
# Contributor: Michael 'manveru' Fellinger <m.fellinger@gmail.com>
# Contributor: Dave Pretty <david dot pretty at gmail dot com>

pkgname=anki-git
pkgver=2.1.46
pkgrel=2
pkgdesc="Helps you remember facts (like words/phrases in a foreign language) efficiently"
url="http://ankisrs.net/"
license=('AGPL3')
arch=('any')
provides=('anki')
conflicts=('anki' 'anki20' 'anki-official-binary-bundle')
depends=(
    # anki and aqt
    'python-beautifulsoup4'
    'python-requests'
    'python-wheel'

    # anki
    'python-pysocks' # requests[socks]
    'python-decorator'
    'python-protobuf'
    'python-orjson'
    'python-distro'

    # aqt
    'python-send2trash'
    'python-markdown'
    'python-jsonschema'
    'python-pyaudio'
    'python-pyqtwebengine'
    'python-flask'
    'python-flask-cors'
    'python-waitress'
    'python-pyqt5'
)
makedepends=(
    'git'
    'rsync'

    'bazel'
    'clang'

    'maturin'
    'rust'

    'python-pip'
    'python-mypy-protobuf'
    'npm'
    'typescript'
)
optdepends=(
    'lame: record sound'
    'mpv: play sound. prefered over mplayer'
    'mplayer: play sound'
)
source=(
    $pkgname::git+https://github.com/dae/anki.git

    #ankitects-anki-core-i18n-master.tar.gz::https://github.com/ankitects/anki-core-i18n/tarball/master
    #ankitects-anki-desktop-ftl-master.tar.gz::https://github.com/ankitects/anki-desktop-ftl/tarball/master
    #ankitects-anki-desktop-i18n-master.tar.gz::https://github.com/ankitects/anki-desktop-i18n/tarball/master
)
sha512sums=('SKIP')

pkgver() {
    cd "$pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$pkgname"

    # Disable foring a specific bazel version to build with
    rm .bazelversion

    # Put translations in place.
    #ln -sf "$srcdir"/ankitects-anki-core-i18n-*/ rslib/ftl/repo
    #ln -sf "$srcdir"/ankitects-anki-desktop-ftl-*/ qt/ftl/repo
    #ln -sf "$srcdir"/ankitects-anki-desktop-i18n-*/ qt/po/repo
}

build() {
    cd "$pkgname"

    export CC=/usr/bin/clang
    export CXX=/usr/bin/clang++
    ./scripts/build
}

package() {
    cd "$pkgname"
    PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps bazel-bin/pylib/anki/anki-*.whl bazel-bin/qt/aqt/aqt-*.whl

    install -Dm755 qt/runanki.py "$pkgdir"/usr/bin/anki
    install -Dm644 qt/linux/anki.desktop "$pkgdir"/usr/share/applications/anki.desktop
    install -Dm644 qt/linux/anki.png "$pkgdir"/usr/share/pixmaps/anki.png
}
