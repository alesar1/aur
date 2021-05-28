# Maintainer: Ben Alex <ben.alex@acegi.com.au>
# Contributor: Jon Wiersma <archaur@jonw.org>

pkgname=ib-tws
pkgver=984.1j
pkgrel=1
pkgdesc='Electronic trading platform from discount brokerage firm Interactive Brokers'
arch=('any')
url="http://interactivebrokers.com/"
license=('custom')
backup=('etc/ib-tws.conf' 'etc/ib-gw.conf')
depends=(bash)
optdepends=(ffmpeg-compat-55)
makedepends=(gtk2 imagemagick unzip)

source=('LICENSE'
	'ib-tws'
	'ib-tws.conf'
	'ib-tws.desktop'
	'ib-gw'
	'ib-gw.conf'
	'ib-gw.desktop'
	"tws-${pkgver}-standalone-linux-x64.sh"::'https://download2.interactivebrokers.com/installers/tws/latest-standalone/tws-latest-standalone-linux-x64.sh')
md5sums=('c93bcc44678aef8b9d0ec6faecb27927'
         '428c553da90bb2ea650a7f96ae076937'
         '384f68e00a3010f7317cbfa0ffb9d719'
         '9205b5eade96d69f8e470cc52c30db4a'
         'b1cbe7273f3d0f2f0b6a09e65606b600'
         '5762f281cc4d624a4cd3bc62f67ffebe'
         'ffa9fcfb623850e5c9e796040bdbd052'
         '9af6c49e6e757fa69adbaf3512df3726')

build() {
  cd ${srcdir}
  chmod +x tws-${pkgver}-standalone-linux-x64.sh
  # Assumes no other Install4J packages are in use by user; if so, makepkg from dedicated user account
  majorVer=$(echo "$pkgver" | sed "s/\([0-9]\+\)\..*/\1/")
  rm -rf $HOME/.install4j $HOME/.i4j_jres $HOME/tws $HOME/Desktop/Trader\ Workstation*.desktop $HOME/.local/share/applications/Trader\ Workstation*.desktop
  ./tws-${pkgver}-standalone-linux-x64.sh -q

  BUNDLED_JRE_VER=$(ls -1 ${HOME}/.i4j_jres)
  mv ${HOME}/.i4j_jres/${BUNDLED_JRE_VER} ${HOME}/.i4j_jres/jre
  mv ${HOME}/.i4j_jres/jre ${srcdir}/jre
  mv ${HOME}/tws/jars/*.jar ${srcdir}
  rm -rf $HOME/.install4j $HOME/.i4j_jres $HOME/tws $HOME/Desktop/Trader\ Workstation*.desktop $HOME/.local/share/applications/Trader\ Workstation*.desktop $HOME/.local/share/applications/install4j_*.desktop
  cd ${srcdir}

  # Thanks to http://finance.groups.yahoo.com/group/TWSAPI/files/RPM%20spec%20file/
  unzip -o jts4launch-${majorVer}.jar trader/common/images/ibapp_icon_48x48.gif
  unzip -o jts4launch-${majorVer}.jar trader/common/images/quote_details_48x48.jpg
  convert trader/common/images/ibapp_icon_48x48.gif ${pkgname}.png
  convert trader/common/images/ibapp_icon_48x48.gif -resize 66.666% ${pkgname}-32x32.png
  convert trader/common/images/ibapp_icon_48x48.gif -resize 33.333% ${pkgname}-16x16.png
  convert trader/common/images/ibapp_icon_48x48.gif ${pkgname}-48x48.png
  convert trader/common/images/quote_details_48x48.jpg ib-gw.png
  convert trader/common/images/quote_details_48x48.jpg -resize 66.666% ib-gw-32x32.png
  convert trader/common/images/quote_details_48x48.jpg -resize 33.333% ib-gw-16x16.png
  convert trader/common/images/quote_details_48x48.jpg ib-gw-48x48.png
}

package() {
  cd ${srcdir}
  mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
  install -Dm755 ib-gw ${pkgdir}/usr/bin/ib-gw
  install -Dm644 ${pkgname}.conf ${pkgdir}/etc/$pkgname.conf
  install -Dm644 ib-gw.conf ${pkgdir}/etc/ib-gw.conf
  install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm644 ib-gw.desktop ${pkgdir}/usr/share/applications/ib-gw.desktop
  mkdir -p ${pkgdir}/usr/share/pixmaps/
  install -Dm644 *.png "${pkgdir}/usr/share/pixmaps/"
  mkdir -p ${pkgdir}/usr/share/${pkgname}/jre
  cp -R jre ${pkgdir}/usr/share/${pkgname}
  mkdir -p ${pkgdir}/usr/share/${pkgname}/jars
  install -Dm644 *.jar ${pkgdir}/usr/share/${pkgname}/jars
}
