# Maintainer:	Jesse Jaara	<gmail.com: jesse.jaara>
# Contributor:	p2k		<uni-ulm.de: Patrick.Schneider>

pkgname=ktlint
pkgver=0.24.0
pkgrel=1
pkgdesc="An anti-bikeshedding Kotlin linter with built-in formatter"
arch=('any')
url="https://ktlint.github.io/"
license=('CUSTOM: MIT')
depends=('java-runtime')
validpgpkeys=(160A7A9CF46221A56B06AD64461A804F2609FD89)
source=(https://github.com/shyiko/ktlint/releases/download/${pkgver}/ktlint
        https://raw.githubusercontent.com/shyiko/ktlint/${pkgver}/LICENSE
        https://github.com/shyiko/ktlint/releases/download/${pkgver}/ktlint.asc)
sha256sums=('701ed9478a9d217f3b82efda0fa9db3e4028b3951066b6ad99e0db6c6d7c9370'
            '94fcaa8988fceec75f68ae8b31bb51676e4afc2534072b6e634a986700804f94'
            'SKIP')

package() {
  cd "${srcdir}"

  install -D -m755 ktlint "${pkgdir}/usr/bin/ktlint"
  install -D -m644 LICENSE "${pkgdir}/usr/share/license/ktlint/LICENSE"
}

