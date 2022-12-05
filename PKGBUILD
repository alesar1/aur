# Maintainer: HLFH <gaspard@dhautefeuille.eu>

pkgname=certbot-ocsp-fetcher-git
pkgver=r251.82ffc58
pkgrel=3
pkgdesc="A tool that primes the OCSP cache of nginx for certificates managed by Certbot, in order to make OCSP stapling work reliably."
arch=('any')
url="https://github.com/tomwassenberg/certbot-ocsp-fetcher"
license=('MIT')
depends=('bash' 'certbot' 'openssl' 'util-linux')
makedepends=('git')
optdepends=('nginx')
provides=('certbot-ocsp-fetcher')
source=("git+https://github.com/tomwassenberg/certbot-ocsp-fetcher.git")
b2sums=('SKIP')

pkgver() {
    cd certbot-ocsp-fetcher/
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd certbot-ocsp-fetcher/
    install -Dm755 certbot-ocsp-fetcher $pkgdir/usr/bin/certbot-ocsp-fetcher
    install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/certbot-ocsp-fetcher/LICENSE
}
