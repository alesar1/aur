# Author: Robert Tari <robert at tari dot in>
# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-webmail"
pkgver="21.2.6"
pkgrel="1"
pkgdesc="Webmail notifications and actions for any desktop"
arch=("any")
url="https://tari.in/www/software/ayatana-webmail/"
license=("GPL3")
depends=("ayatana-indicator-messages" "hicolor-icon-theme" "dconf" "gobject-introspection" "desktop-file-utils" "libnotify" "libcanberra" "gnome-keyring" "python-babel" "python-gobject" "python-psutil" "python-secretstorage" "python-urllib3")
makedepends=("python-setuptools" "python-polib")
optdepends=("libunity")
install="${pkgname}.install"
source=("https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("59b795654456f2ce68e7923dd3b0fd75")
options=("!emptydirs")
replaces=("unity-mail")
conflicts=("unity-mail")

build()
{
    cd ${pkgname}-${pkgver}
    python setup.py build
}

package()
{
    cd ${pkgname}-${pkgver}
    python setup.py install --root="${pkgdir}" --optimize=1
}
