# $Id: PKGBUILD 255141 2015-12-10 04:45:28Z foutrelis $
# Maintainer: Kamran Mackey <kamranm1200@gmail.com>

pkgbase=flac-git
pkgname=('flac-git' 'flac-doc-git')
pkgver=v1.3.3.ce6dd6b
pkgrel=3
arch=('x86_64' 'aarch64')
url="https://xiph.org/flac/"
license=('BSD' 'GPL')
depends=('gcc-libs' 'libogg')
makedepends=('nasm' 'doxygen')
options=('!makeflags')
source=(git://github.com/xiph/flac.git)
sha1sums=('SKIP')
_gitname=flac

pkgver() {
  cd "$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

build() {
  cd "$_gitname"
  ./autogen.sh
  ./configure --prefix=/usr --disable-sse
  make
}

package_flac-git() {
  pkgdesc="Free Lossless Audio Codec (git version)"
  options=('!docs')
  conflicts=('flac')
  provides=('flac' 'libFLAC.so' 'libFLAC++.so')

  cd "$_gitname"
  make DESTDIR="${pkgdir}" install
  install -D -m644 COPYING.Xiph "${pkgdir}/usr/share/licenses/$_gitname/LICENSE"
}

package_flac-doc-git() {
  pkgdesc="Developer documentation for the Free Lossless Audio Codec (git version)"
  depends=('flac')
  conflicts=('flac-doc')
  provides=('flac-doc')

  cd "$_gitname"
  make DESTDIR="${pkgdir}" -C doc install
  sed -i "s|$srcdir/$_gitname|/usr|" "${pkgdir}/usr/share/doc/$_gitname/FLAC.tag"
}
