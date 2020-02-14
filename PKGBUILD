# Maintainer: Max Struebing <mxstrbng@gmail.com>

pkgname=dotenv-linter-git
pkgver=1.1.0.r4.g61ff93d
pkgrel=1
pkgdesc="Linter for .env files. Written in Rust"
arch=(any)
url="https://github.com/mgrachev/dotenv-linter"
license=('MIT')
depends=()
makedepends=('git' 'cargo')
source=("git+$url")
md5sums=('SKIP')
provides=('dotenv-linter')

pkgver() {
    cd "$srcdir/dotenv-linter" || exit
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/^v//g'
}

build() {
    cd "$srcdir/dotenv-linter" || exit
    git clone https://github.com/mgrachev/dotenv-linter.git
    cd dotenv-linter || exit
    cargo build --release

}

package() {
    cd "$srcdir/dotenv-linter/dotenv-linter/target/release" || exit
    install -Dm755 dotenv-linter "$pkgdir/usr/bin/dotenv-linter"
    cd "$srcdir/dotenv-linter/dotenv-linter" || exit
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/dotenv-linter/LICENSE"
}


