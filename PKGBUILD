# Maintainer: Robert Tari <robert at tari dot in>

pkgname="libayatana-indicator"
pkgver="0.8.2"
pkgrel="1"
pkgdesc="Ayatana Indicators (Shared Library)"
arch=("i686" "x86_64" "pentium4")
url="https://github.com/AyatanaIndicators/libayatana-indicator"
license=("LGPL2.1" "LGPL3")
makedepends=("gtk3" "glib2" "ayatana-ido" "mate-common")
depends=("gtk3" "glib2" "ayatana-ido")
options=('!emptydirs')
source=("https://github.com/AyatanaIndicators/$pkgname/archive/$pkgver.tar.gz")
md5sums=("cc5fafcc8d5ff362ba217b45807bd18c")
conflicts=("${pkgname}-gtk3")
replaces=("${pkgname}-gtk3")

prepare()
{
    cd ${pkgname}-${pkgver}
    NOCONFIGURE=1 ./autogen.sh
}

build()
{
    cd ${pkgname}-${pkgver}
    ./configure --prefix=/usr --with-gtk=3 --disable-tests
    make
}

package()
{
    cd ${pkgname}-${pkgver}
    make DESTDIR="${pkgdir}" install
}
