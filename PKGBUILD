# Maintainer: kleintux <reg-archlinux AT klein DOT tuxli DOT ch> 
# Contributor: Charles L <charliehogger31@gmail.com>
# Contributor: Ariadna Vigo

pkgname=minitimer
pkgver=4.1.0
pkgrel=2
pkgdesc='Mini Timer - A timer in your terminal'
arch=('x86_64' 'aarch64')
url='https://sr.ht/~arivigo/minitimer'
license=('APACHE')
depends=('glibc')
source=("https://git.sr.ht/~arivigo/minitimer/archive/${pkgver}.tar.gz")
sha256sums=('3ed359e733aa2a9afa31c33cb5db90157fd2d6e8e67e2448f390a21ee4fc0ff1')

build() {
	cd "$pkgname-$pkgver"
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" PREFIX='/usr' install
}
