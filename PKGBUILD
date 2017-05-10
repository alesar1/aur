# Maintainer: Thore Bödecker <me [at] foxxx0 [dot] de>
# Contributor: Karol Babioch <karol@babioch.de>

pkgname=amavisd-milter
pkgver=1.6.1
pkgrel=2
pkgdesc="sendmail milter for amavisd-new using the AM.PDP protocol"
arch=('i686' 'x86_64')
url="http://amavisd-milter.sourceforge.net/"
license=('BSD')
depends=('amavisd-new')
makedepends=('libmilter')
source=("${pkgname}-${pkgver}.tar.gz::https://sourceforge.net/projects/${pkgname}/files/${pkgname}/${pkgname}-${pkgver}/${pkgname}-${pkgver}.tar.gz/download"
        'amavisd-milter.service')
sha256sums=('d470be72ddef4cf38b93fb4b2f02dfca4f826f95137b56ebf281a7feec6cf282'
            '9ba5aa9be3d7de63dac6d52a921bf6cbf2503752ddf874b4a99576e92ea35ef6')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    # change upstream default paths (must match those of amavisd-new)
    sed -i 's|/var/amavis|/var/spool/amavis|g' "${pkgname}/amavisd-milter.8"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./configure \
        --prefix=/usr \
        --bindir=/usr/bin \
        --sbindir=/usr/bin \
        --sysconfdir=/etc/amavis \
        --localstatedir=/var/spool/amavis \
        --sharedstatedir=/usr/share
    make
}

check() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make check
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    # license
    install -D -m644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    # systemd unit
    install -D -m644 "${srcdir}/amavisd-milter.service" "${pkgdir}/usr/lib/systemd/system/amavisd-milter.service"
}
