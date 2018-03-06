# Maintainer: Adrià Arrufat <adria.arrufat+AUR@protonmail.ch>

pkgname=webkit2gtk-unstable
pkgver=2.19.91
pkgrel=2
pkgdesc="GTK+ Web content engine library"
arch=('i686' 'x86_64')
url="http://webkitgtk.org/"
license=('custom')
depends=(libxt libxslt enchant geoclue2 gst-plugins-base-libs
	 libsecret libwebp harfbuzz-icu gtk3 libnotify hyphen woff2)
makedepends=(gtk2 gperf gobject-introspection ruby gtk-doc cmake python python2 ninja)
optdepends=('gtk2: Netscape plugin support'
            'gst-plugins-base: free media decoding'
            'gst-plugins-good: media decoding'
            'gst-libav: nonfree media decoding')
conflicts=(webkit2gtk)
provides=(webkit2gtk)
options=('!emptydirs')

source=(http://webkitgtk.org/releases/webkitgtk-${pkgver}.tar.xz)
sha1sums=('d9e09c12989431b2992dfeea903923e8dec45748')

prepare() {
  [ -d build ] && rm -rf build
  mkdir build

  cd webkitgtk-$pkgver
  sed -i '1s/python$/&2/' Tools/gtk/generate-gtkdoc
  rm -r Source/ThirdParty/gtest/
  sed -i Source/cmake/FindEnchant.cmake \
    -e 's/(PC_ENCHANT enchant)/(PC_ENCHANT enchant-2)/' \
    -e 's/NAMES enchant$/NAMES enchant-2/'
}

build() {
  cd build
  cmake -DPORT=GTK -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_SKIP_RPATH=ON -DCMAKE_INSTALL_PREFIX=/usr \
        -DLIB_INSTALL_DIR=/usr/lib -DLIBEXEC_INSTALL_DIR=/usr/lib/webkit2gtk-4.0 \
        -DENABLE_GTKDOC=ON -DPYTHON_EXECUTABLE=/usr/bin/python2 ../webkitgtk-$pkgver \
        -G Ninja
  ninja
}

package() {
  cd build
  DESTDIR="$pkgdir" ninja install

  install -m755 -d "$pkgdir/usr/share/licenses/webkit2gtk"
  cd "$srcdir/webkitgtk-$pkgver/Source"
  for f in $(find -name 'COPYING*' -or -name 'LICENSE*'); do
    echo $f >> "$pkgdir/usr/share/licenses/webkit2gtk/LICENSE"
    cat $f >> "$pkgdir/usr/share/licenses/webkit2gtk/LICENSE"
    echo "" >> "$pkgdir/usr/share/licenses/webkit2gtk/LICENSE"
  done
}
