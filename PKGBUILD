
# Maintainer: Wai <waicool20@gmail.com>
pkgname=huiontablet
pkgver=v15.0.0.80.202204090856
pkgrel=1
pkgdesc="Official Huion tablet drivers"
arch=('x86_64')
url="https://www.huion.com/download/"
license=('unknown')
source=("https://driverdl.huion.com/driver/Linux/HuionTablet_$pkgver.$arch.tar.xz")
md5sums=("45ca87801f19c193992e7c5cc0b87739")

prepare() {
  cd "${srcdir}"

  # Modify install script with our dirs
  sed -E -i "s|(sysRuleDir=).*|\1$pkgdir/usr/lib/udev/rules.d|" install.sh
  sed -E -i "s|(sysAppDir=).*|\1$pkgdir/usr/lib/|" install.sh
  sed -E -i "s|(sysDesktopDir=).*|\1$pkgdir/usr/share/applications|" install.sh
  sed -E -i "s|(sysAppIconDir=).*|\1$pkgdir/usr/share/icons|" install.sh
  sed -E -i "s|(sysAutoStartDir=).*|\1$pkgdir/etc/xdg/autostart|" install.sh

  sed -E -i "s|sudo ||" install.sh
  sed -E -i "s|/usr/lib/huiontablet/res|$pkgdir\0|" install.sh
}

package() {
	cd "${srcdir}"

  # Make directories
  grep "sys.*Dir=" install.sh | sed -E 's/.*=(.*)/\1/' | tr -d '"' | xargs mkdir -p

  # Invoke install script
	sh install.sh
}

