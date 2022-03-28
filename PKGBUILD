# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>

pkgname=btrfs-assistant-git
_pkgname=btrfs-assistant
pkgver=0.9.1.r30.g7b84efd
pkgrel=1
pkgdesc="An application for managing BTRFS subvolumes and Snapper snapshots"
arch=('x86_64')
url="https://gitlab.com/$_pkgname/$_pkgname"
license=('GPL3')
depends=('qt5-base' 'qt5-svg' 'noto-fonts' 'polkit')
optdepends=('snapper' 'btrfsmaintenance')
makedepends=('git' 'cmake' 'qt5-tools')
conflicts=('btrfs-assistant')
provides=('btrfs-assistant')
backup=(etc/btrfs-assistant.conf)
source=(git+$url.git)
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
    cd "$srcdir/$_pkgname"
    cmake -B build -S . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE='Release'
	make -C build
}

package() {
    cd "$srcdir/$_pkgname"
    make -C build DESTDIR="$pkgdir" install

    install -Dm0644 "$srcdir/$_pkgname/btrfs-assistant.conf" "$pkgdir/etc/btrfs-assistant.conf"
    install -Dm0644 org.btrfs-assistant.pkexec.policy "$pkgdir/usr/share/polkit-1/actions/org.btrfs-assistant.pkexec.policy"
}
