# Maintainer: Stephen Argent <steve [at] tuxcon [dot] com>

pkgname=neon-wallet-bin
pkgdesc='Lightweight Wallet for the NEO CryptoCurrency'
license=('MIT')
url='https://github.com/CityOfZion/neon-wallet'
pkgver=0.1.4
pkgrel=1
arch=('x86_64')
deb_package="Neon_${pkgver}_amd64.Linux.deb"
source_x86_64=(
  "${url}/releases/download/${pkgver}/${deb_package}"
)
sha256sums_x86_64=(30205403ce8db6a37714e42300417f983a80ef5d0700faf6c93334c14d70bee4)

install=neon-wallet-bin.install

package() {
  if [ "$CARCH" = "x86_64" ] ; then
    deb_arch="amd64"
  else
    echo "Unknown arch: $CARCH"
    exit 1
  fi

  cd "$srcdir"
  ar xf "$deb_package"
  tar xf data.tar.xz -C "$pkgdir"
}

