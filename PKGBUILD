# Maintainer: Nicolas Stalder <n+archlinux@stalder.io>
pkgname=globalplatformpro
pkgver=20.08.12
pkgrel=1
pkgdesc="Manage applets and keys on JavaCard-s like a pro"
arch=('any')
url="https://github.com/martinpaljak/GlobalPlatformPro"
license=('LGPL3')
depends=('java-runtime-headless' 'pcsclite')
makedepends=('git' 'java-environment' 'maven')
source=(
  "$pkgname::git+https://github.com/martinpaljak/GlobalPlatformPro.git#tag=v${pkgver}"
  'gp-pro'
)
sha256sums=(
  'SKIP'
  'a8769c37ac54b3e98645f509b011a290d7e914937de0158cc8f2a8fcef0e255e'
)

build() {
  cd $pkgname
  mvn package
}

package() {
  # Install the executables
  install -d "$pkgdir"/usr/bin/
  install -m 755 gp-pro "$pkgdir"/usr/bin/
  cd $pkgname
  install -d "$pkgdir"/usr/share/java/globalplatformpro/
  install -m 644 tool/target/gp.jar "$pkgdir"/usr/share/java/globalplatformpro/
}
