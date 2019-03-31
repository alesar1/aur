# Maintainer: diesys <code@flowin.space>
pkgname=iblu-git
pkgver=0.8
pkgrel=1
pkgdesc="Intel Black Light Utility, written in python, allows you to control the screen brightness (iX processors family), via command line interface."
arch=('i686' 'x86_64' 'aarch64')
url="https://git.eigenlab.org/sbiego/iblu"
license=('GPLv3')
groups=()
depends=('python')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git+https://git.eigenlab.org/sbiego/iblu')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    ## copia file
	cd "$srcdir/${pkgname%-git}"
    install -D ${pkgname%-git} $pkgdir/usr/bin/${pkgname%-git}
}