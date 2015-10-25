# Maintainer: Riley Trautman <asonix.dev@gmail.com>

_pkgname=liri-browser
pkgname=$_pkgname-git
pkgver=git
pkgrel=1
pkgdesc="A Web Browser using the QML Material framework from the Papyros Project"
arch=("i686" "x86_64")
url="https://github.com/liri-browser/liri-browser"
license=("GPLv3")
depends=("qt5-base" "qt5-webengine" "qml-material" "qt5-multimedia" "vlc")
makedepends=("git")
provides=("$_pkgname" "$pkgname")
conflicts=("$_pkgname")
install=$pkgname.install
source=("$pkgname::git+https://github.com/liri-browser/liri-browser.git"
        "liriplayer::git+https://github.com/pierremtb/liri-player.git"
        "qmlvlc::git+https://github.com/RSATom/QmlVlc.git"
        "yalibvlcwrapper::git+https://github.com/RSATom/ya-libvlc-wrapper.git"
        "libvlcsdk::git+https://github.com/RSATom/libvlc-sdk.git"
        "liri-browser.sh" "liri-browser.desktop" "$pkgname.install")
sha256sums=("SKIP" "SKIP" "SKIP" "SKIP" "SKIP" "SKIP" "SKIP" "SKIP")

pkgver() {
    cd "$pkgname"
    # cutting off 'foo-' prefix that presents in the git tag
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  pushd $(pwd) >> /dev/null

  cd "$srcdir/$pkgname"
  git submodule init
  git config submodule.dependencies/liri-player.url "$srcdir/liriplayer"
  git submodule update

  cd "dependencies/liriplayer"
  git submodule init
  git config submodule.dependencies/QmlVlc.url "$srcdir/qmlvlc"
  git submodule update

  cd "dependencies/QmlVlc"
  git submodule init
  git config submodule.libvlc_wrapper.url "$srcdir/yalibvlcwrapper"
  git submodule update

  cd "libvlc_wrapper"
  git submodule init
  git config submodule.libvlc-sdk.url "$srcdir/libvlcsdk"
  git submodule update

  popd >> /dev/null
	mkdir -p build
	cd build
	qmake "$srcdir/$pkgname"
	make
}

package() {
	cd build
	make INSTALL_ROOT="$pkgdir" install

  mkdir -p "$pkgdir"/usr/bin
  mkdir -p "$pkgdir"/usr/share/applications

  for i in 16x16 22x22 32x32 48x48 64x64 128x128 256x256; do
    install -Dm644 "$srcdir"/"$pkgname"/icons/liri-browser.png \
                   "$pkgdir"/usr/share/icons/hicolor/$i/apps/liri-browser.png
  done
  install -m755 ../liri-browser.sh \
                "$pkgdir"/usr/bin/liri-browser
  install -m755 ../liri-browser.desktop \
                "$pkgdir"/usr/share/applications/liri-browser.desktop
}

# Additional functions to generate a changelog

changelog() {
    cd "$pkgname"
    git log $1..HEAD --no-merges --format=" * %s"
}

gitref() {
    cd "$pkgname"
    git rev-parse HEAD
}
