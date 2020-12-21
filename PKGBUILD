# maintainer: Ricardo Band <email@ricardo.band>

pkgname=cephadm
pkgver=15.2.8
pkgrel=1
pkgdesc='Cephadm deploys and manages a Ceph cluster by connection to hosts from the manager daemon via SSH to add, remove, or update Ceph daemon containers'
arch=('any')
url="https://ceph.com/"
license=('GPL2' 'LGPL2.1' 'LGPL3')
depends=('lvm2' 'python>=3')
optdepends=('podman: container backend'
            'docker: container backend'
            'chrony: time sync service'
            'ntp: time sync service')
provides=('cephadm')
conflicts=('cephadm-git')
source=("cephadm-$pkgver::https://github.com/ceph/ceph/raw/v$pkgver/src/cephadm/cephadm")
sha256sums=('b7ba032a9b9f9ce328a14771e58411374f8b7402e57371bb5a5948b61e122a8b')

package() {
    cd $srcdir
    install -Dm0755 cephadm-$pkgver $pkgdir/usr/bin/cephadm
}

