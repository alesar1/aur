# Maintainer: Det <nimetonmaili gmail a-dot com>

pkgname=biglybt-extreme-mod
pkgver=1.4.0.0b1
_ver=${pkgver/b*}
pkgrel=1
pkgdesc="A modded version of the BiglyBT client with multiple spoofing capabilities"
arch=('x86_64')
url="http://www.sb-innovation.de/f41/"
license=('GPL3')
depends=('desktop-file-utils' 'java-runtime>=9')
options=('!strip')
install=$pkgname.install
source=("GitHub_BiglyBT_Installer_$pkgver.sh::https://github.com/BiglySoftware/BiglyBT/releases/download/v$_ver/GitHub_BiglyBT_Installer.sh"
        'http://www.sb-innovation.de/attachments/f41/18562d1516610368-biglybt-extreme-mod-sb-innovation-1-4-0-0-beta-rev1-biglybt_1.4.0.0_20180122.zip')
noextract=($(basename ${source[1]}))
md5sums=('1e059362ac473e4a8c386bb5115bffa4'
         'de9fa89bafd150041855857243b3cbde')

prepare() {
  rm -rf $pkgname

  msg2 "Extrcting GitHub_BiglyBT_Installer_$pkgver.sh..."
  export app_java_home=$(ls -d /usr/lib/jvm/java-{9,10}-*/jre | sort -V | tail -1)
  sh GitHub_BiglyBT_Installer_$pkgver.sh -q -dir "$srcdir"/$pkgname
}

package() {
  cd "$srcdir"/$pkgname

  msg2 "Creating directory structure..."
  install -d "$pkgdir"/opt/$pkgname/
  install -d "$pkgdir"/usr/bin/
  install -d "$pkgdir"/usr/share/applications/
  install -d "$pkgdir"/usr/share/licenses/$pkgname/
  install -d "$pkgdir"/usr/share/pixmaps/

  msg2 "Moving stuff in place..."
  # Launchers
  mv biglybt "$pkgdir"/usr/bin/$pkgname

  # Icon and desktop
  mv biglybt.svg "$pkgdir"/usr/share/pixmaps/$pkgname.svg
  mv biglybt.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop

  # Licenses
  mv 3rdPartyLicences.txt GPL.txt GPLv3.txt "$pkgdir"/usr/share/licenses/$pkgname/  

  msg2 "Removing redundancies..."
  rm swt/swt-{bsd,ppc64,ppc64le,x86}.jar
  rm biglybt-lightgray.svg biglybt.png
  rm installer.log
  rm {,un}registerBiglyBT uninstall updateBiglyBT

  msg2 "Installing to /opt..."
  mv * "$pkgdir"/opt/$pkgname/
  
  msg2 "Fixing paths..."
  sed -i "s|#PROGRAM_DIR=.*|PROGRAM_DIR=\"/opt/$pkgname\"|" "$pkgdir"/usr/bin/$pkgname
  sed -e "s|Name=.*|Name=BiglyBT Extreme Mod|" -e "s|Exec=.*|Exec=$pkgname %U|" -e "s|Icon=.*|Icon=$pkgname|" \
      -i "$pkgdir"/usr/share/applications/$pkgname.desktop

  msg2 "Installing Extreme Mod..."
  bsdtar -xf "$srcdir"/$(basename ${source[1]}) -C "$pkgdir"/opt/$pkgname/
}
