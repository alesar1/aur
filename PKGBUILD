# Maintainer: Aziz Ben Ali <ba.tahaaziz@gmail.com>
# Package Maintainer: Federico "EvilScript" Torrielli <evilscript@protonmail.com>
pkgname=paspio-git
_pkgname=paspio
pkgver=0.1.0.732cff7
pkgrel=1
pkgdesc="A (naive) password entropy calculator."

arch=('x86_64')
url="https://github.com/grtcdr/paspio"
license=('MIT')

depends=('gcc-libs' 'glibc')
makedepends=('rust' 'cargo' 'git')
source=("$pkgname::git+${url}.git")
md5sums=('SKIP')


pkgver() {
    cd "$pkgname"
    echo "$(grep ^version Cargo.toml | cut -d= -f2 | tr -d ' "').$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$pkgname"
}

build() {
    cd "$pkgname"
    cargo build --release
}


package() {
    cd "$pkgname"
    targetdir=${CARGO_TARGET_DIR:-target}
    install -Dm755 "$targetdir/release/paspio" "$pkgdir/usr/bin/$_pkgname"
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}

