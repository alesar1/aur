# Maintainer: Manuel Domínguez López
# <mdomlop at gmail dot com>
# @mdomlop at telegram

_pkgver_year=2019
_pkgver_month=03
_pkgver_day=05

pkgname=xcursor-retrosmart
name=retrosmart-x11-cursors
pkgver=1.0
pkgrel=1
pkgdesc="A retrosmart look collection of cursors for X."
url="https://github.com/mdomlop/$name"
source=("https://github.com/mdomlop/$name/archive/$pkgver.tar.gz")
md5sums=('d82baf529f23cb14658f8a172beabfb7')
license=('GPL3')
builddepends=('imagemagick' 'xorg-xcursorgen')
optdepends=('retrosmart-kvantum-theme: The corresponding theme for Kvantum'
            'retrosmart-qtcurve-theme: The corresponding theme for QtCurve'
            'retrosmart-openbox-themes: The corresponding Openbox themes'
            'retrosmart-xfwm4-themes: The corresponding XFwm4 themes')
arch=('any')
group=('retrosmart')
#changelog=Changelog

build() {
    cd "${srcdir}/${name}-${pkgver}"
    make
    }

package() {
    cd "${srcdir}/${name}-${pkgver}"
    make install DESTDIR=$pkgdir
}
