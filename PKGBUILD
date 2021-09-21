# Maintainer: Mike Cronce <mike@cronce.io>

pkgname=pscale-bin
_pkgname=pscale
pkgver=0.72.0
pkgrel=0
pkgdesc='The command-line client for Planetscale DBaaS'
arch=('x86_64')
url='https://github.com/planetscale/cli'
license=('Apache')
provides=('pscale')
conflicts=('pscale' 'pscale-git')
backup=()
install="pscale.install"
source=("https://github.com/planetscale/cli/releases/download/v${pkgver}/${_pkgname}_${pkgver}_linux_amd64.tar.gz")
sha256sums=('5badc2e1e6122a6b6ec64895b1812a67afea9f3a89d39f4c7fa2ea706df93a6f')

package() {
  install -Dm755 pscale ${pkgdir}/usr/bin/pscale
}

# vim:set ts=2 sw=2 et:
