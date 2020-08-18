# Maintainer: goetzc
# Maintainer: Skycoder42
# Maintainer: Kppqju77
# Contributor: lestb
# Contributor: Philipp Wolfer
# Contributor: Joel Pedraza
# Contributor: Jakub Schmidtke

pkgname=android-platform
_apilevel=30
_rev=r03
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
sha1sums=('e7c6280901dcfa511af098d67dd88c4dfcbc6ea2'
          '146112fc3e86f7af1001d5bafb4e398a8a2ac142')
sha384sums=('2ff53b95a4584f86ab06c5daaf8aabe6e8bb28eaa3cd2e4e06b9762959d84a0a331721eb3c6e39f49dd0691a961fa46c'
            'de3cb56bdd0e78c94a05a209765378cb60e162dc98d828b5526958ffa97b933aa738d1475224c7005af77c311b72f39f')

package() {
  depends=('android-sdk' 'android-sdk-platform-tools')
  
  mkdir -p "${pkgdir}/opt/android-sdk/platforms/"
  find "${srcdir}" -maxdepth 1 -mindepth 1 -type d | grep -P 'android-[0-9]+(\.[0-9]*)*$' | while read directory; do
      mv "${directory}" "${pkgdir}/opt/android-sdk/platforms/android-${_apilevel}"
  done

  install -D -m 644 "package.xml" "${pkgdir}/usr/share/licenses/${pkgname}/package.xml"

  chmod -R ugo+rX "${pkgdir}/opt"
}
