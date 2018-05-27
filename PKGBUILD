# $Id$
# Maintainer: Giovanni 'ItachiSan' Santini <giovannisantini93@yahoo.it>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=webkit2gtk-mse
_pkgname=webkit2gtk
pkgver=2.20.2
pkgrel=1
pkgdesc="GTK+ Web content engine library - MSE enabled"
arch=(i686 x86_64)
url="https://webkitgtk.org/"
license=(custom)
depends=(libxt libxslt enchant geoclue2 gst-plugins-base-libs libsecret libwebp harfbuzz-icu gtk3 libnotify hyphen woff2)
makedepends=(gtk2 gperf gobject-introspection ruby gtk-doc cmake python python2)
optdepends=('gtk2: Netscape plugin support'
            'gst-plugins-base: free media decoding'
            'gst-plugins-good: media decoding'
            'gst-libav: nonfree media decoding')
source=(https://webkitgtk.org/releases/webkitgtk-${pkgver}.tar.xz{,.asc}
        "gtk-doc.diff::https://git.archlinux.org/svntogit/packages.git/plain/trunk/gtk-doc.diff?h=packages/webkit2gtk&id=e01bbc2df8214c4e7198ca5e5f6675c1231e7f8b")
sha256sums=('dffe93a241f03f1c73b369f4e323e4d8f12e39d33d5515948cbf454ca4b526e2'
            'SKIP'
            '4f116b4508d4501498d1e1483555bc5d4e3f5504c5a2f3ec6a21c646b874cdb4')
validpgpkeys=('D7FCF61CF9A2DEAB31D81BD3F3D322D0EC4582C3')
provides=($_pkgname)
conflicts=($_pkgname)

prepare() {
  mkdir build
  cd webkitgtk-$pkgver
  patch -Np1 -i "$srcdir/gtk-doc.diff"
  sed -i '1s/python$/&2/' Tools/gtk/generate-gtkdoc
}

build() {
  cd build
  # To use ninja: cmake -G Ninja \
  # To build MiniBrowser for testing: -DENABLE_MINIBROWSER=ON \
  cmake \
    -DPORT=GTK \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_SKIP_RPATH=ON \
    -DENABLE_GTKDOC=ON \
    -DLIBEXEC_INSTALL_DIR=/usr/lib \
    -DLIB_INSTALL_DIR=/usr/lib \
    -DPYTHON_EXECUTABLE=/usr/bin/python2 \
    -DENABLE_MEDIA_SOURCE=ON \
    ../webkitgtk-$pkgver
  make
}

package() {
  DESTDIR="$pkgdir" make -C build install

  cd webkitgtk-$pkgver
  find Source -name 'COPYING*' -or -name 'LICENSE*' -print0 | while IFS= read -d $'\0' -r _f
  do
    echo "### $_f ###"
    cat "$_f"
    echo
  done | install -Dm644 /dev/stdin "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
