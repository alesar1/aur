# Maintainer: nightuser <nightuser.android@gmail.com>

pkgname=glib2-static
pkgver=2.62.4
pkgrel=3
pkgdesc="Low level core library: Static library"
url="https://wiki.gnome.org/Projects/GLib"
license=(LGPL2.1)
arch=(x86_64)
depends=()
makedepends=(gettext zlib libffi shared-mime-info python libelf git util-linux meson dbus)
checkdepends=(desktop-file-utils)
options=('!docs' '!libtool' '!emptydirs' '!strip' 'staticlibs')
source=(https://gitlab.gnome.org/GNOME/glib/-/archive/$pkgver/glib-$pkgver.tar.gz
        CVE-2020-6750.patch)
sha256sums=('479ae4d3e37123765c4e850a99bf4846008e7141446118250f5f017d988e7a81'
            '220ff38e418a470b7790e65a2c05527793110c38a1105552b93be884230215f7')

prepare() {
  # https://mail.gnome.org/archives/distributor-list/2020-February/msg00001.html
  git apply -3 ../CVE-2020-6750.patch
}

build() {
  arch-meson "glib-$pkgver" _build \
    --default-library static \
    --buildtype release \
    -Dselinux=disabled \
    -Dman=false \
    -Dgtk_doc=false \
    -Dinternal_pcre=false
  ninja -C _build
}

check() {
  meson test -C _build --no-suite flaky --timeout-multiplier 2 --print-errorlogs
}

package() {
  DESTDIR="$pkgdir" meson install -C _build

  # Only install static library
  rm -rf "$pkgdir"/usr/{bin,include,share,lib/glib-2.0,lib/pkgconfig}
}
