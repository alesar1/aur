# Maintainer: Luka Žaja (luka dot zaja at protonmail dot com)

pkgname=refind-btrfs
pkgver=0.5.4
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
         'python-semantic-version'
         'python-systemd'
         'python-tomlkit'
         'python-transitions'
         'python-typeguard'
         'python-watchdog'
         'refind')
makedepends=('python-setuptools')
optdepends=('python-pillow: custom generated boot stanza icon support')
source=("https://github.com/Venom1991/refind-btrfs/archive/v${pkgver}.tar.gz")
backup=('etc/refind-btrfs.conf')
sha256sums=('0ad7bd04993fb9ba407cbbf4540d472f74377308c0754d8f209e15ec3779af3f')

build() {
    cd "${srcdir}/refind-btrfs-${pkgver}"

    python setup.py build
}

package() {
    cd "${srcdir}/refind-btrfs-${pkgver}"

    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    libdir="${pkgdir}/var/lib/${pkgname}"

    install -d -m755 "${libdir}"

    pushd build/lib/refind_btrfs/data

    install -D -m755 refind-btrfs "${pkgdir}/usr/bin/refind-btrfs"
    install -D -m644 refind-btrfs.conf-sample "${pkgdir}/etc/refind-btrfs.conf"
    install -D -m644 refind-btrfs.service "${pkgdir}/usr/lib/systemd/system/refind-btrfs.service"

    btrfslogodir="${libdir}/icons/btrfs_logo"

    install -d "${btrfslogodir}"
    install -D icons/btrfs_logo/* -t "${btrfslogodir}"

    popd

    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
