# Maintainer: drakkan <nicola.murino at gmail dot com>
pkgname=mingw-w64-gst-editing-services-git
pkgver=1.11.1.r6.7ba2c22c
pkgrel=1
_gitname=gst-editing-services
pkgdesc="GStreamer editing services (mingw-w64)"
arch=(any)
url="http://gstreamer.freedesktop.org/"
license=('LGPL')
depends=('mingw-w64-gst-plugins-base-git')
makedepends=('mingw-w64-configure')
options=('!strip' '!buildflags' 'staticlibs')
conflicts=('mingw-w64-gst-editing-services')

source=("$_gitname::git://anongit.freedesktop.org/gstreamer/$_gitname")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
  cd $_gitname 
  NOCONFIGURE=1 ./autogen.sh
}

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/$_gitname"
  for _arch in $_architectures; do
    mkdir -p "build-${_arch}"
    cd "build-${_arch}"
    ${_arch}-configure \
      --with-package-name="GStreamer editing services (Arch Linux)" \
      --with-package-origin="http://www.archlinux.org/" \
      --disable-examples \

    # https://bugzilla.gnome.org/show_bug.cgi?id=655517
    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

    make
    cd ..
  done
}


package() {
  cd "${srcdir}/$_gitname"

  for _arch in ${_architectures}; do
    cd "build-${_arch}"
    make DESTDIR="${pkgdir}" install

    rm "$pkgdir"/usr/$_arch/lib/gstreamer-1.0/*.a
    rm "$pkgdir"/usr/$_arch/lib/gstreamer-1.0/*.la
    rm -rf "$pkgdir"/usr/${_arch}/share/${aclocal,man,locale}

    find "$pkgdir" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir" -name '*.dll' -o -name '*.a' -exec ${_arch}-strip -g {} \;

    cd ..
  done
}

# vim: ts=2 sw=2 et:
