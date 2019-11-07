#Maintainer: Fernando Guevara <admin@ebadoo.com>

_pkgname=ice-dev
pkgname=ice-dev
pkgver=6.0.7
pkgrel=1
pkgdesc='A simple Site Specific Browser for Firefox, Chromium and Google Chrome from "Peppermint OS" Project'
url='https://github.com/ebadoo/ice-dev'
arch=(any)
license=(GPL2)
depends=("python-requests" "python-beautifulsoup4" "python-gobject" "python-lxml")
source=("$_pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
md5sums=('1E5F14134252F0FBE232C4E25D620CB3')
optdepends=("firefox: Browser to use" "chromium: Browser to use" "google-chrome: Browser to use" "vivaldi: Browser to use")

package() {
	cp -r -f "${srcdir}/$_pkgname-$pkgver/usr" "${pkgdir}/usr"
	# symlinks to use chromium and google-chrome, change this if you use other versions
  # chromium
	ln -s /usr/bin/chromium "${pkgdir}/usr/bin/chromium-browser"
  # google-chrome
	ln -s /usr/bin/google-chrome-stable "${pkgdir}/usr/bin/google-chrome"
}
