# Maintainer: Alexandre Demers <alexandre.f.demers@gmail.com>

_setPrefix="/usr"
_setLibdir="$_setPrefix/lib"
_pkgbase=icu
_pkgmaj=51
_pkgmin=2
pkgrel=1

pkgname=$_pkgbase$_pkgmaj
pkgver=$_pkgmaj.$_pkgmin
pkgdesc="International Components for Unicode library, version 51"
arch=('i686' 'x86_64')
url="http://www.icu-project.org/"
license=('custom:"icu"')
depends=('gcc-libs>=4.7.1-5')

source=("http://download.icu-project.org/files/${_pkgbase}4c/${pkgver}/${_pkgbase}4c-${pkgver//./_}-src.tgz")

md5sums=('072e501b87065f3a0ca888f1b5165709')

build() {
  cd ${srcdir}/icu/source

  ./configure --prefix=/usr \
              --sysconfdir=/etc \
              --mandir=/usr/share/man \
              --libdir=${_setLibdir}
  make
}

package() {
  cd "${srcdir}/icu/source"

  # Copy only .so libs to the destination dir
  mkdir -p "${pkgdir}${_setLibdir}"
  cp -a lib/libicu*51* "${pkgdir}${_setLibdir}"

  # Install the license
  install -Dm644 ${srcdir}/icu/license.html ${pkgdir}/usr/share/licenses/${pkgname}/license.html
}
