# Maintainer: Vincent Bernardoff <vb@luminar.eu.org>

pkgname=solana-bin
pkgver=1.6.14
pkgrel=1
pkgdesc='Binaries for the Solana blockchain'
arch=('x86_64')
url='https://github.com/solana-labs/solana'
license=('Apache')
provides=('solana')
conflicts=('solana')
options=(!strip)
depends=('openssl' 'systemd-libs')

source=("$pkgname-$pkgver.tar.bz2::https://github.com/solana-labs/solana/releases/download/v${pkgver}/solana-release-x86_64-unknown-linux-gnu.tar.bz2")
md5sums=('debdb876106378fcb39dd499acc600f9')

package() {
  cd ${srcdir}
  mkdir -p "${pkgdir}/usr/bin"
  cp -a solana-release/bin/{spl-token,solana*} "${pkgdir}/usr/bin"
}
