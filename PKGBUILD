# Maintainer: Iain Earl <iain at itmecho dot com>

pkgname='navi-bin'
pkgdesc='An interactive cheatsheet tool for the command-line'
pkgver='2.0.11'
pkgrel='1'
arch=('x86_64')
url='https://github.com/denisidoro/navi'
license=('Apache 2.0')
depends=('fzf')
optdepends=()
makedepends=()
checkdepends=()
provides=('navi')
conflicts=('navi')
source=("${pkgname}-v${pkgver}.tar.gz::https://github.com/denisidoro/navi/releases/download/v${pkgver}/navi-x86_64-unknown-linux-musl.tar.gz")
sha256sums=('27df4c57f6ba2f12bfb1a1fe06cdb272990d11dc74a4e8de79d23a62fb884509')

package() {
    install -Dm755 "navi" "$pkgdir/usr/bin/navi"
}
