# Maintainer: Z. D. Smith <zd at zdsmith dot com>
pkgname=ec
pkgver=0.4.1
pkgrel=1
pkgdesc='A desk calculator with vectors and quotations'
arch=('x86_64')
url='https://git.sr.ht/~subsetpark/ec'
depends=('janet' 'pkg-config' 'libedit')
license=('BSD3')
provides=('ec')

source=("${url}/archive/v${pkgver}.tar.gz")

sha256sums=('6661cd2f9ba2800b843be6ba5db068365906f37d650d24e995b26b51ec3b4cb5')

build() {
	cd "$srcdir/$pkgname-v$pkgver"
        mkdir janet_modules
        JANET_PATH=janet_modules jpm load-lockfile
        JANET_PATH=janet_modules jpm build
}

package() {
	cd "$srcdir/$pkgname-v$pkgver"
        install -Dm755 "build/$pkgname" "${pkgdir}/usr/bin/$pkgname"
}
