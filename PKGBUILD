# Maintainer: Musikolo <musikolo {at} hotmail [dot] com>
# Contributor Oliver Rümpelein <arch@pheerai.de>
# Contributor/Base PKGBUILD: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc="A browser plugin designed for the viewing of premium video content, standalone for vivaldi"
pkgver=4.10.1303.0
_chrome_ver=72.0.3626.109
_channel=stable
pkgrel=4
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/privacy/eula_text.html'
# Try using chrome version-specific version. It only seems to work for the latests chrome version.
# 	"google-chrome-${_channel}_${pkgver}_amd64.deb::https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
	"https://dl.google.com/linux/deb/pool/main/g/google-chrome-${_channel}/google-chrome-${_channel}_${_chrome_ver}-1_amd64.deb"
	get_cdm_version.c)
options=("!strip")
license=('custom')
depends=('gcc-libs' 'glib2' 'glibc' 'nspr' 'nss')
conflicts=('chromium-widevine' 'google-chrome')
sha256sums=('SKIP'
            'c8bf514f3c70868120924ee2d4872a0e47dcff315bdf799ba2f98dd7aa85fe2b'
            '3fda44a5b8b222434530f27923568de1fda1eb0caa8621b56a8b2a6a2a2e3d5d')

prepare() {
  bsdtar -x --strip-components 4 -f data.tar.xz opt/google/chrome/libwidevinecdm.so
  gcc get_cdm_version.c -o get_cdm_version -ldl
}

pkgver() {
  ./get_cdm_version
}

package() {
  install -Dm644 libwidevinecdm.so -t "$pkgdir/opt/google/chrome/"
  install -Dm644 chrome-eula_text.html -t "$pkgdir/usr/share/licenses/$pkgname/"
}

