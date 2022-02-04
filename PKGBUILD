# Maintainer: Leonid Vaiman <vleon1@gmail.com>
pkgname=pycharm-community-jre-aarch64
pkgver=2021.3.2
pkgrel=1
pkgdesc="PyCharm Community Edition IDE for Python with bundled JRE with aarch64 support"
arch=(x86_64 aarch64)
url="https://www.jetbrains.com/pycharm/"
license=('APACHE')
conflicts=(
  "pycharm-community-eap"
  "pycharm-community-edition"
  "pycharm-community-jre"
)
source=(
  "https://download.jetbrains.com/python/pycharm-community-${pkgver}.tar.gz"
  pycharm.desktop
  pycharm.sh
)
source_aarch64=(
  "https://cache-redirector.jetbrains.com/intellij-jbr/jbr-11_0_13-linux-aarch64-b1751.25.tar.gz"
  fsnotifier-aarch64
)
sha256sums=(
  'f1ae01f471d01c6f09aab0a761c6dea9834ef584f2aaf6d6ebecdce6b55a66e8'
  'f727119ec7c8b96820e80712b1ee342de6a94ff72402e8f2d390cbff702f9b21'
  'b6f0518e59c4744ded38de63efba91205bcba406fa74944a1f3a8937566d8acc'
)
sha256sums_aarch64=(
  '221cb3e6afff5734861873da0a70bdb8186e202e6e8c0f50b22dbafd2a19ba4d'
  '8e8aecc0770fe6d7fdc78753c4ac8acc5fe28f94fc28d196fadc01a4aede348f'
)

package() {
  cd "pycharm-community-${pkgver}"

  # https://youtrack.jetbrains.com/articles/IDEA-A-48/JetBrains-IDEs-on-AArch64#linux
  if [ "${CARCH}" == "aarch64" ]; then
    rm -rf jbr
    cp -r ../jbr .
    cp ../fsnotifier-aarch64 bin/
    chmod +x bin/fsnotifier-aarch64
    echo "idea.filewatcher.executable.path=/usr/share/pycharm/bin/fsnotifier-aarch64" >> bin/idea.properties
  fi

  # workaround FS#40934
  # see https://bugs.archlinux.org/task/40934
  sed -i 's/lcd/on/' bin/*.vmoptions

  install -dm 755 "${pkgdir}"/usr/share/{licenses,pixmaps,pycharm}
  cp -dr --no-preserve='ownership' bin jbr lib plugins "${pkgdir}"/usr/share/pycharm/
  cp -dr --no-preserve='ownership' license "${pkgdir}"/usr/share/licenses/pycharm/
  ln -s /usr/share/pycharm/bin/pycharm.png "${pkgdir}"/usr/share/pixmaps/
  install -Dm 644 ../pycharm.desktop -t "${pkgdir}"/usr/share/applications/
  install -Dm 755 ../pycharm.sh "${pkgdir}"/usr/bin/pycharm
}
