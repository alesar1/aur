# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=webkit2gtk-unstable
pkgver=2.15.92
pkgrel=1
pkgdesc="GTK+ Web content engine library"
arch=(i686 x86_64)
url="https://webkitgtk.org/"
license=(custom)
depends=(libxt libxslt enchant geoclue2 gst-plugins-base-libs
         libsecret libwebp harfbuzz-icu gtk3 libnotify hyphen)
makedepends=(gtk2 gperf gobject-introspection ruby gtk-doc cmake python python2)
optdepends=('gtk2: Netscape plugin support'
            'gst-plugins-base: free media decoding'
            'gst-plugins-good: media decoding'
            'gst-libav: nonfree media decoding')
options=(!emptydirs)
source=(https://webkitgtk.org/releases/webkitgtk-${pkgver}.tar.xz{,.asc})
sha256sums=('2aede64671a2ae5576bb43960d199d35d5a4e3e9b725d4d34a1004fc98f2eadc'
            'SKIP')
validpgpkeys=('D7FCF61CF9A2DEAB31D81BD3F3D322D0EC4582C3')

provides=('webkit2gtk')
conflicts=('webkit2gtk')

prepare() {
  mkdir build

  cd webkitgtk-$pkgver
  sed -i '1s/python$/&2/' Tools/gtk/generate-gtkdoc
  rm -r Source/ThirdParty/gtest/
}

build() {
  cd build
  cmake -DPORT=GTK -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_SKIP_RPATH=ON -DCMAKE_INSTALL_PREFIX=/usr \
        -DLIB_INSTALL_DIR=/usr/lib -DLIBEXEC_INSTALL_DIR=/usr/lib/webkit2gtk-4.0 \
        -DENABLE_GTKDOC=ON -DPYTHON_EXECUTABLE=/usr/bin/python2 ../webkitgtk-$pkgver
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  install -m755 -d "$pkgdir/usr/share/licenses/webkit2gtk-unstable"
  cd "$srcdir/webkitgtk-$pkgver/Source"
  for f in $(find -name 'COPYING*' -or -name 'LICENSE*'); do
    echo $f >> "$pkgdir/usr/share/licenses/webkit2gtk-unstable/LICENSE"
    cat $f >> "$pkgdir/usr/share/licenses/webkit2gtk-unstable/LICENSE"
    echo "" >> "$pkgdir/usr/share/licenses/webkit2gtk-unstable/LICENSE"
  done
}
