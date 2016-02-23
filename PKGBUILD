# Maintainer: Janosch Dobler <janosch.dobler@gmx.de>
pkgname=rebash
pkgver=auto # gets updated by pre-push hook
pkgrel=auto # gets updated by pre-push hook
pkgdesc="bash/shell library/framework"
arch=('x86_64')
url="https://github.com/jandob/rebash"
license=('WTFPL')
depends=('bash' 'sed' 'grep')
makedepends=('git')
source=("git+https://github.com/jandob/rebash.git#tag=$pkgver")
md5sums=('SKIP')

package() {
    mkdir -p "${pkgdir}/usr/lib/rebash"
    install -Dm755 "${srcdir}"/rebash/* "${pkgdir}/usr/lib/rebash/"
}
