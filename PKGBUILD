# Maintainer: demian <mikar ατ gmx δοτ de>
pkgname=blockify
pkgver=3.6.3
pkgrel=2
pkgdesc="Mutes Spotify advertisements."
arch=("any")
url="https://github.com/mikar/${pkgname}"
license=("MIT")
conflicts=("blockify-git")
depends=("spotify"
         "alsa-utils"
         "pygtk"
         "gst-python"
         "python-dbus"
         "python-docopt"
         "wmctrl")
makedepends=("python-setuptools")
optdepends=("pulseaudio: mute spotify sink instead of system sound")
source=("https://github.com/mikar/${pkgname}/archive/v${pkgver}.tar.gz")

package() {
    cd "$srcdir"/${pkgname}-${pkgver}

    python3 setup.py install --root="${pkgdir}"
}
sha256sums=('7d4bb3a4b759386141ba00513b1d5c7ab98bf0300b8c5558f2d8a2001fccdfe2')
