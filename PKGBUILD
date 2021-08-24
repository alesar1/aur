# Maintainer: Mike Yuan <me@yhndnzj.com>

pkgname=btrfs-snapshot
pkgver=3.4
pkgrel=1
pkgdesc="Tool for creating btrfs snapshots"
arch=('any')
url="https://github.com/YHNdnzj/btrfs-snapshot"
license=('MIT')
optdepends=('systemd: scheduled snapshot creation support')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('988cd61a6415cf8e93e60153652c7ce1dbea09daa9b1b02875a364c2379c24ae')

package() {
    depends=('bash' 'btrfs-progs')

    cd "$pkgname-$pkgver"

    sed -e 's|\(^_f_functions\)=.*|\1=/usr/lib/btrfs-snapshot/functions|' \
        -e 's|\(^_d_configs\)=.*|\1=/etc/btrfs-snapshot|' \
        -e "s|%VERSION%|$pkgver|g" \
        -i btrfs-snapshot

    install -Dm755 btrfs-snapshot "$pkgdir/usr/bin/btrfs-snapshot"

    install -Dm644 functions "$pkgdir/usr/lib/btrfs-snapshot/functions"
    install -dm755 "$pkgdir/etc/btrfs-snapshot"

    install -Dt "$pkgdir/usr/lib/systemd/system" -m644 btrfs-snapshot{,@}.{service,timer}

    install -Dm644 README.md "$pkgdir/usr/share/doc/btrfs-snapshot/README.md"
}

# vim: set ts=4 sw=4 et:
