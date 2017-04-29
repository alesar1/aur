# Maintainer: GordonGR <ntheo1979@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: xduugu
# Contributor: Elis Hughes <elishughes@googlemail.com>

pkgname=lib32-rtmpdump
_pkgname=rtmpdump
epoch=1
pkgver=2.4.r96.fa8646d
pkgrel=3
pkgdesc='Tool to download rtmp streams (lib32)'
arch=('x86_64')
url='http://rtmpdump.mplayerhq.hu/'
license=('GPL2' 'LGPL2.1')
depends=('lib32-glibc' 'lib32-gnutls' 'lib32-zlib' "${_pkgname}")
makedepends=('git')
provides=('librtmp.so')
options=('!makeflags')
_commit='fa8646d'
source=("git+https://git.ffmpeg.org/rtmpdump#commit=${_commit}")
md5sums=('SKIP')

prepare() {
cd rtmpdump
sed -e 's/^CRYPTO=OPENSSL/#CRYPTO=OPENSSL/' -e 's/#CRYPTO=GNUTLS/CRYPTO=GNUTLS/' -i Makefile -i librtmp/Makefile
sed -i -e 's:gcc:gcc -m32:' Makefile librtmp/Makefile
sed -i -e 's/host_cpu\=\"\${host\%\%-\*}\"/host_cpu\="i386"/' Makefile librtmp/Makefile
sed -i -e 's/march\=\"\${march\%\%-\*}\"/march\="i386"/' Makefile librtmp/Makefile
}

build() {
cd rtmpdump
make \
  OPT="$CFLAGS" \
  XLDFLAGS="$LDFLAGS"
}

package() {
cd rtmpdump
make \
  prefix='/usr' \
  sbindir='/usr/bin' \
  mandir='/usr/share/man' \
  DESTDIR="${pkgdir}" \
  libdir='/usr/lib32' \
  install

rm -rf "${pkgdir}/usr"/{bin,include,sbin,share}

}