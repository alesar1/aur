# Maintainer Tait Hoyem <tait+ygg_aur@tait.tech>

pkgname=odilia
pkgver=0.2b
pkgrel=1
pkgdesc="Odilia Screenreader -- Make Linux Accessible!"
url="https://odilia.app/"
license=('GPL3')
arch=('x86_64' 'aarch64')
depends=(
   clang rustup
)
provides=( odilia )

prepare() {
    rm -rf $srcdir/odilia &2>/dev/null
    git clone https://github.com/odilia/odilia
}

build() {
    cd $srcdir/odilia
    cargo build
}

package() {
    mkdir -p $pkgdir/usr/bin/
    install -m 755 $srcdir/odilia/target/debug/odilia/usr/bin/odilia
}

#vim: syntax=sh

