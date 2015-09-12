# Maintainer: Christian Rebischke <echo Q2hyaXMuUmViaXNjaGtlQGdtYWlsLmNvbQo= | base64 -d>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
_pkgname=binnavi
pkgname=binnavi-git
pkgver=v6.0.0.130.6b0b89c
pkgrel=1
pkgdesc="A binary analysis IDE that allows to inspect, navigate, edit and annotate control flow graphs and call graphs of disassembled code"
url="https://github.com/google/binnavi"
arch=('any')
license=('Apache')
makedepends=('git' 'maven' 'apache-ant' 'java-environment>=7')
depends=('java-runtime>=8' 'postgresql')
provides=('binnavi')
conflicts=('binnavi')
source=(git+https://github.com/google/binnavi.git 'binnavi.sh')
sha512sums=('SKIP'
            '1a569f0db2acc9501e0ee644483b908f833649a48059df3879d209d57ccb8e66d2d21fc32b2a9750868a8d47321f13e706807a325908aca0b7feeacd2d5013e8')

pkgver() {
  cd "${srcdir}/binnavi"
  printf "%s.%s.%s" "$(git describe --tags --abbrev=0)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/binnavi"
  mvn dependency:copy-dependencies -Dmaven.repo.local="${srcdir}/$pkgname-$pkgver"
  ant build-binnavi-fat-jar
}

package() {
  mkdir -p "${pkgdir}/usr/share/java/binnavi"
  cd "${srcdir}/$_pkgname/target/"
  mv binnavi-all.jar "${pkgdir}/usr/share/java/binnavi/"
  install -D -m755 "${srcdir}/binnavi.sh" "${pkgdir}/usr/bin/binnavi"
}
# vim:set et sw=2 ts=2 tw=80:
