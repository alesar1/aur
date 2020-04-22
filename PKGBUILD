# Maintainer: hashworks <mail@hashworks.net>
pkgname=certbot-dns-hetzner-git
pkgdesc="Certbot plugin enabling dns-01 challenge on the Hetzner DNS API"
pkgver=v1.0.3.r0.g0b5f4d2
pkgrel=1
arch=("any")
url="https://github.com/ctrlaltcoop/certbot-dns-hetzner"
license=("APACHE")
depends=("certbot")
makedepends=("python-setuptools" "git")
provides=("${pkgname%-git}")
source=("${pkgname%-git}::git+${url}.git")
sha256sums=("SKIP")

pkgver() {
	cd "${srcdir}/${pkgname%-git}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	cd "${srcdir}/${pkgname%-git}"
	python setup.py install --root="${pkgdir}"
}
