# Contributor: Filip Brcic <brcha@gna.org>
# Contributor: ant32 <antreimer@gmail.com>
# Contributor: Renato Silva <br.renatosilva@gmail.com>
pkgname=mingw-w64-glib2
pkgver=2.46.0
pkgrel=1
arch=(any)
pkgdesc="Common C routines used by GTK+ and other libs (mingw-w64)"
depends=(mingw-w64-gettext mingw-w64-zlib mingw-w64-libffi mingw-w64-pcre mingw-w64-freetype2)
makedepends=(mingw-w64-configure python)
license=("LGPL")
options=(!strip !buildflags staticlibs !emptydirs)
url="http://www.gtk.org/"
source=("http://ftp.gnome.org/pub/GNOME/sources/glib/${pkgver%.*}/glib-$pkgver.tar.xz"
"0001-Revert-list-store-Fix-a-parameter-check.patch"
"0001-Use-CreateFile-on-Win32-to-make-sure-g_unlink-always.patch"
"0003-g_abort.all.patch"
"0004-glib-prefer-constructors-over-DllMain.patch"
"0005-glib-send-log-messages-to-correct-stdout-and-stderr.patch"
"0024-return-actually-written-data-in-printf.all.patch"
"0027-no_sys_if_nametoindex.patch"
"0028-inode_directory.patch"
"0029-grand.all.patch"
"0030-right-wstat-for-64bit.patch"
"revert-warn-glib-compile-schemas.patch")
sha256sums=('b1cee83469ae7d80f17c267c37f090414e93960bd62d2b254a5a96fbc5baacb4'
            '261ae2d2c7b94460f33ab569540313e21c9a50af38a7ebe8412e49f5b309af35'
            'ef81e82e15fb3a71bad770be17fe4fea3f4d9cdee238d6caa39807eeea5da3e3'
            '1b24cc928f69f73599f83269a7b3eb7bf7efbe114109251e6765053a1e1f4cd6'
            '7b099af0c562f397458542482d6d1debe437f220762aa2ed94b2e6c4d43dd8a6'
            '94b705382b405bf8eae51c4f82afbf819b6caa5b3e51512be18c870b79947f88'
            '8421aed91370cf8eb5f0dde443bbc63e5dd4c238c586053eab4fbbae2e005d8c'
            '5cb481295ff86c2802030984d8b2bf6a3b1dcd5e5fe7b0be68b22d9116305837'
            'f7f06a90156fe0a308412512c359072922f7f0d19dd4bed30d863db18e48940b'
            'dd26a015cdd65ee270251a11ef4c646000b26bb435992e6c997a615c1c14602e'
            'fe5b19dbb77b22abb1e4b4771bc1f97b3fce9f3b3792b83c83e439f76aeced3e'
            '049240975cd2f1c88fbe7deb28af14d4ec7d2640495f7ca8980d873bb710cc97')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd glib-$pkgver
  patch -Np1 -i ../0001-Revert-list-store-Fix-a-parameter-check.patch
  patch -Np1 -i "$srcdir/0001-Use-CreateFile-on-Win32-to-make-sure-g_unlink-always.patch"
  patch -Np1 -i "$srcdir/0003-g_abort.all.patch"
  patch -Np1 -i "$srcdir/0004-glib-prefer-constructors-over-DllMain.patch"
  patch -Np1 -i "${srcdir}/0005-glib-send-log-messages-to-correct-stdout-and-stderr.patch"
  patch -Np1 -i "$srcdir/0024-return-actually-written-data-in-printf.all.patch"
  patch -Np1 -i "$srcdir/0027-no_sys_if_nametoindex.patch"
  patch -Np1 -i "$srcdir/0028-inode_directory.patch"
  patch -Np1 -i "${srcdir}/0029-grand.all.patch"
  patch -Np1 -i "${srcdir}/0030-right-wstat-for-64bit.patch"
  patch -Rp1 -i ../revert-warn-glib-compile-schemas.patch
  NOCONFIGURE=1 ./autogen.sh
}


build() {
  cd glib-$pkgver
  conf="--with-pcre=system --with-threads=win32 --disable-fam"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch}-static && pushd build-${_arch}-static
    ${_arch}-configure \
      --disable-shared $conf
    make
    popd
    
    mkdir -p build-${_arch}-shared && pushd build-${_arch}-shared
    ${_arch}-configure \
      --disable-static $conf
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir/glib-$pkgver/build-${_arch}-shared"
    make DESTDIR="$pkgdir" install
    make -C "$srcdir/glib-$pkgver/build-${_arch}-static" DESTDIR="$pkgdir/static" install
    mv "$pkgdir/static/usr/${_arch}/lib/"*.a "$pkgdir/usr/${_arch}/lib/"
    find "$pkgdir/usr/${_arch}" -name '*.exe' -o -name '*.def' | xargs -rtl1 rm
		find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
		find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs -rtl1 ${_arch}-strip -g
		rm "$pkgdir/usr/${_arch}/bin/"{glib-{gettextize,mkenums},gdbus-codegen}
		rm -r "$pkgdir/usr/${_arch}/lib/charset.alias"
		rm -r "$pkgdir/static"
		rm -r "$pkgdir/usr/${_arch}/share"
  done
}
