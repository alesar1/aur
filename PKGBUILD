# Maintainer: Lucki <https://aur.archlinux.org/account/Lucki>
# Contributor: Chris Oelmueller <chris.oelmueller@gmail.com>
# Contributor: Thomas Kinnen <thomas.kinnen@gmail.com>
# Contributor: Thomas Kowaliczek-Schmer <thomas.kowaliczek@posteo.de>

pkgname=unknown-horizons-git
pkgver=2019.1.r43.gc2eee6a20
pkgrel=1
pkgdesc="Open source real-time strategy game with the comfy Anno1602 feeling."
arch=('any')
url="http://www.unknown-horizons.org"
license=('GPL' 'CCPL')
depends=('fife' 'python-yaml' 'python-pillow' 'python-future')
makedepends=('git' 'intltool')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+https://github.com/${pkgname%-git}/${pkgname%-git}.git")
sha512sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s.%s" \
		"$(egrep -o 'RELEASE_VERSION=[0-9]+\.[0-9]+' < development/create_release_tarball.sh | sed -r 's/RELEASE_VERSION=//g')" \
		"$(git describe --long --tags | awk -F '-' '{print "r" $(NF-1) "." $(NF)}')"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	HOME=. python setup.py build
}

package() {
	cd "$srcdir/${pkgname%-git}"
	HOME=. python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
