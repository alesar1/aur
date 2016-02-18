# Maintainer: David Phillips <dbphillipsnz gmail>

_theme=petrichor
_pkgname=lightdm-webkit-theme-${_theme}
pkgname=${_pkgname}-git
pkgver=r1.fc3c7e2
pkgrel=1
pkgdesc="Simple and tidy theme for LightDM's webkit2 greeter"
arch=('any')
url="http://github.com/phillid/petrichor"
license=("BSD")
depends=('lightdm' 'lightdm-webkit-greeter')
source=("${pkgname}::git+https://github.com/phillid/${_theme}.git")
md5sums=('SKIP')

pkgver() {
	cd "${pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package () {
	cd "${srcdir}/${pkgname}"

	mkdir -p "${pkgdir}/usr/share/lightdm-webkit/themes/${_theme}"
	for f in index.{html,theme} petrichor.{js,css} bg.jpg iec5009.svg ; do
		cp "${f}" "${pkgdir}/usr/share/lightdm-webkit/themes/${_theme}/"
	done
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
