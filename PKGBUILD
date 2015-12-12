# Maintainer: Vaporeon <vaporeon@tfwno.gf>
# Contributor: Jan de Groot <jgc@archlinux.org>

pkgbase=glib2-patched-thumbnailer
pkgname=glib2-patched-thumbnailer
pkgver=2.46.2
_patchver=d0edf118e1c27700300038c1d82b3ff775c0216b
pkgrel=1
pkgdesc="GLib2 patched with ahodesuka's thumbnailer patch."
url="http://gist.github.com/ahodesuka/49c1d0eea4b64f24c4c7"
arch=(i686 x86_64)
provides=(glib2)
conflicts=(glib2)
makedepends=('pkg-config' 'python2' 'libxslt' 'docbook-xml' 'pcre' 'libffi' 'libelf')
depends=('pcre' 'libffi' 'tumbler')
optdepends=('python2: for gdbus-codegen and gtester-report'
            'elfutils: gresource inspection tool')
options=('!docs' '!emptydirs')
license=('LGPL')
source=(http://ftp.gnome.org/pub/GNOME/sources/glib/${pkgver:0:4}/glib-$pkgver.tar.xz
        revert-warn-glib-compile-schemas.patch
        https://gist.githubusercontent.com/ahodesuka/49c1d0eea4b64f24c4c7/raw/$_patchver/glib-thumbnailer.patch
        memleak.patch)
sha256sums=('5031722e37036719c1a09163cc6cf7c326e4c4f1f1e074b433c156862bd733db'
            '049240975cd2f1c88fbe7deb28af14d4ec7d2640495f7ca8980d873bb710cc97'
            '1a4673380fbdf8e8e5de3367089de6c97025633e54010575de63c5ab6c8a044d'
            '8337eeba4a32133d41575c8338fca32ac6a867e6e4a4e021355fcdeb606420a6')

prepare() {
  cd glib-$pkgver
  patch -Rp1 -i ../revert-warn-glib-compile-schemas.patch
  patch -Np1 -i ../memleak.patch
  patch -Np1 -i ${srcdir}/glib-thumbnailer.patch
}

build() {
  cd glib-$pkgver
  PYTHON=/usr/bin/python2 ./configure --prefix=/usr --libdir=/usr/lib \
      --sysconfdir=/etc \
      --with-pcre=system \
      --disable-fam
  make
}

check() {
  cd glib-$pkgver
  #make -k check || :
}

package() {
  cd glib-$pkgver
  make completiondir=/usr/share/bash-completion/completions DESTDIR="$pkgdir" install

  for _i in "$pkgdir/usr/share/bash-completion/completions/"*; do
      chmod -x "$_i"
  done

  # Our gdb does not ship the required python modules, so remove it
  rm -rf "$pkgdir/usr/share/gdb/"
}
