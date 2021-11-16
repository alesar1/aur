# Maintainer: ghostbuster <aur@sieverdingbeck.com>
_pkgname=Nagstamon
pkgname=nagstamon
pkgver=3.8.0
pkgrel=1
pkgdesc="Nagios status monitor for the desktop"
depends=('python-pyqt5' 'qt5-multimedia' 'qt5-svg' 'python-requests' 'python-beautifulsoup4' 'python-keyring' 'python-psutil' 'python-requests-kerberos' 'python-lxml' 'python-dbus' 'python-dateutil' 'python-pysocks')
arch=('any')
url="https://nagstamon.ifw-dresden.de/"
license=('GPL')
source=(
        "https://github.com/HenriWahl/Nagstamon/archive/refs/tags/v$pkgver.tar.gz"
)
md5sums=(
        '441222f6aee98eac4a37f5ba6384c8dc'
)
sha256sums=(
        'e8e32479061d36ccaf34b4d5440f998ec73c0983b5290e00e523b34caebe70ed'
)

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  # setup.py imports AppInfo from Nagstamon.Config which leads to a import of keyring
  # importing keyring fails in a fakeroot environment, which seems to be somehow related to a the keyring connection init triggered by the import
  # to avoid the issue setup.py is rewritten here to resolve the need for the AppInfo import
  name=$(sed '1,/class AppInfo/d' Nagstamon/Config.py  | grep "NAME " | sed -e "s/^[\t ]*NAME = '//" -e "s/'$//")
  version=$(sed '0,/class AppInfo/d' Nagstamon/Config.py  | grep "VERSION " | sed -e "s/^[\t ]*VERSION = '//" -e "s/'$//")
  sed -i setup.py -e "s/from Nagstamon.Config import AppInfo//" -e "s/AppInfo.NAME/'${name}'/" -e "s/AppInfo.VERSION/'${version}'/"
  sed -i Nagstamon/setup.py -e "s/from Nagstamon.Config import AppInfo//" -e "s/AppInfo.NAME/'${name}'/" -e "s/AppInfo.VERSION/'${version}'/"
  sed -i setup.py -e "s/from Nagstamon.Helpers import get_distro//"
  sed -i setup.py -e "s/get_distro()/('arch', '', 'Arch Linux')/"
  python setup.py install --prefix=/usr --root="$pkgdir"
  mv $pkgdir/usr/bin/nagstamon.py $pkgdir/usr/bin/nagstamon
}

