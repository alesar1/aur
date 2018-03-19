# Maintainer: Dave Blair <mail@dave-blair.de>
# Contributor: Nick Bair <njbair at gmail dot com>
pkgname=bubbleupnpserver
pkgver=0.9.30
pkgrel=1
pkgdesc="Stream content to Android devices over the Internet – requires UPNP/DNLA backend e.g. Mediatomb"
arch=('any')
url="http://www.bubblesoftapps.com/bubbleupnpserver/"
license=('custom:bubbleupnpserver')
depends=('java-runtime>=7' 'ffmpeg')
makedepends=('unzip')
install=${pkgname}.install
source=(
"http://www.bubblesoftapps.com/bubbleupnpserver/BubbleUPnPServer-distrib.zip"
"bubbleupnpserver.service"
"service_config"
"sysuser.conf"
)
sha256sums=('5053f208f9c61090f512a61069de8255f973a3d2abb55293f75fe9d831fe1b60'
            'a5992d91512469eca0a20634165f90ca8105107801fbd3fec60b45824ef311fb'
            '61bf63a84b839b85c0fdf0210310c94242bbb6e1aa69bf0d6c46efa013b52ae5'
            'fd764bb4c785ab0e2481d26f4f30656ba756949afa8ed949234e722ded87bf04'
)
backup=("etc/conf.d/bubbleupnpserver" "var/lib/bubbleupnp/configuration.xml")
build() {
  cd ${srcdir}
  unzip -qfo "${srcdir}/BubbleUPnPServer-distrib.zip" -d ${srcdir}

}

package() {
  install -D -m644 ${srcdir}/LICENCE.txt                      ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  install -D -m644 ${srcdir}/bcprov-jdk16-146.jar             ${pkgdir}/usr/share/${pkgname}/bcprov-jdk16-146.jar 
  install -D -m644 ${srcdir}/BubbleUPnPServerLauncher.jar     ${pkgdir}/usr/share/${pkgname}/BubbleUPnPServerLauncher.jar 
  install -D -m755 ${srcdir}/launch.sh                        ${pkgdir}/usr/share/${pkgname}/launch.sh
  install -D -m644 ${srcdir}/bubbleupnpserver.service         ${pkgdir}/usr/lib/systemd/system/${pkgname}.service
  install -D -m644 ${srcdir}/service_config		      ${pkgdir}/etc/conf.d/bubbleupnpserver
  install -D -m644 ${srcdir}/sysuser.conf                     ${pkgdir}/usr/lib/sysusers.d/bubbleupnpserver.conf
}
