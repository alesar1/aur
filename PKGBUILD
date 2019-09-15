# Maintainers: goetzc, Skycoder42
# Contributors: lestb, Philipp Wolfer, Joel Pedraza, Jakub Schmidtke

pkgname=android-platform
_apilevel=29
_rev=r03
pkgver=${_apilevel}_${_rev}
pkgrel=1
pkgdesc="Android SDK Platform, latest API"
arch=('any')
url="http://developer.android.com/sdk/index.html"
license=('custom')
depends=('android-sdk' 'android-sdk-platform-tools')
provides=("${pkgname}-${_apilevel}")
conflicts=("${pkgname}-${_apilevel}")
options=('!strip')
source=("https://dl-ssl.google.com/android/repository/platform-${_apilevel}_${_rev}.zip")
sha1sums=('670e2e104333dae90e16ea3b615f0b63da5883ae')
sha384sums=('903c9787eca23d71277244eb39ccdccedbd8bf7570d6e6f3d8494f06389687067d9f1ee13d29ec2644b3c74229bded7e')

package() {
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  chmod -R ugo+rX "${pkgdir}/opt"
}
