# Maintainer: Iain Earl <iain at itmecho dot com>
# Maintainer: wallace < str(11) + my_id at gmail dot com>

pkgname='navi-bin'
pkgdesc='An interactive cheatsheet tool for the command-line'
pkgver='2.13.1'
pkgrel='1'
arch=('x86_64')
url='https://github.com/denisidoro/navi'
license=('Apache 2.0')
depends=()
optdepends=('fzf' 'skim')
makedepends=()
checkdepends=()
provides=('navi')
conflicts=('navi')
source=("${pkgname}-v${pkgver}.tar.gz::https://github.com/denisidoro/navi/releases/download/v${pkgver}/navi-v${pkgver}-x86_64-unknown-linux-musl.tar.gz")
sha256sums=('06eb4f6790ee9284d91e2c95d5a0922521b7b9b562ff2ef07be6d85c32f72beb')

package() {
    install -Dm755 "navi" "$pkgdir/usr/bin/navi"
}
