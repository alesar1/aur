# Maintainer: goetzc
# Maintainer: Skycoder42
# Maintainer: Kppqju77
# Contributor: lestb
# Contributor: Philipp Wolfer
# Contributor: Joel Pedraza
# Contributor: Jakub Schmidtke

pkgname=android-platform
_apilevel=33
_rev=r02
pkgver=${_apilevel}_${_rev}
pkgrel=1
pkgdesc="Android SDK Platform, latest API"
arch=('any')
url="http://developer.android.com/sdk/index.html"
license=('custom')
provides=("${pkgname}-${_apilevel}")
conflicts=("${pkgname}-${_apilevel}")
options=('!strip')
source=("https://dl.google.com/android/repository/platform-${_apilevel}_${_rev}.zip"
         "package.xml")
sha256sums=('f851b13fe89f8510a1250df5e8593e86176b2428f4f3cbe0e304a85818c07bc8'
            '4d10dc4169a78a44176598ae4d34b268ccf0ad22a65f50becff804f26751c496')

package() {
  depends=('android-sdk' 'android-sdk-platform-tools')
  
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  install -D -m 644 "package.xml" "${pkgdir}/usr/share/licenses/${pkgname}/package.xml"

  ln -s "/usr/share/licenses/${pkgname}/package.xml" \
    "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}/"

  chmod -R ugo+rX "${pkgdir}/opt"
}
