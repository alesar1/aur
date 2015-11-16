# Maintainer: Oliver Jaksch <arch-aur@com-in.de>

pkgname=atari++
pkgver=1.80
pkgrel=1
pkgdesc="An emulator of Atari 400/800/400XL/800XL/130XE/5200"
arch=('i686' 'x86_64')
url="http://www.xl-project.com"
license=('custom:TPL')
depends=('sdl' 'libpng' 'alsa-lib' 'gcc-libs' 'libsm') 
source=(${url}/download/${pkgname}_${pkgver}.tar.gz)
sha256sums=('172aa60b6370a366077abec0ca91f44f1c85678486dc755c5b954f956304b4af')
noextract=(${pkgname}_${pkgver}.tar.gz)

prepare() {
  cd "${srcdir}"
  tar xfz "${srcdir}/${pkgname}_${pkgver}.tar.gz"
}

build() {
  cd "${srcdir}/${pkgname}"
  ./configure --prefix=/usr
  make DESTDIR="${pkgdir}" || return 1
}

package() {
  cd "${srcdir}/${pkgname}"
  make DESTDIR="${pkgdir}" install || return 1
  install -m644 -D README.licence ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
