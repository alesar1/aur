# Maintainer: Xuanwo <xuanwo.cn#gmail.com>
# Maintainer: chengxuncc <chengxuncc@gmail.com>

pkgname=elvish-bin
pkgver=0.15.0
pkgrel=1
pkgdesc="A friendly and expressive Unix shell."
arch=('x86_64')
url="https://github.com/elves/elvish"
license=('custom:2-clause BSD')
provides=('elvish')
depends=('glibc')
source=(
  "https://dl.elv.sh/linux-amd64/elvish-v${pkgver}.tar.gz"
  "LICENSE"
)
sha256sums=('fe2b2145e51df149171eb3595c32d23d6326220dd0993fc38b8270da652079be'
            '1912e3785c0eb8d78e0ceed945b32596c11d0f9088aa5c1ad8f18f134f08c500')
install=elvish.install

package() {
    # binary
    install -Dm755 elvish-v${pkgver}  "${pkgdir}/usr/bin/elvish"
    # LICENSE
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}

