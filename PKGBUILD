# Maintainer: Aaron Bull Schaefer <aaron@elasticdog.com>
pkgname=transcrypt
pkgver=2.2.0
pkgrel=1
pkgdesc='A script to configure transparent encryption of files within a Git repository'
arch=('any')
url='https://github.com/elasticdog/transcrypt'
license=('MIT')
depends=('git' 'openssl')
optdepends=('gnupg: config import/export support')
source=("https://github.com/elasticdog/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('6ea1dd8c3c7306e54f056728c7344ed31cf52403566e6c2268acc0f984d53391')

package() {
  cd "${pkgname}-${pkgver}/"

  install -m 755 -D transcrypt "${pkgdir}/usr/bin/transcrypt"
  install -m 644 -D man/transcrypt.1 "${pkgdir}/usr/share/man/man1/transcrypt.1"
  install -m 644 -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  install -m 644 -D contrib/bash/transcrypt "${pkgdir}/usr/share/bash-completion/completions/transcrypt"
  install -m 644 -D contrib/zsh/_transcrypt "${pkgdir}/usr/share/zsh/site-functions/_transcrypt"
}
