# Maintainer: Dylan Delgado <dylan1496 at live dot com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Lex Black <autumn-wind@web.de>
# Contributor: Nils Czernia <nils[at]czserver[dot[de>
# Contributor: Carsten Feuls <archlinux@carstenfeuls.de>

pkgname=moodle
pkgver=4.0
_pkgver="stable400"
pkgrel=1
pkgdesc='An open-source software learning management system'
arch=('any')
url='https://moodle.org/'
license=('GPLv3')
depends=('php7>=7.3.0' 'php7-intl>=7.3.0' 'php7-gd>=7.3.0' 'mariadb>=10.2.29' 'php7-sodium>=7.3.0')
conflicts=('moodle-plus')
options=('!strip')
source=("https://download.moodle.org/${_pkgver}/${pkgname}-${pkgver}.tgz")
sha256sums=('89db03d19c33a31b95c45861a45cbcc563482f880eec6a279c19a549e461a1e3')


package() {
    install -dm0755 "${pkgdir}"/usr/share/webapps
    install -dm0755 "${pkgdir}"/var/lib/${pkgname}
    cp -a $pkgname "$pkgdir/usr/share/webapps/${pkgname}"

    # move data in var
    ln -s /var/lib/${pkgname} "$pkgdir"/usr/share/webapps/moodledata
    
    # fix rights and ownership
    # should be handled differently
    chown -R http:http "${pkgdir}"/var/lib/${pkgname}

    # php.ini
    install -dm0755 "$pkgdir"/etc/php/conf.d/
}
