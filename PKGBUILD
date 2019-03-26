# Maintainer: Doug Newgard <scimmia at archlinux dot org>
# Contributor: Alexander Mcmillan <linuxguy93@gmail.com>

pkgname=falkon-widevine
pkgdesc='A browser plugin designed for the viewing of premium video content (Falkon Web Browser)'
pkgver=4.10.1303.2
_chrome_ver=73.0.3683.86
_license_date=$(curl -sI https://www.google.com/intl/en/chrome/privacy/eula_text.html | sed -n '/^last-modified/ s/.*: //p' | date +"%Y%m%d" -f -)
_license_last=20190307
pkgrel=1
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
license=('custom')
depends=('falkon')
conflicts=('qt5-webengine-widevine')
options=('!strip')
source=("chrome-eula_text-$_license_date.html::https://www.google.com/intl/en/chrome/privacy/eula_text.html"
        "https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb"
        get_cdm_version.c)
sha256sums=('e1e2a694ffe71476b2aefbca64fe470095210c2eb2235c645ca73160cc0b21ea'
            '6bca2828da09563634bce48cfb899f3fb1d069285a297ca5916d3bb63b25b5d6'
            '3fda44a5b8b222434530f27923568de1fda1eb0caa8621b56a8b2a6a2a2e3d5d')

prepare() {
  bsdtar -x --strip-components 4 -f data.tar.xz opt/google/chrome/libwidevinecdm.so
  gcc get_cdm_version.c -o get_cdm_version -ldl
}

pkgver() {
  ./get_cdm_version
}

package() {
  install -Dm644 libwidevinecdm.so -t "$pkgdir/usr/lib/qt/plugins/ppapi"
  install -Dm644 chrome-eula_text-$_license_date.html "$pkgdir/usr/share/licenses/$pkgname/eula_text.html"
}
