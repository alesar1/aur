# Maintainer: goetzc
# Maintainer: Skycoder42
# Maintainer: Kppqju77
# Contributor: lestb
# Contributor: Philipp Wolfer
# Contributor: Joel Pedraza
# Contributor: Jakub Schmidtke

pkgname=android-platform
_apilevel=30
_rev=r01
pkgver=${_apilevel}_${_rev}
pkgrel=3
pkgdesc="Android SDK Platform, latest API"
arch=('any')
url="http://developer.android.com/sdk/index.html"
license=('custom')
provides=("${pkgname}-${_apilevel}")
conflicts=("${pkgname}-${_apilevel}")
options=('!strip')
source=("https://dl.google.com/android/repository/platform-${_apilevel}_${_rev}.zip"
         "package.xml")
sha1sums=('63aed027a1aa272ff894545af8106255e84f2140'
          '0ede43d54a30a90e3989ab283c51ef73f4af0d6d')
sha384sums=('c3d9fe96b6d9a36f91a123689465f7c33d4ff2035b2de7510f596ace9f4f1f15135eb8f26b3713df6e55214d9a482723'
            '801ca80cee0aec1f658a121dfce88a111675a629df96da8a8d694210d33c8e03cb9e1bb364d259633c47c89003e29510')

package() {
  depends=('android-sdk' 'android-sdk-platform-tools')
  
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  install -D -m 644 "package.xml" "${pkgdir}/usr/share/licenses/${pkgname}/package.xml"

  chmod -R ugo+rX "${pkgdir}/opt"
}
