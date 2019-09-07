# Maintainer: Yacob Zitouni <yacob.zitouni@gmail.com>

pkgname=ttf-menlo-powerline-git
pkgrel=1
pkgver=r6.07e91f6
pkgdesc="Menlo font patched to work with Powerline"
arch=('any')
url="https://github.com/abertsch/Menlo-for-Powerline"
license=('GPL')
depends=('fontconfig' 'xorg-font-utils')
makedepends=('git')
install=ttf-menlo-powerline-git.install
source=('git://github.com/abertsch/Menlo-for-Powerline.git')
license=('unknown')
md5sums=('SKIP')


pkgver() {
	cd "$srcdir/Menlo-for-Powerline"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


package() {
	cd "$srcdir/Menlo-for-Powerline"
	install -d $pkgdir/usr/share/fonts/TTF/
    install -m644 *.ttf $pkgdir/usr/share/fonts/TTF/
}
