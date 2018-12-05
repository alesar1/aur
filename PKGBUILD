#Maintainer: Zachary Jordan <zacjor1 at gmail dot com>
#PKGBUILD based off https-everywhere-chrome-git from Yardena Cohen <yardenack at gmail dot com>

pkgsubn=violentmonkey
pkgname=${pkgsubn}-chromium-git
pkgver=1085.08aa50a
pkgrel=1
pkgdesc="Chrome/Chromium extension for Violentmonkey - git/dev"
arch=('any')
url='https://github.com/violentmonkey/violentmonkey'
license=('MIT')
makedepends=(git yarn)
source=("git+https://github.com/violentmonkey/violentmonkey.git")
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgsubn}"
	local ver="$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
	printf "%s" "${ver//-/.}"
}
build() {
	cd "${srcdir}/${pkgsubn}"
	yarn
	yarn build
}
package() {
	 mkdir -p "${pkgdir}/usr/share/${pkgname}"
	 shopt -s dotglob
	 cp -dr --no-preserve=ownership "${srcdir}/${pkgsubn}/dist"/* "${pkgdir}/usr/share/${pkgname}"
}