# Maintainer: goetzc
# Maintainer: Skycoder42
# Maintainer: Kppqju77
# Contributor: lestb
# Contributor: Philipp Wolfer
# Contributor: Joel Pedraza
# Contributor: Jakub Schmidtke

pkgname=android-platform
_apilevel=30
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
sha1sums=('0b1102c5f0be7bc629e396fcefd36b9f1edfa0a7'
          'e34e8d2b834bc3015ff96b2187000eec44802c77')
sha384sums=('035f8aa55d9543b21406d9e9956f65bc427b3812420b53618ec1b810ae1adb9c2dbeecafdab1d83d4901943bec63cc14'
            '0f5890d7e2a9fec4fae0cfdc37ef1cf459b5a6b66cc36af79d5af0b3d9a19746cc007572b5d8074a5cbc940c74f6bec9')

package() {
  depends=('android-sdk' 'android-sdk-platform-tools')
  
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  install -D -m 644 "package.xml" "${pkgdir}/usr/share/licenses/${pkgname}/package.xml"

  chmod -R ugo+rX "${pkgdir}/opt"
}
