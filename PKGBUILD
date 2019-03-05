# Maintainer: Daniel Ruiz de Alegria <daniel@drasite.com>

pkgname="flat-remix-gtk"
pkgver=20190302
pkgrel=1
pkgdesc="Flat Remix GTK theme is a pretty simple gtk window theme inspired on material design following a modern design using flat colors with high contrasts and sharp borders."
arch=('any')
url="https://drasite.com/flat-remix-gtk"
license=('GPL 3.0')
source=("https://github.com/daniruiz/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('SKIP')

package() {
	cd "${srcdir}/${pkgname}-${pkgver}/"
	install -dm755 "${pkgdir}/usr/share/themes"
	cp -a "Flat-Remix-GTK"* "${pkgdir}/usr/share/themes/"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
