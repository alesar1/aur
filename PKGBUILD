# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=('git-nemo-icons-git')
pkgver=1.1.r1.15d76c1
pkgrel=1
pkgdesc="A Nemo Python extension to overlay icons on files in git repositories"
arch=('x86_64' 'i686')
url="https://github.com/chrisjbillington/git_nemo_icons"
license=('BSD 2-Clause "Simplified"')
depends=('git-nautilus-icons-common' 'nemo-python')
makedepends=('python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://github.com/chrisjbillington/git_nautilus_icons.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/git_nautilus_icons"
	printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/git_nautilus_icons/git_nemo_icons"
	python setup.py build
}

package() {
	cd "$srcdir/git_nautilus_icons/git_nemo_icons"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 "$srcdir/git_nautilus_icons/LICENSE" \
		"$pkgdir/usr/share/licenses/${pkgname%-git}/LICENSE"
}

