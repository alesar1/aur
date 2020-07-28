# Maintainer: Arch-Jason <arch-jason@outlook.com>
pkgname=zff
pkgver=5.5.5
pkgrel=1
pkgdesc="A simple game"
arch=(x86_64)
url="https://github.com/ohzff/Zff"
license=('MIT')
depends=('git' 'wget' 'gcc' 'bash')
makedepends=('gcc' 'git')
source=("git+$url")
md5sums=("SKIP")

prepare() {
	cd Zff
}

build() {
	cd Zff
    g++ zff_main_en.cpp -o zff
}

package() {
	cd Zff
    mkdir -p "$pkgdir/usr/bin/"
    mkdir -p "$pkgdir/usr/share/ohzff-zff"
    install -m775 zff "$pkgdir/usr/bin/zff"
    cd ../
    cp -r Zff/* "$pkgdir/usr/share/ohzff-zff"
}
