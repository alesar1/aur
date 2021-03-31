# Maintainer: ayatale <ayatale@qq.com>
pkgname=com.caustic3.deepin
pkgver=3.2
pkgrel=2
pkgdesc="A Music Creation Tool, Caustic3 on Deepin Wine5"
arch=(x86_64)
url="https://singlecellsoftware.com/caustic"
license=('custom')
depends=('deepin-wine5' 'deepin-wine5-helper')
provides=(caustic3=$pkgver)
source=("https://aya1.xyz/https://github.com/Brx86/yun/releases/download/2/caustic3.tar.gz")
noextract=()
md5sums=("3f5c3cd4a28b9438533178cb0e237889")

prepare() {
	mkdir "$pkgname-$pkgver"
	cp -r opt "$pkgname-$pkgver"/opt
	cp -r usr "$pkgname-$pkgver"/usr
}

package() {
	cd "$pkgname-$pkgver"
    cp -r opt ${pkgdir}
    cp -r usr ${pkgdir}
}
