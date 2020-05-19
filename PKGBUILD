# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: renyuneyun (Rui ZHAO) <renyuneyun@gmail.com>

pkgname=flipper
pkgver=0.41.0
pkgrel=1
pkgdesc="A desktop debugging platform for mobile developers"
arch=('x86_64')
url='https://fbflipper.com'
license=('MIT')
depends=('gtk3'
       'libsecret'
       'libxss'
       'nss'
       'alsa-lib'
       'nodejs'
       'libcups')
optdepends=('watchman: An inotify-based file watching and job triggering command line utility'
      'android-sdk: Android debugging support')
makedepends=('git' 'yarn' 'gendesk')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/facebook/flipper/archive/v${pkgver}.tar.gz")
sha256sums=('fd73237ee4128f5be1ff2d120344d37046292cd627d5489496384fde8689bfdc')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}/desktop"
  mkdir -p ${srcdir}/yarn_cache
  yarn --cache-folder=${srcdir}/yarn_cache
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/desktop"
  yarn build --cache-folder=${srcdir}/yarn_cache --linux --version $pkgver 
}

package() {
  mkdir -p "${pkgdir}/opt/flipper"
  cp -aR "${srcdir}/${pkgname}-${pkgver}/dist/linux-unpacked/." "${pkgdir}/opt/flipper"
  mkdir -p "$pkgdir/usr/bin"
  ln -s "/opt/flipper/flipper" "$pkgdir/usr/bin/flipper"
  gendesk -f -n --pkgname "flipper" --pkgdesc "${pkgdesc}" --exec="flipper" --categories=Application\;Development --icon flipper
  install -Dm644 "${srcdir}/flipper.desktop" "${pkgdir}/usr/share/applications/flipper.desktop"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/desktop/static/icon.png" "${pkgdir}/usr/share/pixmaps/flipper.png"
  sed -i "s|$srcdir/$pkgname-$pkgver/desktop|/opt/flipper|g" "${pkgdir}/opt/${pkgname}/resources/app/defaultPlugins/index.json"
  sed -i "s|$srcdir/$pkgname-$pkgver/desktop|/opt/flipper|g" "${pkgdir}/opt/${pkgname}/resources/app"/*.map
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}