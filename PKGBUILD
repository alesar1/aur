# Maintainer: Pierre-Yves Ritschard <pyr@spootnik.org>

pkgname=exoscale-cli
pkgver=1.6.0
pkgrel=1
pkgdesc="Command-line tool for everything at Exoscale: compute, storage, dns"
arch=('x86_64')
url="http://exoscale.github.io/cli/"
license=('EPL')
provides=('exoscale-cli')
conflicts=('exoscale-cli')

source=("https://github.com/exoscale/cli/releases/download/v${pkgver}/${pkgname}_${pkgver}_linux_amd64.tar.gz")

md5sums=('22ea9222f38a05aa0dc8a434b5cf280b')

package() {
  install -Dm755 "${srcdir}/exo" "${pkgdir}/usr/bin/exo"
  install -d 755 "${pkgdir}/usr/share/bash-completion/completions"
  install -Dm 644 "${srcdir}/contrib/completion/bash/exo" "${pkgdir}/usr/share/bash-completion/completions/exo"
  install -d 755 "${pkgdir}/usr/share/man/man1"
  install -Dm 644 "${srcdir}/manpage/"* "${pkgdir}/usr/share/man/man1"
}
