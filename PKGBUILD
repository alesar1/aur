# Maintainer: Victor Fuentes <hyruleterminatriforce@gmail.com>
# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Michael DeGuzis <mdeguzis@gmail.com>
# Contributor: Frederik “Freso” S. Olesen <freso.dk@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>

pkgname=lutris-git
_pkgname=lutris
pkgver=0.5.7.1.r232.g3edfd15b
pkgrel=1
pkgdesc='Open Gaming Platform'
arch=('any')
url='https://lutris.net/'
license=('GPL3')
depends=('python-gobject' 'python-yaml' 'python-evdev' 'python-dbus' 'gtk3' 'glib2' 'psmisc' 'cabextract' 'unzip' 'p7zip' 'curl' 'xorg-xrandr' 'gnome-desktop' 'python-requests' 'python-pillow' 'mesa-demos' 'python-distro')
makedepends=('git' 'python-setuptools')
checkdepends=('xorg-server-xvfb' 'xterm' 'python-nose-cover3' 'wine' 'webkit2gtk' 'python-magic')
optdepends=(
  'wine: Run windows games'
  'wine-staging: Run windows games - Staging patches'
  'python-evdev: Detecting connected joypads.'
  'python-pyinotify: Enhanced Steam integration.'
  'gamemode: Allows games to request a temporary set of optimisations.'
  'vulkan-icd-loader: Vulkan support'
  'lib32-vulkan-icd-loader: Vulkan support'
  'vkd3d: Vulkan 3D support'
  'lib32-vkd3d: Vulkan 3D support'
  'gvfs: GVFS backend'
  'python-pypresence: Discord RPC and Rich Presence')
provides=('lutris')
conflicts=('lutris')
source=('git+https://github.com/lutris/lutris.git')
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}
  git describe --long --tags | sed 's/v//; s/\([^-]*-g\)/r\1/;s/-/./g'

}

build() {
  cd ${_pkgname}
  
  python setup.py build
}

check() {
  cd ${_pkgname}

  xvfb-run nosetests --cover-erase --with-xunit --xunit-file=nosetests.xml --with-coverage --cover-package=lutris --cover-xml-file=coverage.xml
}

package() {
  cd ${_pkgname}

  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

  # Temporary fix
 # mkdir -p ${pkgdir}/usr/lib/python3.8/site-packages/lutris/runners/json
}
