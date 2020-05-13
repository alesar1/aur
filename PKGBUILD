pkgname=serviio
pkgver=2.1
pkgrel=1
pkgdesc="Free DLNA media server"
arch=('any')
url="http://www.serviio.org/"
license=('custom')
depends=('java-runtime-headless>=8' 'ffmpeg')
source=(http://download.serviio.org/releases/serviio-${pkgver}-linux.tar.gz
        $pkgname.sh
        $pkgname.service
        $pkgname.desktop
        $pkgname.png)
md5sums=('31b82ca2cb472f7c055df933bf497690'
         '227a75de2dea1db93c1fba3d004e01ad'
         'e958d9812448f97fe325dfffe8b44620'
         'fbfcac4ad5dffd909e51ea1a7a6335aa'
         'd41e3e757e412dfcd3036d9e19b81450')

package() {
  cd "$pkgname-$pkgver"

  # define variable for Serviio home directory
  SERVIIO_HOME=$pkgdir/usr/share/java/$pkgname

  # create the folders needed in the main directory
  install -dm755 ${SERVIIO_HOME}/{config,lib,library,plugins}

  # place the serviio scripts in the /usr/bin folder
  install -Dm755 ${srcdir}/$pkgname.sh $pkgdir/usr/bin/$pkgname
  install -Dm755 bin/$pkgname-console.sh $pkgdir/usr/bin/$pkgname-console

  # copy xml config files to the config folder
  install -m644 config/*.xml ${SERVIIO_HOME}/config

  # copy all jar files to the lib folder
  install -m644 lib/*.jar ${SERVIIO_HOME}/lib

  # copy derby.properties to library folder
  install -m644 library/derby.properties ${SERVIIO_HOME}/library

  # copy plugins-readme.txt to plugins folder
  install -m644 plugins/plugins-readme.txt ${SERVIIO_HOME}/plugins

  # create the log folder in /var/log
  install -dm755 $pkgdir/var/log/$pkgname

  # create a symlink that puts all log files in /var/log
  ln -s /var/log/$pkgname ${SERVIIO_HOME}/log

  # supply the license file
  install -Dm644 LICENCE.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE

  # install systemd-service
  install -Dm644 "${srcdir}/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"

  #install the .desktop file
   install -Dm644 "${srcdir}/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

  #install the icon file
   install -Dm644 "${srcdir}/$pkgname.png" "$pkgdir/usr/share/icons/hicolor/48x48/apps/$pkgname.png"


}
