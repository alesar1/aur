# Maintainer: David Harrigan <dharrigan [@] gmail [dot] com>
# Contributer: Dmitri Goutnik <dg@syrec.org>

pkgname=pspg
pkgver=5.5.13
pkgrel=1
pkgdesc='Tabular data pager designed to be used with psql'
arch=('x86_64')
url="https://github.com/okbob/pspg"
license=('BSD')
depends=('ncurses' 'readline')
conflicts=('pspg-git')

source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")

sha256sums=('a03f95b68ddf98675072770024f1bdc3e7738b577bc538c81549bba653cbc870')

build() {
  cd ${pkgname}-${pkgver}
  ./configure --prefix=/usr
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}/" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 bash-completion.sh "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
  install -Dm644 pspg.1 "${pkgdir}/usr/share/man/man1/pspg.1"
}

# vim:set ts=2 sw=2 et:
