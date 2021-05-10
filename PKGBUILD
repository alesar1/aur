# Maintainer: Ashely Roll <ash at digitalnemesis dot com>


pkgname=astrodmx-capture
pkgver=0.88.2
pkgrel=1
pkgdesc="AstroDMx Capture Astronomical Imaging"
arch=('x86_64')
url="https://www.linux-astro-imaging.uk/"
# No licence file available in package, see https://www.linux-astro-imaging.uk/linux/astronomy/linux-downloads
# for details.
license=(custom)
options=(!strip)
install=$pkgname.install

source=("https://www.astrodmx-capture.org.uk/sites/downloads/astrodmx/current/x86-64/astrodmx-glibc-2.30_${pkgver}_x86-64-manual.tar.gz")
sha256sums=("0ea638769e7a6fe305f111f5c701c4ffd8d75aff8af927875b077081ca10d52c")

_instdir="/usr/local/AstroDMx_Capture"
_prefix="R-Linux-64-2.30"

package() {
    # create the desitination folder
    mkdir -p "${pkgdir}${_instdir}"

    # copy over the linux 64 bit files
    cp --recursive ${_prefix}/usr/local/AstroDMx_Capture/* "${pkgdir}${_instdir}"

    # copy over the udev rules
    mkdir -p "${pkgdir}/etc/udev/rules.d"
    cp ${_prefix}/etc/udev/rules.d/* "${pkgdir}/etc/udev/rules.d"

    # create a profile file to add an alias for astrodmx
    mkdir -p "${pkgdir}/etc/profile.d"
    echo "alias astrodmx=\"${_instdir}/bin/AstroDMx-Launcher\"" > "${pkgdir}/etc/profile.d/${pkgname}.sh"
}
