# Maintainer: Luka Žaja (luka dot zaja at protonmail dot com)

pkgname=refind-btrfs
pkgver=0.3.2
pkgrel=1
pkgdesc='Generate rEFInd manual boot stanzas from Btrfs snapshots'
url='https://github.com/Venom1991/refind-btrfs'
arch=(any)
license=('GPL3')
depends=('btrfs-progs'
         'python-antlr4'
         'python-injector'
         'python-more-itertools'
         'python-pid'
         'python-systemd'
         'python-tomlkit'
         'python-transitions'
         'python-watchdog'
         'refind')
makedepends=('python-setuptools')
source=("https://github.com/Venom1991/refind-btrfs/archive/v${pkgver}.tar.gz")
backup=('etc/refind-btrfs.conf')
sha256sums=('a6fa208020be14d322c20c0580d95184e44cd22d51ee8a0366ab3a647b766222')

build() {
    cd "${srcdir}/refind-btrfs-${pkgver}"

    python setup.py build
}

package() {
    cd "${srcdir}/refind-btrfs-${pkgver}"

    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    pushd build/lib/refind_btrfs/data

    install -D -m755 refind-btrfs "${pkgdir}/usr/bin/refind-btrfs"
    install -D -m644 refind-btrfs.conf-sample "${pkgdir}/etc/refind-btrfs.conf"
    install -D -m644 refind-btrfs.service "${pkgdir}/usr/lib/systemd/system/refind-btrfs.service"

    popd

    install -d -m755 "${pkgdir}/var/lib/${pkgname}"
    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
