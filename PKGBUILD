# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: zzy-ac <zzy-ac@qq.com>
pkgname=fonts-droid-fallback
pkgver=fallback_6.0.1r16
pkgrel=1.1
pkgdesc="'No Tofu' font families with large Unicode coverage (hinted)
 Noto is a collection of font families, each visually harmonized across
 scripts."
arch=(any)
url="http://ftp.de.debian.org/debian/pool/main/f/fonts-android/"
license=('GPL')
depends=()
provides=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://mirrors.tuna.tsinghua.edu.cn/debian/pool/main/f/fonts-android/fonts-droid-fallback_6.0.1r16-1.1_all.deb")
noextract=()
validpgpkeys=()



prepare() {
	mkdir "$pkgname-$pkgver"
    tar -xf ${srcdir}/data.tar.xz -C "$pkgname-$pkgver"
}

#check() {
#	cd "$pkgname-$pkgver"
#	make -k check
#}

package() {
	cd "$pkgname-$pkgver"
    cp -r etc ${pkgdir}
    cp -r usr ${pkgdir}
}
sha256sums=('d2096d4edde128fedf6749be2dd204a5810210a6201126d99b8d412344f71056')
