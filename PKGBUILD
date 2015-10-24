# Maintainer: Kenneth Henderick <kenneth@ketronic.be>

pkgname=zfs-snap-manager
pkgver=0.1.13
pkgrel=1
pkgdesc="A bunch of python2 scripts running as a service, using a configuration file to manage ZFS snapshots"
arch=('any')
url="https://github.com/khenderick/zfs-snap-manager"
license=('MIT')
depends=('zfs' 'python2>=2.7' 'openssh' 'mbuffer' 'python2-daemon')
source=("https://github.com/khenderick/$pkgname/archive/v$pkgver.zip")
md5sums=('b80c1d3bb1627d06e16d841cf1380eb4')
install=$pkgname.install

package() {
    cd "$srcdir"/$pkgname-$pkgver
    mkdir -p "$pkgdir/usr/lib/zfs-snap-manager/"
    install -D -m644 "scripts/clean.py" "$pkgdir/usr/lib/zfs-snap-manager/clean.py"
    install -D -m644 "scripts/zfs.py" "$pkgdir/usr/lib/zfs-snap-manager/zfs.py"
    install -D -m644 "scripts/helper.py" "$pkgdir/usr/lib/zfs-snap-manager/helper.py"
    install -D -m755 "scripts/manager.py" "$pkgdir/usr/lib/zfs-snap-manager/manager.py"
    install -D -m644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -D -m644 "system/zfs-snap-manager.service" "${pkgdir}/usr/lib/systemd/system/zfs-snap-manager.service"
}
