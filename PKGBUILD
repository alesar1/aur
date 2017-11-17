#Maintainer: Benedikt Tissot <benedikt.tissot@googlemail.com>
#Contributor: Alex Gajewski <apagajewski@gmail.com>

_pkgname=ice
pkgname=ice-ssb
pkgver=5.2.8
pkgrel=1
pkgdesc='a simple Site Specific Browser for Firefox, Chromium and Google Chrome from "Peppermint OS" Project'
url='https://github.com/peppermintos/ice'
arch=(any)
license=(GPL2)
depends=("python-requests" "python-beautifulsoup4" "python" "python-gobject" "python-lxml")
source=("$_pkgname-$pkgver.tar.gz::https://github.com/peppermintos/$_pkgname/archive/$pkgver.tar.gz")
optdepends=("firefox: Browser to use" "chromium: Browser to use" "google-chrome: Browser to use" "vivaldi: Browser to use")
sha256sums=('129dc70ac867d4a69eb6274b97ff09dffd1bfe701160f4941f1005a63cd457bc')

package() {
	cp -r -f "${srcdir}/$_pkgname-$pkgver/usr" "${pkgdir}/usr"
	# symlinks to use chromium and google-chrome, change this if you use other versions
  # chromium
	ln -s /usr/bin/chromium "${pkgdir}/usr/bin/chromium-browser"
  # google-chrome
  ln -s /usr/bin/google-chrome-stable "${pkgdir}/usr/bin/google-chrome"
}
