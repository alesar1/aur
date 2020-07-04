# Contributor: Shaber
# Maintainer: Dan Johansen <strit@manjaro.org>

pkgname=coretoppings
pkgver=3.0.1
pkgrel=1
pkgdesc="Additional features,plugins etc for CuboCore Application Suite."
arch=('x86_64' 'aarch64')
url="https://gitlab.com/cubocore/$pkgname"
license=('GPL3')
depends=('qt5-base' 'qt5-location' 'qt5-x11extras' 'qt5-connectivity' 'libpulse' 'libxcomposite' 'libcprime')
optdepends=('ffmpeg: For media'
			'v4l-utils: For media'
			'grim: For screencapture on wayland'
			'wf-recorder: For recording on wayland'
			'playerctl: For media controls'
			'xorg-xrandr: For rotation'
			'iio-sensor-proxy: For rotation'
			'inotify-tools: For rotation'
			'bluez-utils: For bluetooth  networking'
			'networkmanager: For Wifi and Hotspot'
			'connman: Another option for Wifi and Hostspot'
			'redshift: Qwikaccess - Nightmode'
			'xorg-xinput: Qwikaccess - Diasbling touchpad, toudhscreen etc'
			'polkit: Qwickaccess - To elevate user rights'
			'libnotify: Qwikaccess - Notifications'
			'xdg-utils: Lockscreen')
groups=('coreapps')
source=("https://gitlab.com/cubocore/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
md5sums=('d2c8a7e0f21c26407a291db30566a9e5')

prepare() {
  mkdir -p build
}

build() {
  cd ${pkgname}-v${pkgver}

  qmake-qt5 ${pkgname}.pro
  make
}

package() {
  cd ${pkgname}-v${pkgver}
  make INSTALL_ROOT=${pkgdir} install
}
