# Maintainer: Pedro Henrique <pedro00dk@gmail.com>
pkgname=overgrive
pkgver=3.3.1
pkgrel=2
pkgdesc="A complete Google Drive™ desktop client solution for Linux"
arch=('x86_64')
url="https://www.thefanclub.co.za/overgrive"
license=("unknown")
depends=(
    # original overgrive dependencies
    # libnotify python3 python-oauth2client python-pyinotify python-pip python-gobject libappindicator-gtk3
    #
    # I removed python-pip package not to have any global python package that isn't a system package
    libnotify python3 python-oauth2client python-pyinotify python-gobject libappindicator-gtk3
)
provides=("overgrive")
conflicts=("overgrive")
install="overgrive.install"
changelog=
source=(
    "https://www.thefanclub.co.za/sites/default/files/public/overgrive/overgrive-3.3.1-0-any.pkg.tar.xz"
)
noextract=("overgrive-3.3.1-0-any.pkg.tar.xz")
md5sums=("5e42edfb340a7c34785ad04655b1ff39")
prepare() {
    tar --extract --file='./overgrive-3.3.1-0-any.pkg.tar.xz'
    rm -- './overgrive-3.3.1-0-any.pkg.tar.xz'
    sed --in-place -- \
        's+Exec=python3+Exec=/opt/thefanclub/overgrive/venv/bin/python3+g' \
        './usr/share/applications/overgrive.desktop' \
        './opt/thefanclub/overgrive/overgrive-autostart.desktop'
}
package() {
    cp --recursive -- './opt/' './usr/' "${pkgdir}/"
}
