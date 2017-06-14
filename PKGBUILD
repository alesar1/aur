# Maintainer: Evgeniy Filimonov <evgfilim1@gmail.com>
pkgname=('python-telegram-bot-git')
_pkgver=6.0.3
_lastver_commit=1951d6f
pkgver=6.0.3.r82.3863b4f
pkgrel=1
pkgdesc="A Python wrapper around the Telegram Bot API"
arch=('any')
url="https://github.com/${pkgname%-git}/${pkgname%-git}"
license=('LGPL3')
depends=('python-future>=0.15.2' 'python-certifi')
makedepends=('git' 'python-setuptools')
optdepends=('python-pysocks: SOCKS or HTTP proxy'
            'python-ujson: Ultra fast JSON parsing')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
changelog='CHANGES.rst'
source=("${pkgname}::git+${url}.git")
sha256sums=('SKIP')

prepare() {
    cd "$srcdir/$pkgname"
    git submodule update --init --recursive
}

pkgver() {
    cd "$srcdir/$pkgname"
    printf "%s.r%s.%s" "${_pkgver}" "$(git rev-list --count ${_lastver_commit}..HEAD)" "$(git rev-parse --short HEAD)"
    # printf "%s" "$(git describe --long --tags | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
    cd "$srcdir/$pkgname"
    python setup.py build
}

package() {
    cd "$srcdir/$pkgname"
    python setup.py install --root="$pkgdir" --optimize=1
}
