# Maintainer: Philip May <eniak.info@gmail.com>
pkgname=pycharm-community-jre
_appname=pycharm-community
pkgver=2022.3
pkgrel=1
pkgdesc="PyCharm Community Edition IDE for Python with bundled JRE"
arch=(x86_64)
url="https://www.jetbrains.com/pycharm/"
license=('APACHE')
conflicts=(
  "pycharm-community-eap"
  "pycharm-community-edition"
)
source=(
  "https://download.jetbrains.com/python/pycharm-community-${pkgver}.tar.gz"
  pycharm.desktop
  pycharm.sh
)
noextract=()
sha256sums=(
  '2a23e3e6c38dd970545634dd6de79eb7f075df7bd782d3b3c8047d670f1261b7'
  'f727119ec7c8b96820e80712b1ee342de6a94ff72402e8f2d390cbff702f9b21'
  'b6f0518e59c4744ded38de63efba91205bcba406fa74944a1f3a8937566d8acc'
)

package() {
  cd "${_appname}-${pkgver}"

  # workaround FS#40934
  # see https://bugs.archlinux.org/task/40934
  sed -i 's/lcd/on/' bin/*.vmoptions

  rm -rf bin/fsnotifier-arm

  install -dm 755 "${pkgdir}"/usr/share/{licenses,pixmaps,pycharm}
  cp -dr --no-preserve='ownership' bin jbr lib plugins "${pkgdir}"/usr/share/pycharm/
  cp -dr --no-preserve='ownership' license "${pkgdir}"/usr/share/licenses/pycharm/
  ln -s /usr/share/pycharm/bin/pycharm.png "${pkgdir}"/usr/share/pixmaps/
  install -Dm 644 ../pycharm.desktop -t "${pkgdir}"/usr/share/applications/
  install -Dm 755 ../pycharm.sh "${pkgdir}"/usr/bin/pycharm
}
