# Maintainer: Mort Yao <soi@mort.ninja>
# Contributor: Nikolaos Bezirgiannis <bezeria@gmail.com>

pkgname=hol
pkgver=kananaskis.12
pkgrel=2
pkgdesc='HOL4 theorem-proving system'
url='https://hol-theorem-prover.org/'
arch=('x86_64')
license=('BSD')
install="$pkgname.install"
source=("http://sourceforge.net/projects/hol/files/hol/${pkgver//./-}/hol-${pkgver//./-}.tar.gz"
        #
       )
md5sums=('5b01d43494c7809c029764a95bf06402')
depends=('polyml' 'graphviz')
conflicts=('ocaml-num')

build() {
  cd "${srcdir}/${pkgname}-${pkgver//./-}"

  poly < tools/smart-configure.sml
  bin/build

  bin/build cleanForReloc
}

package() {
  _oldtop="${srcdir}/${pkgname}-${pkgver//./-}"
  _newtop="/opt/hol"

  cd $_oldtop

  # install everything under /opt/hol
  install -m755 -d "${pkgdir}/opt/${pkgname}"
  cp -r . "${pkgdir}/opt/${pkgname}"

  # install license
  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 COPYRIGHT "${pkgdir}/usr/share/licenses/${pkgname}/"

  # make symlinks to /usr/bin
  mkdir -p ${pkgdir}/usr/bin
  ln -s /opt/hol/bin/hol ${pkgdir}/usr/bin/hol
  ln -s /opt/hol/bin/hol.noquote ${pkgdir}/usr/bin/hol.noquote
  ln -s /opt/hol/bin/Holmake ${pkgdir}/usr/bin/Holmake
}
