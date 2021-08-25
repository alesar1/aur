# Maintainer: goetzc
# Maintainer: Skycoder42
# Maintainer: Kppqju77
# Contributor: lestb
# Contributor: Philipp Wolfer
# Contributor: Joel Pedraza
# Contributor: Jakub Schmidtke

pkgname=android-platform
_apilevel=31
_rev=r01
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
sha1sums=('ca5bcaa565cb37e9d287051d6dd0e49a5426ec29'
          '282839150fb5472b8784c23943dde146ac5bb116')
sha384sums=('0a7b03eb59df99d0be5acc9c3c43c1d575afeb069bca8c6aee117820fca68d1b89da133fd6fc64d74542045efb48a501'
            'e84e72953a3a6b082563b7218b43c88915e8d0c8b55a645829ab59e95521798a57d50889348c18a837050c60862023c7')

package() {
  depends=('android-sdk' 'android-sdk-platform-tools')
  
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  install -D -m 644 "package.xml" "${pkgdir}/usr/share/licenses/${pkgname}/package.xml"

  chmod -R ugo+rX "${pkgdir}/opt"
}
