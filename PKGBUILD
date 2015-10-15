# Maintainer: Antergos Developers <dev@antergos.com>

pkgname=lightdm-webkit2-greeter
pkgver=0.2.1
pkgrel=1
pkgdesc="A webkit2 greeter for LightDM"
arch=('i686' 'x86_64')
url="https://github.com/antergos/lightdm-webkit2-greeter"
license=('GPL3' 'LGPL3')
source=("$pkgname-$pkgver.tar.gz::https://github.com/antergos/lightdm-webkit2-greeter/archive/${pkgver}.tar.gz")
depends=('lightdm' 'webkit2gtk>=2.10' 'webkit2gtk<2.12' 'gtk-engines' 'gtk3>=3.18' 'gtk3<3.20' 'dbus-glib' 'lightdm-webkit-theme-antergos')
provides=('lightdm-webkit2-greeter' 'lightdm-webkit-greeter')
conflicts=('lightdm-webkit-greeter')
replaces=('lightdm-webkit-greeter')
options=(!libtool)
install=greeter.install
backup=("etc/lightdm/${pkgname}.conf")
makedepends=('gnome-doc-utils' 'gobject-introspection' 'intltool' 'gnome-common')
sha256sums=('d2cb9159a434a0f9e4ccbce68aeecf2240c727a03ad98cd5440ed56ab7a26a1d')

build() {
  cd $srcdir/${pkgname}-${pkgver}
     LIBS+="-ljavascriptcoregtk-4.0" ./autogen.sh --prefix=/usr --sysconfdir=/etc --libexecdir=/usr/lib/lightdm
     
  make

  # Theme 'default' does not exist...
  sed -i '/^webkit-theme=/s/default/antergos/' data/lightdm-webkit2-greeter.conf

  # this is Ubuntu branding... Replace it with something useful. ;)
  #sed -i '/^background=/s|/usr/share/backgrounds/warty-final-ubuntu.png||' data/lightdm-webkit2-greeter.conf
  # Replace Ubuntu font with Dejavusans
  sed -i '/^font-name=/s|Ubuntu 11|DejaVuSans 11|' data/lightdm-webkit2-greeter.conf

}

package() {
  cd $srcdir/$pkgname-$pkgver
  make DESTDIR=$pkgdir install 
}
