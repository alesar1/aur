# Maintainer: Mckol <mckol363@gmail.com>

pkgname=queercat-git
pkgver=r20.c626e13
pkgrel=1
pkgdesc=""
arch=('any')
url="https://github.com/Elsa002/queercat"
license=('unknown')
depends=()
makedepends=('gcc' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+https://github.com/Elsa002/queercat")
sha512sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"

    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/$pkgname"

    gcc 'main.c' -lm -o 'queercat'
}

package() {
    cd "$srcdir/$pkgname"

    install -Dt "$pkgdir/usr/bin/" 'queercat'
}
