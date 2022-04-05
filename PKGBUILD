# Maintainer: Tony Lambiris <tony@libpcap.net>

pkgname=system76-power-git
pkgver=1.1.20.r14.g1e1599a
pkgrel=1
pkgdesc="System76 Power Management"
arch=('any')
url='https://github.com/pop-os/system76-power'
license=('GPL')
conflicts=('system76-power')
provides=('system76-power')
makedepends=('git' 'rust')
depends=('dbus' 'systemd' 'system76-dkms')
source=("${pkgname}::git+https://github.com/pop-os/system76-power.git"
        "makefile.patch"
        "mkinitcpio.patch")
sha256sums=('SKIP'
            '59c2b6a4ee4d5bf728d8f68fd9c066ba33cf9c91bf173bf16734924f6e641643'
            'fefd4bd1c173cca2aafd3d5f03af20b9cfc5553f9a53f510a12d565cc90fe7ba')

pkgver() {
    cd "${srcdir}/${pkgname}"

    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${pkgname}"

    # use mkinitcpio -P inplace of update-initramfs -u
    patch --no-backup-if-mismatch -Np1 -i "${srcdir}/mkinitcpio.patch"

    # fix makefile
    patch --no-backup-if-mismatch -Np1 -i "${srcdir}/makefile.patch"
}

build() {
    cd "${srcdir}/${pkgname}"

    make
}

package() {
    cd "${srcdir}/${pkgname}"

    make sysconfdir="/usr/lib" DESTDIR="${pkgdir}" install
}
