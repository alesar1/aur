# Maintainer: Sythelux Rikd <dersyth@gmail.com>
# Contributor: 

_corpname=glaxnimate
_pkgname='glaxnimate'
pkgname="$_pkgname-bin"
pkgver=0.3.1
pkgrel=1
pkgdesc="Simple vector animation program."
url="https://glaxnimate.mattbas.org/"
license=('GPL3')
arch=('x86_64')
makedepends=()
depends=('qt5-base' 'python' 'zlib' 'hicolor-icon-theme')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
    "$_pkgname-$pkgver.deb::https://gitlab.com/mattbas/$_pkgname/-/jobs/artifacts/${pkgver}/raw/build/$_pkgname.deb?job=linux%3Adeb"
)
sha1sums=('5beb5b768e19f57440d7ce3e3026d97106147bd0')
prepare() {
    cd $srcdir/
}

build() {
    cd $srcdir/
    
    mkdir -p deb/$_pkgname
    cd deb/$_pkgname
    echo "extracting data"
    tar xf $srcdir/data.tar.*
    echo "done: extracting data"
}

package() {
    cd $srcdir/
    echo "creating dirs"
    mkdir -p $pkgdir/usr/bin/
    mkdir -p $pkgdir/usr/share/
    mkdir -p $pkgdir/usr/share/applications/
    mkdir -p $pkgdir/usr/share/icons/hicolor/{512x512/apps,scalable/apps}/
    cd $srcdir/deb/$_pkgname/usr/share/
    find . -type d -exec mkdir -p "$pkgdir/usr/share/{}" \;
    echo "done: creating dirs"
    echo "installing files"
    install -m 0755 $srcdir/deb/$_pkgname/usr/bin/$_pkgname $pkgdir/usr/bin/$_pkgname
    install -m 0644 $srcdir/deb/$_pkgname/usr/share/applications/$_pkgname.desktop $pkgdir/usr/share/applications/
    for icons in 512x512 scalable; do
        install -m 0644 $srcdir/deb/$_pkgname/usr/share/icons/hicolor/$icons/$_pkgname.* $pkgdir/usr/share/icons/hicolor/$icons/apps/
    done
    cd $srcdir/deb/$_pkgname/usr/share/
    find . -type f -exec install -m 0644 "$srcdir/deb/$_pkgname/usr/share/{}" "$pkgdir/usr/share/{}" \;
    echo "done: installing files"
}
