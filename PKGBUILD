# Maintainer: Maxim Kurnosenko <asusx2@mail.ru>
# Contributor: Zack Emmert <zemmert@fastmail.com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Former Maintainer: sundar_ima <feedback.multibootusb@gmail.com>
# Former Maintainer: Angel_Caido <geussepe at gmail dot com>

pkgname=multibootusb
pkgver=9.2.0
pkgrel=5
pkgdesc="Boot multiple live Linux distros from a usb flash drive."
arch=('any')
url="https://sourceforge.net/projects/multibootusb/"
license=('GPL')
depends=('python-pyqt5' 'python-dbus' 'mtools' 'parted' 'p7zip' 'python-pyudev')

sha512sums=('461ce6edd835b2a017d96c3987338cd9004894949ac0b121fc289d100b7945dd89970f966e48310b97f312221a2f5a047190c55802d3a07a9eec0bf6ec22356d'
            'e10ddbd1588bb17d05040c001e4ca4f85d5da5a77de95154ac34d0fc7b3310a464077c88636a008b92af09b0920711d7b057f4c7542e1576708bed5a591e76d3')
source=("https://github.com/mbusb/$pkgname/archive/v${pkgver}.tar.gz"
        "fixes.patch")

prepare() {
    cd "$srcdir/$pkgname-$pkgver"

    patch -Np1 < "$srcdir/fixes.patch"
}

build() {
    cd "$srcdir/$pkgname-$pkgver"
    python setup.py build
}

package () {
    cd "$srcdir/$pkgname-$pkgver"
    chmod 755 "$srcdir/$pkgname-$pkgver/data/multibootusb.desktop"
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    sed -i "s/\/usr\/local\/bin/\/usr\/bin/" "$pkgdir/usr/share/polkit-1/actions/org.debian.pkexec.run-multibootusb.policy"
}
