# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Mantas Mikulėnas <grawity@gmail.com>

pkgname=realmd
pkgver=0.16.3
pkgrel=1
pkgdesc="DBus service for joining hosts to Active Directory and FreeIPA realms"
arch=(i686 x86_64)
url="https://freedesktop.org/software/realmd/"
license=(GPL3)
depends=(adcli dbus krb5 openldap packagekit polkit)
optdepends=('sssd: Active Directory, FreeIPA, LDAP client'
            'samba: traditional Active Directory client')
makedepends=(docbook-xsl git intltool python xmlto)
source=("https://www.freedesktop.org/software/realmd/releases/$pkgname-$pkgver.tar.gz"
        "https://www.freedesktop.org/software/realmd/releases/$pkgname-$pkgver.tar.gz.sig")
sha256sums=('d8943f66a2a666fee8be026d82a66904c0a5125aab7ef74504456ce269687dda'
            'SKIP')
validpgpkeys=('C0F67099B808FB063E2C81117BFB1108D92765AF')

prepare() {
  cd "$pkgname-$pkgver"
  AUTOMAKE=automake ACLOCAL=aclocal NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd "$pkgname-$pkgver"
  ./configure \
    --prefix=/usr           \
    --sbindir=/usr/bin      \
    --sysconfdir=/etc       \
    --localstatedir=/var    \
    --with-distro=defaults  ;
  make
}

check() {
  cd "$pkgname-$pkgver"
  make check
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" DBUS_POLICY_DIR="/usr/share/dbus-1/system.d" install
}

# vim: ts=2:sw=2:et
