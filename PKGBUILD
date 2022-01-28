# Maintainer: timescam <rex.ky.ng at gmail dot com>
# Contributor: holouden <holouden @t tutanota d.o.t. com>

pkgname=ttf-hack-ligatured
pkgver=v3.003+FC3.1+JBMv2.242
pkgrel=1
pkgdesc="Latest ligatures with Hack font built with fully automated CI/CD by gaplo917"
arch=("any")
url="https://github.com/gaplo917/Ligatured-Hack"
license=("GPL3")
replaces=("ttf-ligatured-hack")
source=("https://github.com/gaplo917/Ligatured-Hack/releases/download/v3.003%2BNv2.1.0%2BFC%2BJBMv2.242/HackLigatured-v3.003+FC3.1+JBMv2.242.zip"
        "${pkgver}-LICENSE::https://raw.githubusercontent.com/gaplo917/Ligatured-Hack/master/LICENSE")
sha256sums=("e99bb3f5ff2b42802d1c6d415630acf683dd49588284b8b4744c54b823d68405"
            "8ceb4b9ee5adedde47b31e975c1d90c73ad27b6b165a1dcd80c7c545eb65b903")

package() {
	mkdir -p ${pkgdir}/usr/share/fonts/TTF/${_pkgname}
	install -m644 ${srcdir}/*.ttf ${pkgdir}/usr/share/fonts/TTF/${_pkgname}
	install -Dm644 ./${pkgver}-LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/${pkgver}-LICENSE
}
