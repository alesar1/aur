# Maintainer: Ammon Smith <ammon.i.smith@gmail.com>

_pkgname=qotd
pkgname=$_pkgname-git
pkgver=0.4.0_30_g813627a.813627a
pkgrel=1
pkgdesc="A simple QOTD (quote of the day) daemon."
arch=('any')
url="https://gitlab.com/ammongit/$_pkgname"
license=('GPL')
depends=()
makedepends=('git' 'gcc')
optdepends=()
provides=("$_pkgname")
conflicts=("$_pkgname")
options=()
install="$pkgname.install"
source=("git+https://gitlab.com/ammongit/$_pkgname.git")
sha256sums=('SKIP')
backup=('etc/qotd.conf')

pkgver() {
	cd "$srcdir/$_pkgname"
    _ver="$(git describe --tags | sed 's/-/_/g')"
    printf '%s.%s' "${_ver:1}" "$(git describe --always)"
}

build() {
    cd "$srcdir/$_pkgname"
	make release
}

package() {
    cd "$srcdir/$_pkgname"
	make ROOT="$pkgdir" install
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/qotd/LICENSE"
}

