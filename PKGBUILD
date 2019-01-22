# Maintainer: mrxx <mrxx at cyberhome dot at>
# Contributor: Det <nimetonmaili gmail a-dot com>

pkgname=biglybt
pkgver=1.8.0.0
pkgrel=1
_build=1.8.00
pkgdesc="Feature-filled Bittorrent client based on the Azureus project"
arch=('x86_64')
url="https://www.biglybt.com/"
license=('GPL3')
depends=('desktop-file-utils' 'xdg-user-dirs' 'java-runtime>=9')
options=('!strip')
install=$pkgname.install
source=("GitHub_BiglyBT_Installer_$pkgver.sh::https://github.com/BiglySoftware/BiglyBT/releases/download/v$_build/GitHub_BiglyBT_Installer.sh")
sha256sums=('8b9770002adf0dea1750e151435ef0ccc0ec6846c167cf33a9e28252058eae4d')

package() {
  if [[ ! -f /usr/bin/javac ]]; then
    warning "Installation without JDK will cause prompts for Root password during build!"
  fi

  if [[ -d $pkgname ]]; then
    msg2 "Cleaning build environment..."
    rm -r $pkgname
  fi
  
  msg2 "Extracting GitHub_BiglyBT_Installer_$pkgver.sh..."
  export app_java_home="/usr/lib/jvm/default"
  sh GitHub_BiglyBT_Installer_$pkgver.sh -q -dir "$srcdir"/$pkgname

  # Remove local .desktop files (only if they were just created by the Java installer
  # which creates them a) in the wrong place and b) with wrong paths, therefore
  # preventing the start of the program via the launcher)
  find ~/.local/share/applications -name $pkgname.desktop -cmin -1 -exec rm {} +
  _user_desktop=$(xdg-user-dir DESKTOP)
  [ "$_user_desktop" ] && find "$_user_desktop" -name $pkgname.desktop -cmin -1 -exec rm -f {} +

  cd "$srcdir"/$pkgname

  msg2 "Creating directory structure..."
  install -d "$pkgdir"/opt/$pkgname/
  install -d "$pkgdir"/usr/bin/
  install -d "$pkgdir"/usr/share/applications/
  install -d "$pkgdir"/usr/share/licenses/$pkgname/
  install -d "$pkgdir"/usr/share/pixmaps/

  msg2 "Fixing paths..."
  sed -i "s|#PROGRAM_DIR=.*|PROGRAM_DIR=\"/opt/$pkgname\"|" $pkgname
  sed -i -e "s|Exec=.*|Exec=$pkgname %U|" -e "s|Icon=.*|Icon=$pkgname|" $pkgname.desktop
  
  msg2 "Moving stuff in place..."
  # Launchers
  mv $pkgname "$pkgdir"/usr/bin/

  # Icon and desktop
  mv $pkgname.svg "$pkgdir"/usr/share/pixmaps/
  mv $pkgname.desktop "$pkgdir"/usr/share/applications/

  # Licenses
  mv 3rdPartyLicences.txt GPL.txt GPLv3.txt "$pkgdir"/usr/share/licenses/$pkgname/  

  msg2 "Removing redundancies..."
  rm swt/swt-{bsd,ppc64,ppc64le,x86}.jar
  rm biglybt-lightgray.svg biglybt.png
  rm installer.log
  rm {,un}registerBiglyBT uninstall updateBiglyBT

  msg2 "Installing to /opt..."
  mv * "$pkgdir"/opt/$pkgname/
}
