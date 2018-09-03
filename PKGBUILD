# Maintainer  : George Angelopoulos <george@usermod.net>
# Contributor : Christian Rebischke <Chris.Rebischke@archlinux.org>
# Contributor : dront78 <dront78@gmail.com>
pkgname=systemtap
pkgver=3.3
pkgrel=1
pkgdesc="provides infrastructure to simplify the gathering of information about the running system."
url="http://sourceware.org/systemtap/"
arch=('x86_64' 'i686')
license=('GPL')
depends=('elfutils' 'nss' 'python2')
makedepends=('python2-setuptools' 'xmlto')
optdepends=('sqlite3: for storing results in a database')
source=("${pkgname}-${pkgver}.tar.gz::https://sourceware.org/systemtap/ftp/releases/${pkgname}-${pkgver}.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.asc::https://sourceware.org/systemtap/ftp/releases/${pkgname}-${pkgver}.tar.gz.asc"
        )
sha512sums=('b75a4591bdc021645c15cb8f2b8991f46fdffb29b1d132745bafe4291aee5e1892ea9a63c8e98f011a4fee68decd99aa4401dc2f70e163e801cd140ad4cd6b6e'
            'SKIP')
install='systemtap.install'
validpgpkeys=('41A0C11274B1E87FE28E4C53E3D77E1F95161991')


build() {
  cd "${pkgname}-${pkgver}"
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib/"${pkgname}" \
    --libdir=/usr/lib/"${pkgname}" \
    --mandir=/usr/share/man/ \
    --localstatedir=/var \
    --enable-pie \
    --disable-docs \
    --enable-htmldocs
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  rmdir "${pkgdir}/var/run/stap-server/"
  rmdir "${pkgdir}/var/run/"
}

