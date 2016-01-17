# Maintainer: CTech <ctech.exe@gmail.com>

pkgname=storm-launcher-git
_pkgname=stormLauncher
pkgver=1.1.39d5790
pkgrel=1
pkgdesc="Software to control Dream Cheeky O.I.C Storm & Thunder USB Missile Launchers"
arch=('i686' 'x86_64')
url="https://github.com/7CTech/stormLauncher"
license=('ASF 2.0')
depends=('python' 
	'python2' 
	'python-pygame' 
	'python-imaging' 
	'python-pillow' 
	'python-pyusb' 
	'tk'
	'polkit')
makedepends=('git')
provides=('stormLauncher')
source=("$pkgname::git+https://github.com/7CTech/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$pkgname"
  mv stormLauncher.py stormLauncher
  chmod +x stormLauncher
  chmod +x stormLauncher-polkit
}

package() {
  cd "$pkgname"
  install -Dm755 stormLauncher 		"$pkgdir/usr/bin/stormLauncher"
  install -Dm755 stormLauncher-polkit 	"$pkgdir/usr/bin/stormLauncher-polkit"
  install -Dm644 stormLauncher.png 	"$pkgdir/etc/stormLauncher/stormLauncher.png"
  install -Dm644 warcry.wav 		"$pkgdir/etc/stormLauncher/warcry.wav"
  install -Dm644 Icon.png		"$pkgbir/etc/stormLauncher/Icon.png"
  install -Dm644 USBLauncher.desktop 	"$pkgdir/usr/share/applications/USBLauncher.dekstop"
  install -Dm644 USAGE	 		"$pkgdir/usr/share/doc/stormLauncher/USAGE"
}
