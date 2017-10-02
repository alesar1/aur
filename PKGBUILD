# Maintainer: Alexander Sulfrian <asulfrian at zedat dot fu-berlin dot de>

pkgname="printer-driver-ptouch"
pkgver=1.4.2
pkgrel=1
pkgdesc='printer driver Brother P-touch label printers'
arch=('i686' 'x86_64')
url='https://bitbucket.org/philpem/printer-driver-ptouch'
license=('GPL')

depends=('ghostscript' 'foomatic-db')
makedepends=('autoconf' 'libcups' 'foomatic-db-engine')

source=("$pkgname-$pkgver.tar.bz2::https://bitbucket.org/philpem/$pkgname/get/$pkgver.tar.bz2")
sha256sums=('588b6ef0d10a693a8e8fc3e6e01dcbe31d502410a2a37ff99db3198ffe0516a2')

prepare() {
    ln -sf --no-dereference "philpem-$pkgname-"*/ "$pkgname-$pkgver"
    cd "$pkgname-$pkgver"
}

build() {
    cd "$pkgname-$pkgver"

    autoreconf --force
    ./configure --prefix=/usr
    make
}

package() {
    cd "$pkgname-$pkgver"

    make DESTDIR="$pkgdir/" install

    # Remove files already installed by foomatic-db
    for printer in PT-1500PC PT-18R PT-1950VP PT-1950 PT-1960 PT-2300 \
                   PT-2420PC PT-2450DX PT-2500PC PT-2600 PT-2610 PT-3600 \
                   PT-550A PT-9200DX PT-9200PC PT-9400 PT-9500PC PT-9600 \
                   PT-PC QL-500 QL-550 QL-650TD; do
        rm "$pkgdir/usr/share/foomatic/db/source/printer/Brother-$printer.xml"
    done
}
